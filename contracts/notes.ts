// Estructura de un Apunte Efectivo basado en nuestra investigación
export interface EffectiveNote {
    id: string;
    subject: string;      // Ej: "Contabilidad Básica"
    semester: number;     // Ej: 1
    module: number;       // Ej: 3
    topic: string;        // Ej: "Partida Doble"
    cornell: {
      cues: string[];     // Preguntas clave
      notes: string[];    // Contenido parafraseado
      summary: string;    // Resumen final
    };
    reviewQuestions: {    // Para Repetición Espaciada
        question: string;
        answer: string;
        lastReviewed?: Date;
        nextReview?: Date;
    }[];
}
