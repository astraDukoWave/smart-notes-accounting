import { pgTable, text, integer, jsonb, timestamp, uuid } from "drizzle-orm/pg-core";

export const notes = pgTable("notes", {
  id: uuid("id").primaryKey().defaultRandom(),
  subject: text("subject").notNull(),
  semester: integer("semester").notNull(),
  module: integer("module").notNull(),
  topic: text("topic").notNull(),
  
  // Estructura Cornell (JSONB para flexibilidad)
  cornell: jsonb("cornell").$type<{
    cues: string[];
    notes: string[];
    summary: string;
  }>().notNull(),

  // Algoritmo Spaced Repetition (2-3-5-7)
  reviewQuestions: jsonb("review_questions").$type<{
    question: string;
    answer: string;
    nextReview: string; // Fecha ISO
  }[]>().notNull(),

  userId: text("user_id").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});