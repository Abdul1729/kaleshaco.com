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
  SOC_EXAMINATIONS_TOPIC,
  ISO_CERTIFICATIONS_TOPIC,
  GDPR_TOPIC,
  PCI_DSS_TOPIC,
  CCPA_CPRA_TOPIC,
  HITRUST_TOPIC,
  HIPAA_HITECH_TOPIC,
  PENTESTING_TOPIC,
  SOX_ITGC_TOPIC,
  type Topic,
} from "./services";
import dpdpaLogo from "../assets/logos/regulators/dpdpa.jpg";
import certInLogo from "../assets/logos/regulators/cert-in.png";
import rbiLogo from "../assets/logos/regulators/rbi.jpg";
import sebiLogo from "../assets/logos/regulators/sebi.jpg";
import irdaiLogo from "../assets/logos/regulators/irdai.jpg";
import traiLogo from "../assets/logos/regulators/trai.jpg";
import meityLogo from "../assets/logos/regulators/meity.jpg";
import gdprLogo from "../assets/logos/regulators/gdpr.jpg";
import pciDssLogo from "../assets/logos/regulators/pci-dss.jpg";
import ccpaCpraLogo from "../assets/logos/regulators/ccpa-cpra.jpg";
import hitrustLogo from "../assets/logos/regulators/hitrust.jpg";
import hipaaLogo from "../assets/logos/regulators/hipaa.jpg";
import pentestingLogo from "../assets/logos/regulators/pentesting.jpg";
import soxLogo from "../assets/logos/regulators/sox.jpg";
import aicpaSocLogo from "../assets/logos/aicpa-soc.jpg";

