# Spec 02: Database & Spaced Repetition Logic

## Objetivo
Implementar la persistencia de apuntes y la lógica científica de repaso basada en el intervalo 2-3-5-7 días.

## Modelo de Datos (Drizzle + Postgres)
Usaremos el esquema definido en `backend/schema.ts` con la tabla `notes`.

## Lógica del Algoritmo de Repaso
Cada vez que un usuario marca un apunte como "Repasado", el sistema calculará la próxima fecha (`nextReview`) basándose en el nivel actual:

| Nivel de Repaso | Intervalo (Días) | Acción |
| :--- | :--- | :--- |
| Nivel 0 (Nuevo) | +2 días | Primera consolidación |
| Nivel 1 | +3 días | Refuerzo intermedio |
| Nivel 2 | +5 días | Memoria a mediano plazo |
| Nivel 3 | +7 días | Consolidación total |

## Implementación de Tareas Automáticas
1. **Cron Job:** Una API Route `/api/cron/reminders` protegida por un CRON_SECRET.
2. **Email Service:** Integración con Resend para enviar el resumen del Cornell Note que toca repasar hoy.