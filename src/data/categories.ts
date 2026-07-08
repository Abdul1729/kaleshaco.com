import { ISO_ITEMS, GRC_ITEMS, type ServiceItem } from "./services";

export interface ServiceCategory {
  slug: string;
  shortName: string;
  fullName: string;
  intro: string;
  items: ServiceItem[];
}

const PLACEHOLDER = (categoryName: string): ServiceItem[] => [
  {
    number: "01",
    title: `${categoryName} Advisory & Implementation`,
    whatWeDo: `We guide your organization through ${categoryName} requirements end to end — from initial assessment through to full compliance.`,
    howWeImplement: "Scoping & gap assessment → remediation planning → documentation & control implementation → readiness review → ongoing support.",
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "dpdpa",
    shortName: "DPDPA",
    fullName: "Digital Personal Data Protection Act",
    intro: "Compliance advisory for India's Digital Personal Data Protection Act — from data mapping to consent framework implementation.",
    items: PLACEHOLDER("DPDPA"),
  },
  {
    slug: "iso",
    shortName: "ISO",
    fullName: "ISO Certification & Standards",
    intro: "ISO 27001 ISMS implementation, cloud and privacy controls, business continuity, and certification maintenance.",
    items: ISO_ITEMS,
  },
  {
    slug: "soc-2",
    shortName: "SOC 2",
    fullName: "SOC 2 Compliance",
    intro: "SOC 2 Type I and Type II readiness, control design, and audit support for technology and SaaS companies.",
    items: PLACEHOLDER("SOC 2"),
  },
  {
    slug: "soc-1",
    shortName: "SOC 1",
    fullName: "SOC 1 Compliance",
    intro: "SOC 1 engagements for organizations whose services impact clients' financial reporting controls.",
    items: PLACEHOLDER("SOC 1"),
  },
  {
    slug: "soc-3",
    shortName: "SOC 3",
    fullName: "SOC 3 Compliance",
    intro: "SOC 3 general-use reports for organizations that need a public-facing trust summary.",
    items: PLACEHOLDER("SOC 3"),
  },
  {
    slug: "cert-in",
    shortName: "CERT-In",
    fullName: "CERT-In Empanelment & Compliance",
    intro: "CERT-In empanelled audit support and compliance with Indian cybersecurity directives.",
    items: PLACEHOLDER("CERT-In"),
  },
  {
    slug: "rbi-audit",
    shortName: "RBI Audit",
    fullName: "RBI Regulatory Audit",
    intro: "Reserve Bank of India regulatory audits covering payment systems, data localization, and cybersecurity frameworks for banks and NBFCs.",
    items: PLACEHOLDER("RBI Audit"),
  },
  {
    slug: "sebi-audit",
    shortName: "SEBI Audit",
    fullName: "SEBI Regulatory Audit",
    intro: "SEBI cybersecurity and cyber resilience audits for market intermediaries and exchanges.",
    items: PLACEHOLDER("SEBI Audit"),
  },
  {
    slug: "irdai-audit",
    shortName: "IRDAI Audit",
    fullName: "IRDAI Regulatory Audit",
    intro: "Insurance Regulatory and Development Authority of India security and compliance audits.",
    items: PLACEHOLDER("IRDAI Audit"),
  },
  {
    slug: "dot",
    shortName: "DoT",
    fullName: "Department of Telecommunications Compliance",
    intro: "Compliance advisory for Department of Telecommunications security directives and licensing requirements.",
    items: PLACEHOLDER("DoT"),
  },
  {
    slug: "meity",
    shortName: "MeitY",
    fullName: "MeitY Compliance",
    intro: "Compliance support aligned to Ministry of Electronics and Information Technology guidelines and empanelment requirements.",
    items: PLACEHOLDER("MeitY"),
  },
  {
    slug: "other-grc",
    shortName: "Other GRC Service",
    fullName: "Other GRC Services",
    intro: "Enterprise governance, risk, and compliance program work — from GRC tooling to board reporting and vendor risk management.",
    items: GRC_ITEMS,
  },
  {
    slug: "tax",
    shortName: "Tax Service",
    fullName: "Tax Services",
    intro: "Tax advisory and compliance services for technology and SaaS companies operating across jurisdictions.",
    items: PLACEHOLDER("Tax Service"),
  },
  {
    slug: "financial-services",
    shortName: "Financial Services",
    fullName: "Financial Services Advisory",
    intro: "Assurance and advisory services tailored to regulated financial services businesses.",
    items: PLACEHOLDER("Financial Services"),
  },
  {
    slug: "forensic-audit",
    shortName: "Forensic Audit & Due Diligence",
    fullName: "Forensic Audit & Due Diligence",
    intro: "Forensic accounting, fraud investigation, and due diligence support for transactions and disputes.",
    items: PLACEHOLDER("Forensic Audit & Due Diligence"),
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
