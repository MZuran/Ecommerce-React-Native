const toJson = (value) =>
    value ? JSON.stringify(value) : null;

export const insertCards = async (db, cardsObject) => {
    try {
        await db.execAsync("BEGIN TRANSACTION;");

        for (const card of Object.values(cardsObject)) {
            const {
                id,
                name,
                type,
                humanReadableCardType,
                frameType,
                desc,
                race,
                archetype,

                atk,
                def,
                level,
                attribute,
                linkval,

                typeline,
                linkmarkers,

                card_images,

                price,
                stock
            } = card;

            const image = card_images?.[0] ?? {};

            await db.runAsync(
                `
        INSERT OR REPLACE INTO cards (
          id,
          name,
          type,
          humanReadableCardType,
          frameType,
          desc,
          race,
          archetype,
          atk,
          def,
          level,
          attribute,
          linkval,
          typeline,
          linkmarkers,
          image_url,
          image_url_small,
          image_url_cropped,
          price,
          stock
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `,
                [
                    id,
                    name,
                    type,
                    humanReadableCardType,
                    frameType,
                    desc,
                    
                    race ?? null,
                    archetype ?? null,

                    atk ?? null,
                    def ?? null,
                    level ?? null,
                    attribute ?? null,
                    linkval ?? null,

                    toJson(typeline),
                    toJson(linkmarkers),

                    image.image_url ?? null,
                    image.image_url_small ?? null,
                    image.image_url_cropped ?? null,

                    price ?? null,
                    stock ?? null
                ]
            );
        }

        await db.execAsync("COMMIT;");
        console.log("Cards inserted successfully");
    } catch (error) {
        await db.execAsync("ROLLBACK;");
        console.error("Error inserting cards", error);
    }
};
