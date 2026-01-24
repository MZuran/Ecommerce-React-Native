export const initializeDB = async (db) => {
  try {
    await db.execAsync(`
      -- Sessions
      CREATE TABLE IF NOT EXISTS sessions (
        id INTEGER PRIMARY KEY NOT NULL,
        email TEXT NOT NULL,
        localId TEXT NOT NULL
      );

      -- Cards
      CREATE TABLE IF NOT EXISTS cards (
        id INTEGER PRIMARY KEY,
        name TEXT,
        type TEXT,
        humanReadableCardType TEXT,
        frameType TEXT,
        desc TEXT,
        race TEXT,
        archetype TEXT,

        atk INTEGER,
        def INTEGER,
        level INTEGER,
        attribute TEXT,
        linkval INTEGER,

        typeline TEXT,      -- JSON array
        linkmarkers TEXT,   -- JSON array

        image_url TEXT,
        image_url_small TEXT,
        image_url_cropped TEXT,

        price REAL,
        stock INTEGER
      );
    `);

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error when trying to initialize DB", error);
  }
};
