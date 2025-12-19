/**
 * Everyday plans data for Dossh
 * This would typically come from a database, but we're using static data for now
 */
export const everydayPlans = [
  {
    ID: 1,
    plan_name: "Basic",
    month_cost: 0,
    features: [
      "Crypto wallet",
      "Free prepaid card",
      "Up to 1 additional prepaid card",
      "Loyalty & rewards (discounts and crypto portfolio)",
      "Multi-currency, multi-rail payments (including crypto)",
    ],
    add_ons: [],
    learn_more_slug: "/basic",
  },
  {
    ID: 2,
    plan_name: "Standard",
    month_cost: 599,
    features: [
      "All Basic features",
      "Option to add Multipay or Splitpay",
      "Priority customer support",
    ],
    add_ons: [
      {
        name: "Multipay",
        cost: 500,
        description: "Split payments across multiple accounts",
      },
      {
        name: "Splitpay",
        cost: 500,
        description: "Description for Splitpay",
      },
    ],
    learn_more_slug: "/standard",
  },
  {
    ID: 3,
    plan_name: "Premium",
    month_cost: 1099,
    features: [
      "Everyday account (local use)",
      "Global account (fx payments)",
      "Crypto wallet",
      "Up to 5 additional accounts",
      "Up to 5 additional debit cards",
      "Loyalty & rewards (discounts and crypto portfolio)",
      "Free monthly transaction thresholds",
      "Inclusive multi-pay capabilities",
      "Inclusive splitpay service",
    ],
    add_ons: [],
    learn_more_slug: "/premium",
  },
];
