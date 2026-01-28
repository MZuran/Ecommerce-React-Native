const parseJsonFields = (card) => ({
    ...card,
    typeline: card.typeline ? JSON.parse(card.typeline) : null,
    linkmarkers: card.linkmarkers ? JSON.parse(card.linkmarkers) : null,
})

const rowsToObjectById = (rows) => {
    if (!rows || rows.length === 0) {
        return false
    }

    return rows.reduce((acc, row) => {
        acc[row.id] = parseJsonFields(row)
        return acc
    }, {})
}

// **************************************************
const ALLOWED_FIELDS = new Set([
    'id',
    'name',
    'type',
    'humanReadableCardType',
    'frameType',
    'race',
    'archetype',
    'attribute',
    'level',
    'atk',
    'def',
    'linkval',
    'price',
    'stock',
    'desc'
])

const TEXT_FIELDS = new Set([
    'name',
    'type',
    'humanReadableCardType',
    'frameType',
    'race',
    'archetype',
    'attribute',
    'desc',
]);

export const searchCards = async (db, filters = {}) => {

    console.log("********************************************************");
    console.log("Searching for the following filters", filters);

    const clauses = [];
    const values = [];

    // Extract sortBy separately
    const { sortBy, ...searchFilters } = filters || {};
    console.log("Sorting by", sortBy);

    // Build WHERE clauses
    for (const [key, value] of Object.entries(searchFilters)) {
        if (!ALLOWED_FIELDS.has(key) && key !== 'text') continue;
        if (value === undefined || value === null || value === '') continue;

        // General text search
        if (key === 'text') {
            const orClauses = GENERAL_TEXT_FIELDS.map(
                field => `LOWER(${field}) LIKE ?`
            );

            clauses.push(`(${orClauses.join(' OR ')})`);
            GENERAL_TEXT_FIELDS.forEach(() =>
                values.push(`%${value.toLowerCase()}%`)
            );

            continue;
        }

        // Normal text fields
        if (TEXT_FIELDS.has(key)) {
            clauses.push(`LOWER(${key}) LIKE ?`);
            values.push(`%${value.toLowerCase()}%`);
        } else {
            clauses.push(`${key} = ?`);
            values.push(value);
        }
    }


    const whereClause = clauses.length ? `WHERE ${clauses.join(' AND ')}` : '';
    const orderClause = sortBy && ALLOWED_FIELDS.has(sortBy) ? `ORDER BY ${sortBy} ASC` : '';

    const query = `SELECT * FROM cards ${whereClause} ${orderClause}`;

    console.info(query);
    console.info(values);

    const rows = await db.getAllAsync(query, values);
    return rowsToObjectById(rows);
};
