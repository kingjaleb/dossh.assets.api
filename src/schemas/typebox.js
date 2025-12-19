import { Type } from "@sinclair/typebox";

// Health check response
export const HealthResponse = Type.Object({
  success: Type.Boolean(),
  status: Type.String(),
  timestamp: Type.String({ format: "date-time" }),
});

// Plans schemas
export const AddOnSchema = Type.Object({
  name: Type.String(),
  cost: Type.Number(),
  description: Type.String(),
});

export const PlanSchema = Type.Object({
  ID: Type.Number(),
  plan_name: Type.String(),
  month_cost: Type.Number(),
  features: Type.Array(Type.String()),
  add_ons: Type.Array(AddOnSchema),
  learn_more_slug: Type.String(),
});

export const PlansResponse = Type.Object({
  success: Type.Boolean(),
  status: Type.Number(),
  payload: Type.Array(PlanSchema),
});
