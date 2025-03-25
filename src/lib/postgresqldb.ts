import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const connectDB = async () => {
    try {
        await pool.connect();
        console.log('Postgres database connection successful');
    } catch (error) {
        console.error(error);
        console.error('Postgres database connection failed');
    }
};

connectDB();

export default pool;