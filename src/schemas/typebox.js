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

// KYC Document schemas
export const CountrySchema = Type.Object({
  name: Type.String(),
  code: Type.String(),
  flagResId: Type.String(),
});

export const PrioritySchema = Type.Object({
  proofOfAddress: Type.Number(),
});

export const ValidationSchema = Type.Object({
  required: Type.Boolean(),
  minLength: Type.Optional(Type.Number()),
  maxLength: Type.Optional(Type.Number()),
  errorMessage: Type.Optional(Type.String()),
});

export const FieldSchema = Type.Object({
  id: Type.String(),
  label: Type.String(),
  type: Type.String(),
  placeholder: Type.Optional(Type.String()),
  dropdownOptions: Type.Optional(Type.Array(Type.String())),
  validation: ValidationSchema,
  helpText: Type.Optional(Type.String()),
});

export const PhotoRequirementSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  displayName: Type.String(),
  boundaryShape: Type.String(),
  cameraType: Type.String(),
});

export const DocumentTypeSchema = Type.Object({
  type: Type.String(),
  category: Type.String(),
  availableInCountries: Type.Array(CountrySchema),
  priorities: Type.Array(PrioritySchema),
  fields: Type.Array(FieldSchema),
  photoRequirements: Type.Array(PhotoRequirementSchema),
  requiresSelfie: Type.Boolean(),
});

export const KYCDocumentTypesResponse = Type.Object({
  success: Type.Boolean(),
  status: Type.Number(),
  payload: Type.Array(DocumentTypeSchema),
});

// Yearly Income schemas
export const YearlyIncomeOptionSchema = Type.Object({
  id: Type.Number(),
  code: Type.String(),
  display_label: Type.String(),
});

export const YearlyIncomeResponse = Type.Object({
  success: Type.Boolean(),
  status: Type.Number(),
  payload: Type.Array(YearlyIncomeOptionSchema),
  message: Type.String(),
});

// Income Sources schemas
export const IncomeSourceOptionSchema = Type.Object({
  id: Type.Number(),
  code: Type.String(),
  display_label: Type.String(),
});

export const IncomeSourcesResponse = Type.Object({
  success: Type.Boolean(),
  status: Type.Number(),
  payload: Type.Array(IncomeSourceOptionSchema),
  message: Type.String(),
});

// Industries & Occupations schemas
export const IndustrySchema = Type.Object({
  id: Type.Number(),
  name: Type.String(),
});

export const OccupationSchema = Type.Object({
  id: Type.Number(),
  name: Type.String(),
});

export const IndustriesResponse = Type.Object({
  success: Type.Boolean(),
  status: Type.Number(),
  industries: Type.Array(IndustrySchema),
  message: Type.String(),
});

export const OccupationsResponse = Type.Object({
  success: Type.Boolean(),
  status: Type.Number(),
  industry_id: Type.Number(),
  industry_name: Type.String(),
  occupations: Type.Array(OccupationSchema),
  message: Type.String(),
});

export const OccupationsErrorResponse = Type.Object({
  success: Type.Boolean(),
  status: Type.Number(),
  message: Type.String(),
});

// Usage Activities schemas
export const UsageActivitySchema = Type.Object({
  id: Type.Number(),
  code: Type.String(),
  display_label: Type.String(),
});

export const UsageActivitiesResponse = Type.Object({
  success: Type.Boolean(),
  status: Type.Number(),
  payload: Type.Array(UsageActivitySchema),
  message: Type.String(),
});
