export interface FAQ {
  question: string;
  answer: string;
}

interface CategoryLike {
  shortName: string;
  fullName: string;
  coverage?: string;
  bundle?: string;
  topics: { title: string; whatItIs: string; howWeImplement: string; whyItMatters: string }[];
}

export function buildServiceFAQs(slug: string, category: CategoryLike): FAQ[] {
  const override = SERVICE_FAQ_OVERRIDES[slug];
  if (override) return override;

  const faqs: FAQ[] = [];
  const primaryTopic = category.topics[0];

  if (primaryTopic) {
    faqs.push({ question: `What is ${category.shortName}?`, answer: primaryTopic.whatItIs });
    faqs.push({ question: `How does Kalesha & Co implement ${category.shortName}?`, answer: primaryTopic.howWeImplement });
    faqs.push({ question: `Why does ${category.shortName} matter?`, answer: primaryTopic.whyItMatters });
  }

  if (category.coverage) {
    faqs.push({ question: `Who does ${category.shortName} apply to?`, answer: category.coverage });
  }

  if (category.bundle) {
    faqs.push({ question: `Can ${category.shortName} be bundled with other services?`, answer: category.bundle });
  }

  faqs.push({
    question: `How long does a ${category.shortName} engagement take?`,
    answer:
      "Timelines vary by scope and your current maturity. We provide an exact estimate after a short scoping call — reach out to schedule one.",
  });

  return faqs;
}

export const GENERAL_FAQS: FAQ[] = [
  {
    question: "What does Kalesha & Co do?",
    answer:
      "We're an ISO certification and GRC advisory practice built for technology and SaaS companies. We implement ISO 27001 and adjacent standards, run SOC 1/2/3 examinations, handle Indian regulatory compliance (DPDPA, CERT-In, RBI, SEBI, IRDAI, DoT), and cover global GRC, audit, and tax services.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "It depends on the standard and your current maturity. A SOC 2 Type 1 readiness assessment can run 4–8 weeks; ISO 27001 certification typically takes 3–6 months from gap assessment to Stage 2 audit. We scope an exact timeline on the first call.",
  },
  {
    question: "Do you work with companies outside India?",
    answer:
      "Yes. While we're domiciled in Andhra Pradesh and hold deep expertise in Indian regulatory frameworks, we serve technology and SaaS clients globally, including engagements involving GDPR, HIPAA, and US-based SOC and PCI DSS requirements.",
  },
  {
    question: "Can you bundle multiple certifications or audits together?",
    answer:
      "Often, yes. Many Indian regulatory frameworks (CERT-In, DPDPA, RBI, SEBI, IRDAI) share overlapping controls, and ISO 27001/SOC 2 share a similar control base with GDPR, HIPAA, and HITRUST. We regularly design combined audits that cut cost and duration versus running each separately.",
  },
  {
    question: "How do I get started?",
    answer:
      "Schedule a call through the button on any page. We'll do a short scoping conversation to understand your current posture, applicable regulations, and timeline, then propose the right engagement.",
  },
];

