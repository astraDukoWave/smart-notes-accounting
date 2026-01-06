import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  throw new Error('❌ DATABASE_URL no encontrada en el archivo .env');
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });