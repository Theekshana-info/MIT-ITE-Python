import { defineConfig } from "drizzle-kit";

// Database URL is optional - this project uses in-memory storage
// Only needed if you want to migrate to a real database in the future
const databaseUrl = process.env.DATABASE_URL || "postgresql://placeholder";

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