export const SERVICE_FAQ_OVERRIDES: Record<string, FAQ[]> = {
  "soc-1": [
    {
      question: "Who needs a SOC 1 report?",
      answer:
        "Service organizations whose systems or processes affect a client's financial statements — payroll processors, fund administrators, and payment gateways are the most common examples.",
    },
    {
      question: "What's the difference between SOC 1 Type 1 and Type 2?",
      answer:
        "Type 1 evaluates control design at a single point in time. Type 2 evaluates whether those controls operated effectively over an observation period, typically 3–6 months. Most clients start with Type 1 and progress to Type 2.",
    },
    {
      question: "Who can see our SOC 1 report?",
      answer:
        "SOC 1 reports are restricted-use — shared with your clients and their auditors under NDA, not published publicly.",
    },
  ],
  "soc-2": [
    {
      question: "Which Trust Services Criteria do we need?",
      answer:
        "Security is mandatory for every SOC 2 report. Availability, Processing Integrity, Confidentiality, and Privacy are optional and selected based on what your customers ask for and what your product actually does.",
    },
    {
      question: "How long does the Type 2 observation period need to run?",
      answer:
        "Most enterprise clients expect a 3–12 month observation window, with 6 months being the most common baseline for a first Type 2 report.",
    },
    {
      question: "Can we publish our SOC 2 report publicly?",
      answer:
        "No — SOC 2 reports are NDA-bound and shared only with prospects and clients who request them. If you want something publishable, pair it with a SOC 3 report.",
    },
  ],
  "soc-3": [
    {
      question: "Do we need a separate audit for SOC 3?",
      answer:
        "No. SOC 3 is issued alongside the same CPA audit as your SOC 2 Type 2 — it's a public-facing summary, not a separate engagement.",
    },
    {
      question: "Can we post our SOC 3 report on our website?",
      answer:
        "Yes — that's the point. SOC 3 has no NDA restriction and is designed to be published freely as a trust badge.",
    },
  ],
  gdpr: [
    {
      question: "Does GDPR apply to us if we're not based in the EU?",
      answer:
        "Yes, if you process personal data of individuals located in the EU, regardless of where your company is headquartered.",
    },
    {
      question: "What's the penalty for non-compliance?",
      answer: "Fines can reach up to €20 million or 4% of global annual turnover, whichever is higher.",
    },
  ],
  "pci-dss": [
    {
      question: "Do we need PCI DSS if we use a third-party payment processor?",
      answer:
        "Often a reduced scope applies (SAQ A or similar) if you fully outsource card data handling, but you're still responsible for meeting applicable requirements. We help determine your exact scope.",
    },
    {
      question: "What's the difference between an SAQ and a formal RoC?",
      answer:
        "A Self-Assessment Questionnaire (SAQ) is a self-attestation for lower-volume merchants. A Report on Compliance (RoC) is a formal assessment required for higher transaction volumes or by acquiring banks.",
    },
  ],
  "rbi-audit": [
    {
      question: "Which entities does the RBI Cyber Security Framework apply to?",
      answer: "Banks, NBFCs (NBFC-M, NBFC-D), Payment System Operators, and Digital Lending entities.",
    },
    {
      question: "How often are RBI-mandated audits required?",
      answer:
        "Cadence varies by entity type and framework — VAPT cycles are typically periodic (often annual), and the IS audit program follows the schedule set in your Master Direction mapping.",
    },
  ],
  "sebi-audit": [
    {
      question: "What is the SEBI CSCRF incident reporting SLA?",
      answer: "A 4-hour incident reporting window applies for entities covered under the Cyber Security & Cyber Resilience Framework.",
    },
    {
      question: "How often is the half-yearly cyber audit required?",
      answer: "As the name suggests, twice a year — per SEBI's 2020 circular on cyber audits for market infrastructure entities.",
    },
  ],
  "cert-in": [
    {
      question: "What is the CERT-In 6-hour reporting requirement?",
      answer:
        "Under the 2022 Directions, entities must report specified categories of cyber incidents to CERT-In within 6 hours of becoming aware of them.",
    },
    {
      question: "How long must logs be retained?",
      answer: "180 days of active log retention, with archival storage required for up to 5 years depending on the log type.",
    },
  ],
  iso: [
    {
      question: "How long does ISO 27001 certification take?",
      answer:
        "Typically 3–6 months from scoping to the Stage 2 audit, depending on your current control maturity and how much documentation already exists.",
    },
    {
      question: "How long is the certificate valid?",
      answer: "3 years, with annual surveillance audits required to maintain certification.",
    },
  ],
  "hipaa-hitech": [
    {
      question: "Who enforces HIPAA compliance?",
      answer: "The HHS Office for Civil Rights (OCR), which applies tier-based penalties for violations depending on severity and negligence.",
    },
    {
      question: "Do we need a Business Associate Agreement (BAA)?",
      answer: "Yes, if you handle Protected Health Information (PHI) on behalf of a covered entity — this is a standard part of our implementation process.",
    },
  ],
};
