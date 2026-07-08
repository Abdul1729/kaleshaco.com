import {
  ISO_TOPICS,
  SOC_1_TOPIC,
  SOC_2_TOPIC,
  SOC_3_TOPIC,
  CERT_IN_TOPICS,
  RBI_TOPICS,
  SEBI_TOPICS,
  IRDAI_TOPICS,
  DOT_TOPICS,
  GLOBAL_GRC_TOPICS,
  GRC_ITEMS_LEGACY,
  AUDIT_ASSURANCE_TOPICS,
  TAX_TOPICS,
  type Topic,
} from "./services";

export interface ServiceCategory {
  slug: string;
  shortName: string;
  fullName: string;
  intro: string;
  topics: Topic[];
  bundle?: string;
  coverage?: string;
}

const PLACEHOLDER = (categoryName: string): Topic[] => [
  {
    title: `${categoryName} Advisory & Implementation`,
    whatItIs: `Guidance through ${categoryName} requirements end to end — from initial assessment through to full compliance.`,
    howWeImplement: "Scoping & gap assessment → remediation planning → documentation & control implementation → readiness review → ongoing support.",
    whyItMatters: "Structured, audit-ready compliance instead of ad hoc, reactive fixes.",
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "dpdpa",
    shortName: "DPDPA",
    fullName: "Digital Personal Data Protection Act",
    intro: "Compliance advisory for India's Digital Personal Data Protection Act — from data mapping to consent framework implementation.",
    topics: PLACEHOLDER("DPDPA"),
  },
  {
    slug: "iso",
    shortName: "ISO",
    fullName: "ISO Certification & Standards",
    intro: "ISO 27001 ISMS implementation, quality, business continuity, privacy, AI governance, and workplace safety standards — scoped and certified end to end.",
    topics: ISO_TOPICS,
  },
  {
    slug: "soc-2",
    shortName: "SOC 2",
    fullName: "SOC 2 Compliance",
    intro: "SOC 2 Type I and Type II readiness, control design, and audit support for technology and SaaS companies.",
    topics: [SOC_2_TOPIC],
    bundle: "SOC 2 is for tech, SaaS, and cloud vendors — the report enterprise clients ask for first. Start with Type 1, then progress to Type 2 once controls have run for an observation period. A readiness assessment is offered before the formal audit to reduce audit-fail risk.",
  },
  {
    slug: "soc-1",
    shortName: "SOC 1",
    fullName: "SOC 1 Compliance",
    intro: "SOC 1 engagements for organizations whose services impact clients' financial reporting controls.",
    topics: [SOC_1_TOPIC],
    bundle: "SOC 1 fits finance-impact services — payroll, fund administration, payment processing. Start with Type 1, then progress to Type 2 after controls run for an observation period.",
  },
  {
    slug: "soc-3",
    shortName: "SOC 3",
    fullName: "SOC 3 Compliance",
    intro: "SOC 3 general-use reports for organizations that need a public-facing trust summary.",
    topics: [SOC_3_TOPIC],
    bundle: "SOC 3 is a marketing tool — publish the badge on your homepage or trust page to build public trust, with no NDA restriction.",
  },
  {
    slug: "cert-in",
    shortName: "CERT-In",
    fullName: "CERT-In Empanelment & Compliance",
    intro: "CERT-In empanelled audit support and compliance with Indian cybersecurity directives — 6-hour incident reporting, log retention, and ransomware resilience.",
    topics: CERT_IN_TOPICS,
    coverage: "Applies to all entities, including NCIIPC-covered sectors (power, finance, telecom, transport) under Section 70A.",
    bundle: "6-hour SLA guarantee on incident response retainer. Combine with DPDPA and ISO 27001 — heavy control overlap saves cost and time. Free CERT-In applicability check available.",
  },
  {
    slug: "rbi-audit",
    shortName: "RBI Audit",
    fullName: "RBI Regulatory Audit",
    intro: "Reserve Bank of India regulatory audits covering cyber security framework, IT governance, digital lending, cloud adoption, and BCP/DR for banks and NBFCs.",
    topics: RBI_TOPICS,
    coverage: "Banks, NBFC (NBFC-M, NBFC-D), Payment System Operators, and Digital Lending entities.",
    bundle: "UPI/Payment System add-on available: PCI-DSS alignment, tokenisation, and fraud monitoring. Customer protection advisory covers dispute resolution process design (zero/limited liability compliance). Combine with DPDPA and ISO 27001 for a faster joint audit. Free RBI applicability scoping call available.",
  },
  {
    slug: "sebi-audit",
    shortName: "SEBI Audit",
    fullName: "SEBI Regulatory Audit",
    intro: "SEBI Cyber Security & Cyber Resilience Framework (CSCRF), cloud adoption, half-yearly audit readiness, and algorithmic trading system audits.",
    topics: SEBI_TOPICS,
    coverage: "Stock Exchanges, Depositories, Clearing Corporations, Brokers, RTAs, and AMCs.",
    bundle: "Bundled add-on: Social Engineering Advisory (phishing simulation, callback verification, employee training) pairs well with CSCRF. Per the Indian Cybersecurity Guidelines & Controls Mapping Matrix (v1.0, Mar-2025), CERT-In/DPDPA/RBI/SEBI/IRDAI/DoT controls overlap heavily — a single unified audit can replace five separate ones. Free applicability scoping call available.",
  },
  {
    slug: "irdai-audit",
    shortName: "IRDAI Audit",
    fullName: "IRDAI Regulatory Audit",
    intro: "Insurance Regulatory and Development Authority of India cybersecurity guidelines, cloud compliance, data localisation, and information security policy implementation.",
    topics: IRDAI_TOPICS,
    coverage: "Insurers, Reinsurers, and Intermediaries (brokers, TPAs, web aggregators).",
    bundle: "IRDAI controls overlap heavily with RBI and SEBI CSCRF (per the Mapping Matrix v1.0, Mar-2025) — combined audit available for insurance groups with a BFSI arm. 6-hour IR retainer option, same SLA muscle as CERT-In/SEBI service. Free applicability scoping call available.",
  },
  {
    slug: "dot",
    shortName: "DoT",
    fullName: "Department of Telecommunications & TRAI Compliance",
    intro: "Telecom Cybersecurity Rules 2024, TRAI cybersecurity recommendations, equipment security testing, and national threat-intel coordination readiness.",
    topics: DOT_TOPICS,
    coverage: "Telecom Service Providers, ISPs, equipment vendors, and MVNOs.",
    bundle: "Overlaps with CERT-In's 6-hour/log-retention pattern — bundle discount available for multi-regulator clients. 6-hour IR retainer add-on, same SLA muscle across all regulator services. Free applicability scoping call available.",
  },
  {
    slug: "meity",
    shortName: "MeitY",
    fullName: "MeitY Compliance",
    intro: "Compliance support aligned to Ministry of Electronics and Information Technology guidelines and empanelment requirements.",
    topics: PLACEHOLDER("MeitY"),
  },
  {
    slug: "global-grc",
    shortName: "Global GRC",
    fullName: "Global GRC & Compliance Automation",
    intro: "GDPR, HIPAA, HITRUST, CCSS, virtual CISO leadership, and compliance automation tooling (Vanta/Drata) for organizations operating across borders.",
    topics: GLOBAL_GRC_TOPICS,
    bundle: "GDPR, HIPAA, and HITRUST overlap heavily with ISO 27001/SOC 2 controls — a combined audit reduces cost and time. A vCISO retainer plus Vanta/Drata implementation forms a continuous compliance package, not a one-time audit.",
  },
  {
    slug: "other-grc",
    shortName: "Other GRC Service",
    fullName: "Other GRC Services",
    intro: "Enterprise governance, risk, and compliance program work — from GRC tooling to board reporting and vendor risk management.",
    topics: GRC_ITEMS_LEGACY,
  },
  {
    slug: "audit-assurance",
    shortName: "Audit & Assurance",
    fullName: "Audit & Assurance",
    intro: "Internal, statutory, risk-based, and concurrent audits, quarterly limited reviews, M&A due diligence, and management performance audits.",
    topics: AUDIT_ASSURANCE_TOPICS,
    bundle: "Risk-Based and Internal Audit pair well as a continuous program. Concurrent and Limited Review fit BFSI and listed-company regulatory needs. Due Diligence Review cross-sells with M&A advisory engagements.",
  },
  {
    slug: "tax",
    shortName: "Tax Service",
    fullName: "Tax Services",
    intro: "Income tax, GST, tax audit, legacy VAT/excise matters, certification, and representation before tax authorities.",
    topics: TAX_TOPICS,
    bundle: "Income Tax, GST, and Tax Audit form the core annual retainer package. Representation & Appeal plus Legal Opinion form a litigation-support add-on. Automation applies across all — reducing manual effort for recurring filings.",
  },
  {
    slug: "financial-services",
    shortName: "Financial Services",
    fullName: "Financial Services Advisory",
    intro: "Assurance and advisory services tailored to regulated financial services businesses.",
    topics: PLACEHOLDER("Financial Services"),
  },
  {
    slug: "forensic-audit",
    shortName: "Forensic Audit & Due Diligence",
    fullName: "Forensic Audit & Due Diligence",
    intro: "Forensic accounting, fraud investigation, and due diligence support for transactions and disputes.",
    topics: PLACEHOLDER("Forensic Audit & Due Diligence"),
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((c) => c.slug === slug);
}

export interface CompanyPage {
  slug: string;
  name: string;
  intro: string;
}

export const COMPANY_PAGES: CompanyPage[] = [
  {
    slug: "about",
    name: "About Us",
    intro: "Kalesha & Co is an ISO certification and GRC advisory practice built for technology and SaaS companies.",
  },
  {
    slug: "leadership",
    name: "Leadership",
    intro: "The partners and advisors leading Kalesha & Co's audit, advisory, and compliance practice.",
  },
  {
    slug: "blogs",
    name: "Blogs",
    intro: "Insights on ISO certification, GRC programs, and regulatory compliance for technology companies.",
  },
  {
    slug: "data-security-policy",
    name: "Data Security Policy",
    intro: "How Kalesha & Co collects, uses, and protects data as part of our own security posture.",
  },
];
