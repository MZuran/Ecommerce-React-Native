export const initializeDB = async (db) => {
    try {

        const query = 
        "CREATE TABLE IF NOT EXISTS sessions (id INTEGER PRIMARY KEY NOT NULL, email TEXT NOT NULL, localId TEXT NOT NULL);"
        
        await db.execAsync(query)

        console.log("Database initialized successfully")
        
    } catch (error) {
        console.error("Error when trying to initialize DB", error)
    }
}