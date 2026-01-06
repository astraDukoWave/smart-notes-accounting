import 'dotenv/config';
import { db } from './db';
import { notes } from './schema';

async function main() {
  console.log("🌱 Empezando la siembra de datos (Seeding)...");

  try {
    await db.insert(notes).values({
        // Drizzle usa los nombres de las propiedades de tu objeto schema (camelCase)
        subject: "Contabilidad I",
        semester: 1,
        module: 1,
        topic: "Postulados Básicos",
        
        cornell: {
          cues: ["Sustancia Económica"],
          notes: ["Debe prevalecer la realidad económica sobre la forma jurídica."],
          summary: "Refleja la esencia económica de las transacciones."
        },
        
        // CORRECCIÓN: Usamos reviewQuestions (como en tu schema), no review_questions
        reviewQuestions: [
          {
            question: "¿Qué prevalece en el registro: la forma jurídica o la realidad económica?",
            answer: "La sustancia económica.",
            nextReview: new Date().toISOString()
          }
        ],
        
        // CORRECCIÓN: Usamos userId (como en tu schema), no user_id
        userId: "jonathan_munoz"
    });

    console.log("✅ Seeding completado con éxito.");
  } catch (error) {
    console.error("❌ Error en el seeding:", error);
    console.error("Detalles:", JSON.stringify(error, null, 2));
  }
}

main();