export interface ServiceCategory {
  slug: string;
  shortName: string;
  fullName: string;
  intro: string;
  topics: Topic[];
  bundle?: string;
  coverage?: string;
  regulatorName?: string;
  regulatorLogo?: string;
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
    regulatorName: "Digital Personal Data Protection Act, 2023 (Government of India)",
    regulatorLogo: dpdpaLogo,
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
    regulatorName: "Indian Computer Emergency Response Team (CERT-In)",
    regulatorLogo: certInLogo,
  },
  {
    slug: "rbi-audit",
    shortName: "RBI Audit",
    fullName: "RBI Regulatory Audit",
    intro: "Reserve Bank of India regulatory audits covering cyber security framework, IT governance, digital lending, cloud adoption, and BCP/DR for banks and NBFCs.",
    topics: RBI_TOPICS,
    coverage: "Banks, NBFC (NBFC-M, NBFC-D), Payment System Operators, and Digital Lending entities.",
    bundle: "UPI/Payment System add-on available: PCI-DSS alignment, tokenisation, and fraud monitoring. Customer protection advisory covers dispute resolution process design (zero/limited liability compliance). Combine with DPDPA and ISO 27001 for a faster joint audit. Free RBI applicability scoping call available.",
    regulatorName: "Reserve Bank of India (RBI)",
    regulatorLogo: rbiLogo,
  },
  {
    slug: "sebi-audit",
    shortName: "SEBI Audit",
    fullName: "SEBI Regulatory Audit",
    intro: "SEBI Cyber Security & Cyber Resilience Framework (CSCRF), cloud adoption, half-yearly audit readiness, and algorithmic trading system audits.",
    topics: SEBI_TOPICS,
    coverage: "Stock Exchanges, Depositories, Clearing Corporations, Brokers, RTAs, and AMCs.",
    bundle: "Bundled add-on: Social Engineering Advisory (phishing simulation, callback verification, employee training) pairs well with CSCRF. Per the Indian Cybersecurity Guidelines & Controls Mapping Matrix (v1.0, Mar-2025), CERT-In/DPDPA/RBI/SEBI/IRDAI/DoT controls overlap heavily — a single unified audit can replace five separate ones. Free applicability scoping call available.",
    regulatorName: "Securities and Exchange Board of India (SEBI)",
    regulatorLogo: sebiLogo,
  },
  {
    slug: "irdai-audit",
    shortName: "IRDAI Audit",
    fullName: "IRDAI Regulatory Audit",
    intro: "Insurance Regulatory and Development Authority of India cybersecurity guidelines, cloud compliance, data localisation, and information security policy implementation.",
    topics: IRDAI_TOPICS,
    coverage: "Insurers, Reinsurers, and Intermediaries (brokers, TPAs, web aggregators).",
    bundle: "IRDAI controls overlap heavily with RBI and SEBI CSCRF (per the Mapping Matrix v1.0, Mar-2025) — combined audit available for insurance groups with a BFSI arm. 6-hour IR retainer option, same SLA muscle as CERT-In/SEBI service. Free applicability scoping call available.",
    regulatorName: "Insurance Regulatory and Development Authority of India (IRDAI)",
    regulatorLogo: irdaiLogo,
  },
  {
    slug: "dot",
    shortName: "DoT",
    fullName: "Department of Telecommunications & TRAI Compliance",
    intro: "Telecom Cybersecurity Rules 2024, TRAI cybersecurity recommendations, equipment security testing, and national threat-intel coordination readiness.",
    topics: DOT_TOPICS,
    coverage: "Telecom Service Providers, ISPs, equipment vendors, and MVNOs.",
    bundle: "Overlaps with CERT-In's 6-hour/log-retention pattern — bundle discount available for multi-regulator clients. 6-hour IR retainer add-on, same SLA muscle across all regulator services. Free applicability scoping call available.",
    regulatorName: "Telecom Regulatory Authority of India (TRAI)",
    regulatorLogo: traiLogo,
  },
  {
    slug: "meity",
    shortName: "MeitY",
    fullName: "MeitY Compliance",
    intro: "Compliance support aligned to Ministry of Electronics and Information Technology guidelines and empanelment requirements.",
    topics: PLACEHOLDER("MeitY"),
    regulatorName: "Ministry of Electronics and Information Technology (MeitY)",
    regulatorLogo: meityLogo,
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
  {
    slug: "soc-examinations",
    shortName: "SOC Examinations",
    fullName: "SOC Examinations",
    intro: "SOC 1, SOC 2, and SOC 3 examinations for organizations that need independent assurance over financial reporting controls or data security and operations.",
    topics: [SOC_EXAMINATIONS_TOPIC],
    regulatorName: "AICPA — SOC for Service Organizations",
    regulatorLogo: aicpaSocLogo,
  },
  {
    slug: "iso-certifications",
    shortName: "ISO Certifications",
    fullName: "ISO Certifications",
    intro: "ISO/IEC 27001, 27017/27018, 27701, and 42001 certification support for organizations demonstrating security and AI governance maturity.",
    topics: [ISO_CERTIFICATIONS_TOPIC],
  },
  {
    slug: "gdpr",
    shortName: "GDPR",
    fullName: "GDPR Compliance",
    intro: "EU General Data Protection Regulation advisory — data processing assessment and compliance implementation for organizations handling EU personal data.",
    topics: [GDPR_TOPIC],
    regulatorName: "EU General Data Protection Regulation (GDPR)",
    regulatorLogo: gdprLogo,
  },
  {
    slug: "pci-dss",
    shortName: "PCI DSS",
    fullName: "PCI DSS Compliance",
    intro: "Payment Card Industry Data Security Standard compliance for merchants and service providers handling cardholder data.",
    topics: [PCI_DSS_TOPIC],
    regulatorName: "PCI Security Standards Council",
    regulatorLogo: pciDssLogo,
  },
  {
    slug: "ccpa-cpra",
    shortName: "CCPA & CPRA",
    fullName: "CCPA & CPRA Compliance",
    intro: "California Consumer Privacy Act and California Privacy Rights Act compliance for businesses handling California consumer data.",
    topics: [CCPA_CPRA_TOPIC],
    regulatorName: "CCPA / CPRA (State of California)",
    regulatorLogo: ccpaCpraLogo,
  },
  {
    slug: "hitrust",
    shortName: "HITRUST",
    fullName: "HITRUST Certification",
    intro: "HITRUST CSF readiness and certification support for healthcare organizations and their vendors.",
    topics: [HITRUST_TOPIC],
    regulatorName: "HITRUST Alliance",
    regulatorLogo: hitrustLogo,
  },
  {
    slug: "hipaa-hitech",
    shortName: "HIPAA/HITECH",
    fullName: "HIPAA/HITECH Compliance",
    intro: "Healthcare regulation compliance — protecting patient health information and meeting HIPAA/HITECH breach notification requirements.",
    topics: [HIPAA_HITECH_TOPIC],
    regulatorName: "HIPAA / HITECH (US Dept. of Health & Human Services)",
    regulatorLogo: hipaaLogo,
  },
  {
    slug: "pentesting",
    shortName: "PenTesting",
    fullName: "Penetration Testing",
    intro: "Ethical hacking engagements that simulate real-world attacks to identify and remediate vulnerabilities before they're exploited.",
    topics: [PENTESTING_TOPIC],
    regulatorName: "Vulnerability & Penetration Testing",
    regulatorLogo: pentestingLogo,
  },
  {
    slug: "sox-itgc",
    shortName: "SOX ITGC Testing",
    fullName: "SOX ITGC Testing",
    intro: "IT General Controls testing for publicly traded companies meeting Sarbanes-Oxley requirements over financial reporting systems.",
    regulatorName: "Sarbanes-Oxley Act (SOX) Compliance",
    regulatorLogo: soxLogo,
    topics: [SOX_ITGC_TOPIC],
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
