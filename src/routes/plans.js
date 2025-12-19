import { everydayPlans } from "../data/plans.js";
import { PlansResponse } from "../schemas/index.js";

/**
 * Register plans routes
 * @param {import('fastify').FastifyInstance} fastify
 */
export async function plansRoutes(fastify) {
  // GET /plans/everyday - Get all everyday plans
  fastify.get(
    "/plans/everyday",
    {
      schema: {
        tags: ["plans"],
        description: "Get all everyday plans with pricing and features",
        summary: "Get everyday plans",
        response: {
          200: PlansResponse,
        },
      },
    },
    async (request, reply) => {
      return reply.code(200).send({
        success: true,
        status: 200,
        payload: everydayPlans,
      });
    }
  );

  fastify.log.info("Plans routes registered");
}
