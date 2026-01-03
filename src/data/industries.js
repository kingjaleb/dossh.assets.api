/**
 * Industries and Occupations data for KYC
 * Based on ANZSIC (Australian and New Zealand Standard Industrial Classification)
 * and common KYC/AML industry categorizations
 */

export const industries = [
  {
    id: 101,
    name: "Agriculture, Forestry & Fishing",
    occupations: [
      { id: 10101, name: "Crop & Plant Farming" },
      { id: 10102, name: "Livestock & Poultry Farming" },
      { id: 10103, name: "Dairy Farming" },
      { id: 10104, name: "Aquaculture & Fishing" },
      { id: 10105, name: "Forestry & Logging" },
      { id: 10106, name: "Agricultural Support Services" },
    ],
  },
  {
    id: 102,
    name: "Mining, Quarrying & Energy",
    occupations: [
      { id: 10201, name: "Coal Mining" },
      { id: 10202, name: "Oil & Gas Extraction" },
      { id: 10203, name: "Metal Ore Mining" },
      { id: 10204, name: "Non-Metallic Mineral Mining & Quarrying" },
      { id: 10205, name: "Exploration & Mining Support Services" },
      { id: 10206, name: "Renewable Energy Operations" },
    ],
  },
  {
    id: 103,
    name: "Manufacturing",
    occupations: [
      { id: 10301, name: "Food & Beverage Manufacturing" },
      { id: 10302, name: "Textile & Clothing Manufacturing" },
      { id: 10303, name: "Wood & Paper Product Manufacturing" },
      { id: 10304, name: "Chemical & Pharmaceutical Manufacturing" },
      { id: 10305, name: "Metal & Machinery Manufacturing" },
      { id: 10306, name: "Electronics & Equipment Manufacturing" },
      { id: 10307, name: "Motor Vehicle & Transport Equipment Manufacturing" },
      { id: 10308, name: "Other Manufacturing" },
    ],
  },
  {
    id: 104,
    name: "Electricity, Gas, Water & Waste Services",
    occupations: [
      { id: 10401, name: "Electricity Generation & Supply" },
      { id: 10402, name: "Gas Supply" },
      { id: 10403, name: "Water Supply & Treatment" },
      { id: 10404, name: "Waste Collection & Disposal" },
      { id: 10405, name: "Recycling Services" },
    ],
  },
  {
    id: 105,
    name: "Construction & Real Estate",
    occupations: [
      { id: 10501, name: "Residential Building Construction" },
      { id: 10502, name: "Non-Residential Building Construction" },
      { id: 10503, name: "Civil Engineering & Infrastructure" },
      { id: 10504, name: "Electrical & Plumbing Services" },
      { id: 10505, name: "Real Estate Sales & Leasing" },
      { id: 10506, name: "Property Development" },
      { id: 10507, name: "Building Trades & Services" },
    ],
  },
  {
    id: 106,
    name: "Wholesale & Retail Trade",
    occupations: [
      { id: 10601, name: "Motor Vehicle & Parts Wholesaling/Retailing" },
      { id: 10602, name: "Grocery & Food Retailing" },
      { id: 10603, name: "Specialty Food Retailing" },
      { id: 10604, name: "Clothing & Footwear Retailing" },
      { id: 10605, name: "Department Stores & General Retailing" },
      { id: 10606, name: "Pharmacy & Health Goods Retailing" },
      { id: 10607, name: "Electronics & Appliance Retailing" },
      { id: 10608, name: "Wholesale Trade" },
      { id: 10609, name: "E-commerce & Online Retail" },
    ],
  },
  {
    id: 107,
    name: "Accommodation & Food Services",
    occupations: [
      { id: 10701, name: "Hotels & Resorts" },
      { id: 10702, name: "Motels & Short-Term Accommodation" },
      { id: 10703, name: "Cafes & Restaurants" },
      { id: 10704, name: "Takeaway Food Services" },
      { id: 10705, name: "Pubs, Bars & Nightclubs" },
      { id: 10706, name: "Catering Services" },
    ],
  },
  {
    id: 108,
    name: "Transport, Postal & Warehousing",
    occupations: [
      { id: 10801, name: "Road Transport & Freight" },
      { id: 10802, name: "Rail Transport" },
      { id: 10803, name: "Air Transport & Aviation" },
      { id: 10804, name: "Water Transport & Marine Services" },
      { id: 10805, name: "Postal & Courier Services" },
      { id: 10806, name: "Warehousing & Storage" },
      { id: 10807, name: "Logistics & Supply Chain Management" },
    ],
  },
  {
    id: 109,
    name: "Information Technology & Telecommunications",
    occupations: [
      { id: 10901, name: "Software Development & Programming" },
      { id: 10902, name: "IT Consulting & Systems Integration" },
      { id: 10903, name: "Data Processing & Web Hosting" },
      { id: 10904, name: "Telecommunications Services" },
      { id: 10905, name: "Internet Service Providers" },
      { id: 10906, name: "Cybersecurity Services" },
      { id: 10907, name: "Cloud Computing & SaaS" },
    ],
  },
  {
    id: 110,
    name: "Financial & Insurance Services",
    occupations: [
      { id: 11001, name: "Banking & Deposit-Taking" },
      { id: 11002, name: "Investment & Securities Trading" },
      { id: 11003, name: "Financial Planning & Advisory" },
      { id: 11004, name: "Life Insurance" },
      { id: 11005, name: "General Insurance" },
      { id: 11006, name: "Superannuation & Pension Funds" },
      { id: 11007, name: "Mortgage & Finance Broking" },
      { id: 11008, name: "Cryptocurrency & Digital Assets" },
    ],
  },
  {
    id: 111,
    name: "Rental, Hiring & Real Estate Services",
    occupations: [
      { id: 11101, name: "Motor Vehicle Rental & Hiring" },
      { id: 11102, name: "Equipment & Machinery Rental" },
      { id: 11103, name: "Property Management Services" },
      { id: 11104, name: "Real Estate Agency Services" },
    ],
  },
  {
    id: 112,
    name: "Professional, Scientific & Technical Services",
    occupations: [
      { id: 11201, name: "Legal Services & Law Firms" },
      { id: 11202, name: "Accounting & Tax Services" },
      { id: 11203, name: "Architectural & Engineering Services" },
      { id: 11204, name: "Management & Business Consulting" },
      { id: 11205, name: "Advertising & Marketing Services" },
      { id: 11206, name: "Veterinary Services" },
      { id: 11207, name: "Scientific Research & Development" },
      { id: 11208, name: "Design & Drafting Services" },
    ],
  },
  {
    id: 113,
    name: "Administrative & Support Services",
    occupations: [
      { id: 11301, name: "Office Administrative Services" },
      { id: 11302, name: "Employment & Recruitment Services" },
      { id: 11303, name: "Travel Agency & Tour Services" },
      { id: 11304, name: "Security & Investigation Services" },
      { id: 11305, name: "Cleaning Services" },
      { id: 11306, name: "Gardening & Landscaping Services" },
    ],
  },
  {
    id: 114,
    name: "Public Administration & Safety",
    occupations: [
      { id: 11401, name: "Government Administration" },
      { id: 11402, name: "Defence & Military" },
      { id: 11403, name: "Police & Law Enforcement" },
      { id: 11404, name: "Fire & Emergency Services" },
      { id: 11405, name: "Regulatory & Compliance Services" },
    ],
  },
  {
    id: 115,
    name: "Education & Training",
    occupations: [
      { id: 11501, name: "Primary & Secondary Education" },
      { id: 11502, name: "Tertiary Education & Universities" },
      { id: 11503, name: "Vocational Education & Training" },
      { id: 11504, name: "Private Tutoring & Coaching" },
      { id: 11505, name: "Early Childhood Education & Childcare" },
      { id: 11506, name: "Corporate Training & Development" },
    ],
  },
  {
    id: 116,
    name: "Health Care & Social Assistance",
    occupations: [
      { id: 11601, name: "Medical Practice & General Practice" },
      { id: 11602, name: "Specialist Medical Services" },
      { id: 11603, name: "Dental Services" },
      { id: 11604, name: "Nursing & Midwifery" },
      { id: 11605, name: "Allied Health Services (Physio, Chiro, Occupational)" },
      { id: 11606, name: "Hospital Services" },
      { id: 11607, name: "Aged Care & Residential Care" },
      { id: 11608, name: "Disability & Mental Health Services" },
      { id: 11609, name: "Pharmacy Services" },
      { id: 11610, name: "Pathology & Diagnostic Imaging" },
    ],
  },
  {
    id: 117,
    name: "Arts, Entertainment & Recreation",
    occupations: [
      { id: 11701, name: "Performing Arts & Theatre" },
      { id: 11702, name: "Music & Sound Recording" },
      { id: 11703, name: "Creative & Visual Arts" },
      { id: 11704, name: "Film & Video Production" },
      { id: 11705, name: "Broadcasting & Media" },
      { id: 11706, name: "Sports & Physical Recreation" },
      { id: 11707, name: "Gambling & Gaming Services" },
      { id: 11708, name: "Museums, Libraries & Cultural Services" },
    ],
  },
  {
    id: 118,
    name: "Other Services",
    occupations: [
      { id: 11801, name: "Automotive Repair & Maintenance" },
      { id: 11802, name: "Machinery & Equipment Repair" },
      { id: 11803, name: "Personal Care Services (Hair, Beauty, Spa)" },
      { id: 11804, name: "Religious Services & Organizations" },
      { id: 11805, name: "Civic & Social Organizations" },
      { id: 11806, name: "Laundry & Dry-Cleaning Services" },
      { id: 11807, name: "Funeral & Cremation Services" },
    ],
  },
  {
    id: 119,
    name: "Non-Profit, Charity & NGO",
    occupations: [
      { id: 11901, name: "International Development & Aid" },
      { id: 11902, name: "Community Services & Welfare" },
      { id: 11903, name: "Environmental & Conservation Organizations" },
      { id: 11904, name: "Human Rights & Advocacy" },
      { id: 11905, name: "Charitable Fundraising" },
    ],
  },
  {
    id: 120,
    name: "Student",
    occupations: [
      { id: 12001, name: "Full-Time Student" },
      { id: 12002, name: "Part-Time Student" },
    ],
  },
  {
    id: 121,
    name: "Retired / Not Currently Employed",
    occupations: [
      { id: 12101, name: "Retired" },
      { id: 12102, name: "Homemaker / Domestic Duties" },
      { id: 12103, name: "Unemployed - Seeking Work" },
      { id: 12104, name: "Not in Workforce" },
    ],
  },
  {
    id: 122,
    name: "Other / Prefer Not to Say",
    occupations: [
      { id: 12201, name: "Other (Please Specify)" },
      { id: 12202, name: "Prefer Not to Say" },
    ],
  },
];

/**
 * Get all industries (without occupations)
 */
export const getIndustries = () => {
  return industries.map((industry) => ({
    id: industry.id,
    name: industry.name,
  }));
};

/**
 * Get occupations for a specific industry
 */
export const getOccupationsByIndustryId = (industryId) => {
  const industry = industries.find((ind) => ind.id === parseInt(industryId));
  if (!industry) {
    return null;
  }
  return {
    industry_id: industry.id,
    industry_name: industry.name,
    occupations: industry.occupations,
  };
};
