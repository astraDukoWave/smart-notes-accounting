import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

export default defineConfig({
  schema: "./schema.ts",      // Dónde está tu código TypeScript
  out: "./drizzle",           // Dónde guardará el SQL generado
  dialect: "postgresql",      // Dialecto estándar
  dbCredentials: {
    url: process.env.DATABASE_URL!, // La URL que configuraremos ahora
  },
});