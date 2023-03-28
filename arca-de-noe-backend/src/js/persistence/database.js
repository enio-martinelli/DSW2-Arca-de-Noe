import mysql from 'mysql2';

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "arca_de_noe"
}).promise();

export function getPool() { return pool; }
export async function closePool() {
    try {
        await pool.end();
    } catch (err) {
        console.log('Error closing pool');
        console.log(err);
    }
}