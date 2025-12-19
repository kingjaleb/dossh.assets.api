import { plansRoutes } from "./plans.js";

export async function registerRoutes(fastify) {
  // Register API routes with prefix
  await fastify.register(plansRoutes);

  fastify.log.info("Routes registered successfully");
}
