CREATE TABLE "notes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"subject" text NOT NULL,
	"semester" integer NOT NULL,
	"module" integer NOT NULL,
	"topic" text NOT NULL,
	"cornell" jsonb NOT NULL,
	"review_questions" jsonb NOT NULL,
	"user_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
