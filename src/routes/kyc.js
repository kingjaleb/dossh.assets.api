import { kycDocumentTypes } from "../data/kyc-documents.js";
import { yearlyIncomeOptions } from "../data/yearly-income.js";
import { incomeSourceOptions } from "../data/income-sources.js";
import {
  getIndustries,
  getOccupationsByIndustryId,
} from "../data/industries.js";
import { usageActivities } from "../data/usage-activities.js";
import {
  KYCDocumentTypesResponse,
  YearlyIncomeResponse,
  IncomeSourcesResponse,
  IndustriesResponse,
  OccupationsResponse,
  OccupationsErrorResponse,
  UsageActivitiesResponse,
} from "../schemas/index.js";

/**
 * Register KYC routes
 * @param {import('fastify').FastifyInstance} fastify
 */
export async function kycRoutes(fastify) {
  // GET /kyc/document-types - Get all KYC document types with fields
  fastify.get(
    "/kyc/document-types",
    {
      schema: {
        tags: ["kyc"],
        description:
          "Get all available KYC document types with field requirements and validation rules",
        summary: "Get KYC document types",
        response: {
          200: KYCDocumentTypesResponse,
        },
      },
    },
    async (request, reply) => {
      return reply.code(200).send({
        success: true,
        status: 200,
        payload: kycDocumentTypes,
      });
    }
  );

  // GET /kyc/yearly-income - Get yearly income options
  fastify.get(
    "/kyc/yearly-income",
    {
      schema: {
        tags: ["kyc"],
        description: "Get all yearly income range options for KYC",
        summary: "Get yearly income options",
        response: {
          200: YearlyIncomeResponse,
        },
      },
    },
    async (request, reply) => {
      return reply.code(200).send({
        success: true,
        status: 200,
        payload: yearlyIncomeOptions,
        message: "Yearly income options retrieved successfully",
      });
    }
  );

  // GET /kyc/income-sources - Get income source options
  fastify.get(
    "/kyc/income-sources",
    {
      schema: {
        tags: ["kyc"],
        description: "Get all income source options for KYC",
        summary: "Get income source options",
        response: {
          200: IncomeSourcesResponse,
        },
      },
    },
    async (request, reply) => {
      return reply.code(200).send({
        success: true,
        status: 200,
        payload: incomeSourceOptions,
        message: "Income source options retrieved successfully",
      });
    }
  );

  // GET /kyc/industries - Get all industries
  fastify.get(
    "/kyc/industries",
    {
      schema: {
        tags: ["kyc"],
        description: "Get all industry categories for KYC",
        summary: "Get industries",
        response: {
          200: IndustriesResponse,
        },
      },
    },
    async (request, reply) => {
      return reply.code(200).send({
        success: true,
        status: 200,
        industries: getIndustries(),
        message: "Industries retrieved successfully",
      });
    }
  );

  // GET /kyc/industries/:id/occupations - Get occupations for a specific industry
  fastify.get(
    "/kyc/industries/:id/occupations",
    {
      schema: {
        tags: ["kyc"],
        description: "Get all occupations for a specific industry",
        summary: "Get occupations by industry",
        params: {
          type: "object",
          properties: {
            id: { type: "number" },
          },
          required: ["id"],
        },
        response: {
          200: OccupationsResponse,
          404: OccupationsErrorResponse,
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params;
      const result = getOccupationsByIndustryId(id);

      if (!result) {
        return reply.code(404).send({
          success: false,
          status: 404,
          message: `Industry with ID ${id} not found`,
        });
      }

      return reply.code(200).send({
        success: true,
        status: 200,
        industry_id: result.industry_id,
        industry_name: result.industry_name,
        occupations: result.occupations,
        message: "Occupations retrieved successfully",
      });
    }
  );

  // GET /kyc/usage/activities - Get usage activities
  fastify.get(
    "/kyc/usage/activities",
    {
      schema: {
        tags: ["kyc"],
        description: "Get all account usage activities for KYC",
        summary: "Get usage activities",
        response: {
          200: UsageActivitiesResponse,
        },
      },
    },
    async (request, reply) => {
      return reply.code(200).send({
        success: true,
        status: 200,
        payload: usageActivities,
        message: "Usage activities retrieved successfully",
      });
    }
  );

  fastify.log.info("KYC routes registered");
}
