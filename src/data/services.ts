export interface Topic {
  title: string;
  whatItIs: string;
  howWeImplement: string;
  whyItMatters: string;
}

export const ISO_TOPICS: Topic[] = [
  {
    title: "ISO/IEC 27001:2022 — ISMS",
    whatItIs: "Protects information assets — confidentiality, integrity, and availability — through a risk-based security control framework.",
    howWeImplement: "Scope definition → risk assessment → Statement of Applicability (Annex A control selection) → policy and procedure documentation → control deployment → internal audit → management review.",
    whyItMatters: "Certified via an accredited body: Stage 1 audit (documentation review) → Stage 2 audit (implementation evidence) → certificate issued, valid 3 years with annual surveillance audits.",
  },
  {
    title: "ISO 9001:2015 — QMS",
    whatItIs: "Delivers consistent quality output, customer satisfaction, and continuous process improvement.",
    howWeImplement: "Core process mapping → quality manual and objectives set → document control → internal audit program → corrective action loop.",
    whyItMatters: "Same 2-stage external audit (documentation + implementation review) as ISO 27001 — certificate issued with annual surveillance audits and recertification every 3 years.",
  },
  {
    title: "ISO 22301:2019 — BCMS",
    whatItIs: "Keeps the business running through disruption — disaster, outage, or crisis.",
    howWeImplement: "Business Impact Analysis (BIA) → risk assessment → recovery strategy → business continuity plan drafting → testing and exercises (tabletop, simulation) → review.",
    whyItMatters: "Stage 1 and Stage 2 audits verify the plan is tested and maintained, not just documented — certification runs on a 3-year cycle.",
  },
  {
    title: "ISO/IEC 27701:2019 — PIMS",
    whatItIs: "Extends ISO 27001 with privacy and PII controls, mapping to GDPR, DPDPA, and similar regulation.",
    howWeImplement: "Requires an ISO 27001 base first → define PII processor/controller roles → privacy risk assessment → privacy-specific controls (consent, data subject rights, retention).",
    whyItMatters: "Audited as an extension to the ISO 27001 certificate — combined or add-on audit, no separate certification body process.",
  },
  {
    title: "ISO/IEC 42001:2023 — AIMS",
    whatItIs: "Governs the AI system lifecycle — risk, bias, transparency, and accountability.",
    howWeImplement: "AI system inventory → AI risk and impact assessment → responsible AI policy → Annex A control mapping → monitoring for AI incidents.",
    whyItMatters: "A newer standard with fewer accredited bodies today, but the same Stage 1/Stage 2 audit pattern — expect rapid market growth as AI Act-type regulation spreads globally.",
  },
  {
    title: "ISO 45001:2018 — OH&S",
    whatItIs: "Protects worker safety through hazard control and injury prevention.",
    howWeImplement: "Hazard identification → risk control hierarchy → legal compliance register → incident reporting system → training program.",
    whyItMatters: "2-stage audit, certificate valid 3 years with annual surveillance audits.",
  },
];

export const SOC_1_TOPIC: Topic = {
  title: "SOC 1 — Internal Control over Financial Reporting (ICFR)",
  whatItIs: "Reports on controls at a service organization relevant to a client's financial statements — e.g. payroll processors, payment gateways.",
  howWeImplement: "Define control objectives tied to financial reporting → document process/controls → deploy controls (access, change management, transaction processing) → run controls over a 3–6 month period for Type 2 → gather evidence.",
  whyItMatters: "A licensed CPA firm issues a Type 1 report (control design, point-in-time) or Type 2 (design plus operating effectiveness over a period), shared with the client's auditors under NDA. Best fit for finance-impact services like payroll, fund administration, and payment processing.",
};

export const SOC_2_TOPIC: Topic = {
  title: "SOC 2 — Trust Services Criteria",
  whatItIs: "Reports on controls around data security and operations — Security, Availability, Processing Integrity, Confidentiality, and Privacy. The most requested report for SaaS and technology vendors.",
  howWeImplement: "Select relevant Trust Services Criteria (Security is mandatory, others optional per scope) → gap assessment → build controls (access management, encryption, monitoring, incident response, vendor management) → evidence collection → readiness assessment.",
  whyItMatters: "Type 1 (control design, snapshot) progresses to Type 2 (control effectiveness over a 3–12 month observation window, most requested by enterprise clients). Report distribution is NDA-bound, not public.",
};

export const SOC_3_TOPIC: Topic = {
  title: "SOC 3 — General Use Report",
  whatItIs: "A public-facing summary version of SOC 2 — no detailed control description, just the opinion and a high-level system description.",
  howWeImplement: "Same control base as SOC 2 — essentially no extra implementation work, only the report format differs.",
  whyItMatters: "Issued alongside the same CPA audit as SOC 2 Type 2 — publish freely on your website or trust page as a marketing and public-trust tool, no NDA required.",
};

export const SOC_TOPICS: Topic[] = [SOC_1_TOPIC, SOC_2_TOPIC, SOC_3_TOPIC];

export const SOC_EXAMINATIONS_TOPIC: Topic = {
  title: "SOC Examinations",
  whatItIs: "Assessed across three types — SOC 1, 2, and 3. SOC 1 examines controls for financial reporting accuracy. SOC 2 evaluates security, availability, processing integrity, confidentiality, and privacy — particularly valuable for service providers handling sensitive data. SOC 3 provides public-distribution-ready, high-level overviews of the same control areas.",
  howWeImplement: "Scope the relevant report type (SOC 1, 2, or 3) → gap assessment against the applicable Trust Services Criteria or control objectives → control design and evidence collection → CPA firm engagement for the formal Type 1 or Type 2 examination.",
  whyItMatters: "SOC 1 fits finance-impact services (payroll, fund administration, payment processing). SOC 2 is the report enterprise SaaS and technology clients ask for first. SOC 3 is a free-to-publish trust badge once a SOC 2 Type 2 is complete.",
};

export const ISO_CERTIFICATIONS_TOPIC: Topic = {
  title: "ISO Certifications",
  whatItIs: "Multiple standards offered, including ISO/IEC 27001 (information security management), ISO/IEC 27017/27018 (cloud security and privacy), ISO/IEC 27701 (privacy management extension), and ISO/IEC 42001 (artificial intelligence management). These demonstrate organizational commitment to security standards and risk management.",
  howWeImplement: "Standard selection based on scope and client requirements → gap assessment against the relevant Annex A / control set → documentation and control implementation → internal audit and management review → certification body audit support (Stage 1 & 2).",
  whyItMatters: "A recognized, accredited certification signals security maturity to enterprise customers, partners, and regulators — often a prerequisite for closing deals with larger clients.",
};

export const GDPR_TOPIC: Topic = {
  title: "GDPR",
  whatItIs: "Services assist organizations in understanding obligations under EU data protection regulation, assessing data processing activities, and implementing appropriate compliance measures to protect the personal data of individuals in the European Union.",
  howWeImplement: "Data processing activity assessment → gap analysis against GDPR obligations → compliance measure implementation (lawful basis, data subject rights, breach response) → ongoing monitoring.",
  whyItMatters: "Non-compliance carries fines up to €20M or 4% of global turnover — assessment and implementation support reduces regulatory exposure for any organization handling EU personal data.",
};

export const PCI_DSS_TOPIC: Topic = {
  title: "PCI DSS",
  whatItIs: "Security standards ensuring secure credit card information handling. Services help merchants and service providers achieve and maintain compliance, reducing data breach risk and financial penalties while safeguarding sensitive payment data.",
  howWeImplement: "Scope determination (merchant/service provider level) → gap assessment against the applicable PCI DSS requirements → remediation support → Self-Assessment Questionnaire (SAQ) or formal Report on Compliance (RoC) support.",
  whyItMatters: "Required by card brands for any organization storing, processing, or transmitting cardholder data — non-compliance risks fines, higher transaction fees, and loss of card processing privileges.",
};

export const CCPA_CPRA_TOPIC: Topic = {
  title: "CCPA & CPRA",
  whatItIs: "California privacy law services helping businesses understand consumer rights and organizational obligations. Assistance includes compliance implementation and avoiding potential penalties while protecting consumer privacy rights.",
  howWeImplement: "Data inventory and processing activity review → consumer rights request workflow (access, deletion, opt-out) → privacy notice and disclosure updates → vendor/service provider contract review.",
  whyItMatters: "Applies to any business meeting CCPA/CPRA thresholds handling California consumer data — non-compliance risks statutory penalties and private right of action exposure.",
};

export const HITRUST_TOPIC: Topic = {
  title: "HITRUST",
  whatItIs: "A comprehensive healthcare cybersecurity framework for assessing security posture and achieving certification. Services demonstrate compliance with industry standards while ensuring patient data protection against healthcare-related risks.",
  howWeImplement: "Readiness assessment → control gap remediation → evidence collection → engagement with a HITRUST-authorized external assessor → validated assessment (r2 or i1 report).",
  whyItMatters: "Certification issued by the HITRUST Alliance via an authorized assessor — a strong market trust signal for US health-tech vendors and a common requirement from healthcare enterprise clients.",
};

export const HIPAA_HITECH_TOPIC: Topic = {
  title: "HIPAA/HITECH",
  whatItIs: "Healthcare regulation compliance services establishing standards for protecting healthcare information. Services ensure regulatory adherence and safeguard sensitive patient data against breaches.",
  howWeImplement: "Security Risk Assessment (SRA) → administrative, physical, and technical safeguard implementation → Business Associate Agreement (BAA) review → breach notification procedure → workforce training.",
  whyItMatters: "Enforced by HHS OCR with tier-based penalties — an attestation or audit-readiness report is the common ask from US healthcare clients and partners.",
};

export const PENTESTING_TOPIC: Topic = {
  title: "PenTesting",
  whatItIs: "Ethical hacking simulating real-world cyberattacks to identify vulnerabilities in systems, networks, and applications. Services enable organizations to proactively discover and remediate security weaknesses before exploitation.",
  howWeImplement: "Scope and rules of engagement definition → reconnaissance and vulnerability identification → controlled exploitation attempts → findings report with remediation guidance → retest on request.",
  whyItMatters: "Required or expected evidence for SOC 2, ISO 27001, PCI DSS, and most enterprise security questionnaires — proactive discovery beats being found by an attacker first.",
};

export const SOX_ITGC_TOPIC: Topic = {
  title: "SOX ITGC Testing",
  whatItIs: "Structured IT General Controls assessments for publicly traded companies meeting Sarbanes-Oxley requirements. Services evaluate internal controls over financial reporting, providing auditors with clear operational control documentation.",
  howWeImplement: "ITGC scoping (access management, change management, IT operations) → control design and operating effectiveness testing → deficiency identification and remediation tracking → evidence package for external auditors.",
  whyItMatters: "A statutory requirement for public companies — clean ITGC testing results support the external financial statement audit and reduce the risk of a material weakness finding.",
};

export const CERT_IN_TOPICS: Topic[] = [
  {
    title: "6-Hour Incident Reporting & Log Management Setup",
    whatItIs: "Meets CERT-In's strict 6-hour incident reporting window and 180-day active / 5-year log retention mandate under the 2022 Directions.",
    howWeImplement: "Map systems/networks to identify reportable incident categories (per the Annex) → deploy centralized logging (180-day active, 5-year retention) → NTP synchronization across all servers/devices (NIC/NPL time servers) → build the 6-hour reporting workflow with CERT-In portal integration, escalation matrix, and on-call rotation → KYC/UIDAI linkage review for applicable entities (VPN, cloud, VASP, data centre).",
    whyItMatters: "We've built this exact workflow before under the 2022 mandate — we know the reportable-incident list precisely, avoiding the over- or under-reporting mistakes first-timers make.",
  },
  {
    title: "CERT-In Empanelled IS Audit Readiness",
    whatItIs: "Prepares an organization for formal engagement with a CERT-In empanelled auditor.",
    howWeImplement: "Gap audit against the CERT-In empanelment audit methodology → vulnerability assessment and penetration test (VAPT) cycle → remediation tracking and re-test → documentation prep (evidence pack, scope statement) for the empanelled auditor engagement.",
    whyItMatters: "Track record coordinating with empanelled auditor firms, and familiarity with the audit methodology and competency criteria CERT-In expects — gaps get caught before the formal audit begins.",
  },
  {
    title: "CISO Advisory & Ransomware Resilience Program",
    whatItIs: "Builds the governance structure and resilience posture CERT-In's 2023 CISO Advisory expects.",
    howWeImplement: "Define/appoint the CISO function with a board-level reporting line → build an incident response plan and playbook → ransomware-specific controls (3-2-1 backup rule, network segmentation, patch management cadence) → periodic tabletop exercises/IR drills → set board reporting cadence (quarterly or incident-triggered).",
    whyItMatters: "Hands-on IR plan build and drill facilitation experience, with a ready-made board-reporting template — faster to stand up than building from scratch.",
  },
];

export const RBI_TOPICS: Topic[] = [
  {
    title: "RBI Cyber Security Framework Implementation",
    whatItIs: "Meets the RBI Cyber Security Framework (June 2016) baseline control mandate for banks and NBFCs.",
    howWeImplement: "Baseline control gap assessment → CISO function setup with board reporting line → SOC build/monitor (24x7 or managed SOC option) → incident response plan and RBI-specific reporting workflow → periodic VAPT cycle, including pre-launch for new systems.",
    whyItMatters: "Built CISO and SOC functions for regulated entities before and know RBI inspection expectations — avoiding common findings like stale VAPT or missing incident-response logs.",
  },
  {
    title: "Master Direction — IT Governance & Risk Compliance",
    whatItIs: "Consolidates IT policy, risk, and audit requirements under RBI's Master Direction on IT Governance (April 2024 update).",
    howWeImplement: "Map the entity against the April-2024 Master Direction → build IT governance structure (IT Strategy Committee, IS policy set) → design the IS audit program (internal and external cadence) → map the risk register to Master Direction clauses.",
    whyItMatters: "Track record realigning clients from the legacy 2016 framework to the 2024 Master Direction, with exact clause mapping and delta already known.",
  },
  {
    title: "Digital Lending Compliance Program",
    whatItIs: "Addresses RBI's digital lending enforcement focus since 2022 — data security, consent, and Lending Service Provider (LSP) oversight.",
    howWeImplement: "Data security control review (no card/bank credential storage beyond need) → customer consent flow build (explicit, revocable, purpose-bound) → LSP oversight framework (due diligence, contract clauses, monitoring) → cooling-off/disclosure requirement checks.",
    whyItMatters: "Handled data-flow and consent reviews for lending-tech clients before, and know exactly which LSP contract clauses RBI inspectors flag first.",
  },
  {
    title: "Cloud Adoption & Third-Party Vendor Risk Management",
    whatItIs: "Meets RBI's 2023 twin-framework requirement for cloud and third-party dependency documentation.",
    howWeImplement: "Cloud risk assessment (data residency, exit clause review, audit-right clause in contract) → vendor due diligence framework (onboarding checklist, risk scoring) → ongoing vendor monitoring (SLA tracking, periodic reassessment) → exit strategy documentation per vendor.",
    whyItMatters: "Drafted exit-clause and audit-right language for BFSI-cloud contracts before, avoiding vendor lock-in compliance gaps.",
  },
  {
    title: "BCP/DR & IS Audit Program",
    whatItIs: "Builds continuity assurance and audit readiness under the IT Framework for Banks and 2023 NBFC IT Guidelines.",
    howWeImplement: "Business Impact Analysis and DR site/setup review → BCP test/drill schedule → patch management program and access control policy → IS audit calendar aligned with RBI-mandated external audits.",
    whyItMatters: "Run BCP drills and IS audit prep for NBFCs before, with the inspection documentation format RBI examiners expect.",
  },
];

export const SEBI_TOPICS: Topic[] = [
  {
    title: "SEBI CSCRF Implementation",
    whatItIs: "Cyber Security & Cyber Resilience Framework for Stock Exchanges, Depositories, and Clearing Corporations (2019), extended to brokers, RTAs, and AMCs (2023 update).",
    howWeImplement: "Applicability check across entity type → governance structure with board-level cyber oversight and CISO reporting → SOC build/monitor with a 4-hour incident reporting SLA → Recovery Time Objective (RTO) definition and DR testing → periodic resilience testing cycle.",
    whyItMatters: "Built the 4-hour IR workflow before for market-infrastructure clients, with familiarity in SEBI's reporting portal and escalation format — no scramble when an incident hits.",
  },
  {
    title: "SEBI Cloud Adoption Compliance",
    whatItIs: "Lets market infrastructure entities adopt cloud without violating localisation or exit mandates.",
    howWeImplement: "Data localisation review confirming residency per SEBI cloud guidelines → cloud risk assessment (vendor lock-in, concentration risk, security controls) → documented exit management plan per cloud vendor → contract clause review (audit rights, data portability).",
    whyItMatters: "Drafted exit-management documentation and localisation checks for BFSI-cloud clients before — reusable templates speed up delivery.",
  },
  {
    title: "Half-Yearly Cyber Audit Readiness",
    whatItIs: "Prepares for CERT-In empanelled auditor engagement on SEBI's half-yearly audit cadence (2020 circular).",
    howWeImplement: "Gap assessment against SEBI's audit checklist → VAPT and control evidence pack build ahead of audit → remediation sprint before the formal empanelled-auditor engagement → audit calendar setup so no half-yearly cycle is missed.",
    whyItMatters: "Coordinated with empanelled auditor firms before and know common finding patterns — issues get pre-fixed before the official audit starts.",
  },
  {
    title: "Algorithmic Trading System Security Audit",
    whatItIs: "Meets SEBI's algorithmic trading guideline (2012 and updates) mandatory system audit requirement.",
    howWeImplement: "System audit per SEBI's algo trading guideline → kill switch mechanism test and verification → order-to-trade ratio (OTR) monitoring control check → colocation security review (physical and network segmentation at the exchange colo).",
    whyItMatters: "Hands-on system audit experience with colocation setups and exchange-specific technical audit checklists — faster sign-off.",
  },
];

export const IRDAI_TOPICS: Topic[] = [
  {
    title: "IRDAI Cybersecurity Guidelines Implementation (2023)",
    whatItIs: "Meets the June-2023 IRDAI baseline across governance, monitoring, and reporting for insurers and intermediaries.",
    howWeImplement: "CISO appointment and function setup with reporting line → IS audit program design (internal plus periodic external audit) → cyber insurance policy review/procurement guidance → SOC build/monitor for real-time threat detection → incident reporting workflow with a 6-hour window.",
    whyItMatters: "Built 6-hour IR workflows across multiple regulators (CERT-In, SEBI CSCRF) before — a reusable playbook adapted quickly to IRDAI specifics.",
  },
  {
    title: "IRDAI Cloud Guidelines Compliance (2023)",
    whatItIs: "Ensures cloud-hosted insurance workloads meet residency and vendor oversight mandates.",
    howWeImplement: "Cloud risk assessment (vendor security posture, concentration risk) → data residency verification confirming India-hosted infrastructure for policyholder data → vendor oversight framework (SLA monitoring, periodic reassessment, exit clause).",
    whyItMatters: "Handled residency and vendor-oversight reviews for BFSI-cloud clients before — direct template reuse for the insurance sector.",
  },
  {
    title: "IRDAI Data Localisation Compliance (2019)",
    whatItIs: "Keeps policyholder data fully India-resident, avoiding localisation violation penalties.",
    howWeImplement: "Data flow mapping to identify every policyholder data storage/processing location → migration plan for any offshore-stored data → ongoing monitoring for new vendor/system onboarding.",
    whyItMatters: "Ran data-flow mapping exercises for regulated entities before and know the common leak points — backups, third-party analytics tools, overseas support access.",
  },
  {
    title: "IRDAI Information/Cyber Security Policy Implementation (2017)",
    whatItIs: "Builds the foundational security policy and resilience posture layer that satisfies IRDAI's base requirement.",
    howWeImplement: "Security policy framework build (aligned to the 2017 base plus 2023 update) → VAPT cycle (periodic vulnerability and penetration testing) → patch management program with cadence and tracking → BCP/DR plan build, test, and drill schedule.",
    whyItMatters: "Policy-framework and BCP/DR build experience across BFSI and insurance-adjacent clients — ready templates for faster rollout.",
  },
];

export const DOT_TOPICS: Topic[] = [
  {
    title: "Telecom Cybersecurity Rules 2024 Implementation",
    whatItIs: "Meets the strict 6-hour incident reporting and 2-year log retention mandate under the November-2024 rule baseline.",
    howWeImplement: "Gap assessment against the Nov-2024 rule baseline → incident reporting workflow with a 6-hour window and DoT-specific escalation path → log retention system (2-year minimum active/archival storage) → mandatory security audit prep before the external audit cycle.",
    whyItMatters: "Built 6-hour IR and multi-year retention systems for CERT-In/SEBI clients before — direct reuse with faster DoT-specific tuning.",
  },
  {
    title: "TRAI Cybersecurity Recommendation Compliance (2023)",
    whatItIs: "Reduces fraud-call exposure and aligns with TRAI's consumer-protection push.",
    howWeImplement: "Security gateway deployment and review (network perimeter control) → caller ID authentication setup per TRAI anti-spoof direction → spam/fraud control system (call/SMS filtering, complaint-handling integration).",
    whyItMatters: "Fraud-control and gateway configuration experience across telecom-adjacent clients — familiar with common false-positive tuning issues.",
  },
  {
    title: "Telecom Equipment Security Testing (DoT TEC)",
    whatItIs: "Clears equipment for deployment without compliance delay or post-deployment recall risk.",
    howWeImplement: "Pre-deployment security test coordination with a TEC-approved lab → vulnerability scan on equipment firmware/config before rollout → documentation pack for TEC approval submission.",
    whyItMatters: "Coordinated equipment test-and-approval documentation before, and know the TEC submission format — fewer rounds of back-and-forth.",
  },
  {
    title: "NCCS Threat Intelligence Coordination Readiness",
    whatItIs: "Plugs the entity into the national threat-intel loop for faster response to coordinated or large-scale threats.",
    howWeImplement: "Map the entity's threat-intel feed integration point (SOC to NCCS coordination channel) → real-time alerting pipeline (feed ingestion, correlation rules) → inter-agency coordination protocol documentation (MHA/MeitY liaison process).",
    whyItMatters: "SOC-integration experience with multi-agency reporting flows (CERT-In, SEBI, RBI) — a reusable coordination framework.",
  },
];

export const GLOBAL_GRC_TOPICS: Topic[] = [
  {
    title: "GDPR (EU General Data Protection Regulation)",
    whatItIs: "The EU/UK personal data protection law — lawful basis, data subject rights, and 72-hour breach notification.",
    howWeImplement: "Data mapping (ROPA) → lawful basis assignment per processing activity → Data Processing Agreements with vendors → privacy notice/consent updates → data subject request (DSR) workflow → 72-hour breach response plan.",
    whyItMatters: "No formal \"certification\" exists — self-assessment and documentation defend against the regulator (ICO/DPA). Fines run up to €20M or 4% of global turnover.",
  },
  {
    title: "HIPAA (US Healthcare)",
    whatItIs: "Protects PHI/ePHI for covered entities and business associates in the US market.",
    howWeImplement: "Security Risk Assessment (SRA) → administrative, physical, and technical safeguards (access control, audit log, encryption) → Business Associate Agreement (BAA) with vendors → breach notification procedure → workforce training.",
    whyItMatters: "No formal certification body — an attestation/audit-readiness report is the common ask from US healthcare clients. HHS OCR enforces, with tier-based penalties.",
  },
  {
    title: "HITRUST CSF (Common Security Framework)",
    whatItIs: "Harmonizes HIPAA, ISO 27001, NIST, and PCI into a single control set — the US healthcare/vendor gold standard.",
    howWeImplement: "Readiness assessment → control gap remediation → evidence collection → engage a HITRUST-authorized external assessor → validated assessment (r2 report, most rigorous) or i1 (lighter).",
    whyItMatters: "Certification is issued by the HITRUST Alliance via an authorized assessor — 2-year validity for r2, and a strong market trust signal for US health-tech vendors.",
  },
  {
    title: "CCSS (CryptoCurrency Security Standard)",
    whatItIs: "A blockchain/crypto-specific GRC standard covering key and wallet management for exchanges, custodians, and wallet providers.",
    howWeImplement: "Assess against 3 maturity levels (Level I–III) → key management lifecycle controls (multi-sig, cold storage, HSM) → audit trail for wallet transactions → incident response for key compromise.",
    whyItMatters: "Certified by the CryptoCurrency Certification Consortium (C4) via an accredited auditor — expected in regulated crypto markets to build user trust on fund safety.",
  },
  {
    title: "vCISO (Virtual CISO) Service",
    whatItIs: "Outsourced, fractional CISO leadership — strategic security direction without the cost of a full-time hire.",
    howWeImplement: "Onboarding with a current posture review → security roadmap build → policy/governance oversight → board/exec reporting cadence → incident escalation point → mentoring for existing internal security staff.",
    whyItMatters: "Cost-effective for SMB/mid-market — senior-level security leadership part-time, scaled up or down as needed, with cross-framework experience (ISO, SOC, RBI, DPDPA) for a faster ramp.",
  },
  {
    title: "Vanta / Drata — Compliance Automation Tool Implementation",
    whatItIs: "GRC automation platforms with automated evidence collection, continuous control monitoring, and multi-framework mapping (SOC 2, ISO 27001, HIPAA, GDPR, DPDPA-custom) in one dashboard.",
    howWeImplement: "Connect integrations (cloud provider, HR tool, code repo, IdP) → auto-discover asset/control gaps → map framework requirements to controls → continuous monitoring alerts on drift → auto-generate audit evidence packs for auditors.",
    whyItMatters: "Hands-on Vanta/Drata implementation experience — cuts manual evidence-gathering time drastically, gives execs a real-time compliance score dashboard, and produces a ready-to-hand-over auditor package.",
  },
];

export const GRC_ITEMS_LEGACY: Topic[] = [
  { title: "Enterprise GRC Program Design", whatItIs: "An integrated governance, risk, and compliance program tailored to your organization's structure and regulatory footprint.", howWeImplement: "Current-state governance assessment → risk taxonomy development → compliance obligation mapping → integrated GRC operating model design.", whyItMatters: "A single operating model replaces fragmented, framework-by-framework compliance work." },
  { title: "GRC Tool Implementation & Configuration", whatItIs: "Deployment and configuration of GRC software to centralize governance, risk, and compliance activity.", howWeImplement: "Platform selection support → workflow configuration (risk register, policy management, audit) → data migration → reporting dashboard setup → user training.", whyItMatters: "Centralizes what's usually scattered across spreadsheets and email threads." },
  { title: "Enterprise Risk Assessment", whatItIs: "Identification and prioritization of the risks that matter most — regulatory, operational, and cyber.", howWeImplement: "Asset and process identification → threat modeling → risk scoring against likelihood and impact → prioritized risk register delivered to leadership.", whyItMatters: "Leadership gets a ranked view of exposure instead of an undifferentiated list." },
  { title: "Information Security Policy Development", whatItIs: "The foundational governance documents nearly every framework and regulator expects to see.", howWeImplement: "Policy gap analysis → drafting (acceptable use, access control, incident response, and others as needed) → stakeholder review cycle → board/leadership approval → rollout.", whyItMatters: "Missing policy documentation is one of the most common audit findings across every framework." },
  { title: "Regulatory Gap Assessment (Multi-Framework)", whatItIs: "A comparison of current practice against every applicable regulation and standard at once.", howWeImplement: "Applicable regulator/framework identification → cross-mapped control comparison → overlap and gap analysis → single prioritized remediation roadmap.", whyItMatters: "One roadmap instead of five separate ones cuts duplicated remediation effort." },
  { title: "Board & Audit Committee Cybersecurity Reporting", whatItIs: "Structured communication of cybersecurity and compliance risk to the board and audit committee.", howWeImplement: "Reporting template design → metrics and KPI selection → dashboard build → quarterly briefing preparation and facilitation.", whyItMatters: "Boards increasingly expect direct, structured cyber-risk visibility, not a technical readout." },
  { title: "Cyber Risk Quantification", whatItIs: "Technical and compliance risk translated into financial terms leadership can act on.", howWeImplement: "Scenario identification → financial impact modeling → likelihood estimation → risk register expressed in monetary terms for prioritization.", whyItMatters: "Budget decisions move faster when risk is expressed in dollars, not severity labels." },
  { title: "Third-Party & Vendor Risk Management Program", whatItIs: "A structured, ongoing program to manage risk introduced by vendors and partners.", howWeImplement: "Vendor inventory and risk tiering → due diligence questionnaire design → contractual clause review → ongoing monitoring cadence → reassessment schedule.", whyItMatters: "Vendor risk is one of the fastest-growing sources of breaches and compliance failures." },
  { title: "Business Impact Analysis (BIA)", whatItIs: "Identification of the business functions most critical to recovery prioritization.", howWeImplement: "Process inventory → criticality ranking workshop → recovery time/point objective setting → dependency mapping (systems, vendors, people).", whyItMatters: "Recovery planning without a BIA usually protects the wrong systems first." },
  { title: "Cyber Insurance Readiness Assessment", whatItIs: "Preparation to qualify for cyber insurance coverage on the best available terms.", howWeImplement: "Control benchmarking against insurer expectations → gap remediation prioritization → insurer questionnaire support → risk quantification input for underwriting.", whyItMatters: "Underwriters increasingly decline or upcharge coverage for common, fixable control gaps." },
  { title: "Compliance Calendar & Regulatory Tracking Setup", whatItIs: "A system to track every recurring compliance obligation across every applicable regulator.", howWeImplement: "Obligation inventory across applicable regulators → deadline calendar build → ownership assignment per obligation → automated reminder workflow.", whyItMatters: "Missed recurring deadlines are avoidable, not a matter of bad luck." },
  { title: "Internal Control Framework Design", whatItIs: "The internal control environment underpinning compliance objectives.", howWeImplement: "Control library development mapped to risks → control ownership assignment → testing schedule design → control effectiveness reporting structure.", whyItMatters: "Well-owned controls survive audits; undocumented ones don't." },
  { title: "Segregation of Duties (SoD) Review", whatItIs: "A review of role assignments to prevent conflicting duties from creating fraud or error risk.", howWeImplement: "Access matrix review across systems → role conflict identification → mitigating control design where conflicts can't be eliminated → ongoing monitoring setup.", whyItMatters: "SoD conflicts are a standard finding in both financial and security audits." },
  { title: "Risk Appetite & Risk Tolerance Framework Development", whatItIs: "A formal, board-agreed statement of how much risk the organization is willing to accept.", howWeImplement: "Appetite statement drafting per risk category → tolerance threshold setting → board workshop and approval → integration into risk reporting.", whyItMatters: "Without an agreed appetite, every risk decision gets re-litigated case by case." },
  { title: "Compliance Management System (CMS) Design", whatItIs: "A system to manage compliance obligations from identification through resolution.", howWeImplement: "Policy repository design → obligation register build → issue management workflow → reporting and escalation structure.", whyItMatters: "Turns compliance from a periodic scramble into a running system." },
  { title: "Regulatory Change Management Advisory", whatItIs: "Tracking of and response to evolving regulatory requirements before they cause exposure.", howWeImplement: "Regulatory horizon scanning setup → impact assessment process for new rules → implementation planning workflow → stakeholder notification process.", whyItMatters: "Regulatory change is constant — a passive posture guarantees playing catch-up." },
  { title: "Cybersecurity Governance Charter Development", whatItIs: "Formal structure for how cybersecurity governance is organized, who's accountable, and how it reports upward.", howWeImplement: "Roles and responsibilities definition → committee structure design → reporting lines documentation → charter approval and rollout.", whyItMatters: "Auditors and regulators consistently ask who owns security decisions — a charter answers it in writing." },
  { title: "M&A Regulatory Due Diligence", whatItIs: "Assessment of the regulatory and compliance posture of a company being acquired or merged with.", howWeImplement: "Target compliance posture review → regulatory risk assessment → findings report for deal negotiation → integration risk planning post-close.", whyItMatters: "Hidden compliance liability is one of the most common sources of post-acquisition value destruction." },
  { title: "Whistleblower Policy & Reporting Mechanism Design", whatItIs: "The mechanisms people need to safely report compliance and ethics concerns.", howWeImplement: "Reporting channel design (hotline, portal, etc.) → investigation workflow design → confidentiality and non-retaliation controls → policy documentation and rollout.", whyItMatters: "Increasingly a regulatory expectation, not just good governance practice." },
];

export const AUDIT_ASSURANCE_TOPICS: Topic[] = [
  {
    title: "Internal Audit",
    whatItIs: "An ongoing, independent review of the organization's processes, controls, and risk management — an in-house assurance function.",
    howWeImplement: "Risk-based audit plan → process walkthroughs → control testing → findings report → management action tracking.",
    whyItMatters: "Catches gaps before an external or statutory audit finds them, while continuously improving operational efficiency.",
  },
  {
    title: "Statutory Audit",
    whatItIs: "The mandatory financial audit required by law (Companies Act, tax law) — an independent opinion on financial statements.",
    howWeImplement: "Books and ledger review → compliance check against accounting standards (Ind AS) → verification of assets/liabilities → audit opinion issuance (clean, qualified, or adverse).",
    whyItMatters: "A non-negotiable legal requirement for company registration and filing, and a foundation for stakeholder and investor trust.",
  },
  {
    title: "Risk-Based Audit",
    whatItIs: "An audit approach that prioritizes high-risk areas first rather than covering everything uniformly.",
    howWeImplement: "Risk assessment and heat-map build → resource allocation to high-risk processes → deep-dive testing on those areas → lighter touch on low-risk areas.",
    whyItMatters: "Makes efficient use of audit budget and time, focusing where real exposure — fraud, financial, operational — actually lies.",
  },
  {
    title: "Concurrent Audit",
    whatItIs: "Real-time or near-real-time audit run parallel to transactions as they happen — common in bank/NBFC branches.",
    howWeImplement: "Daily/periodic transaction review as it occurs → immediate anomaly flagging → same-period corrective action rather than waiting for year-end.",
    whyItMatters: "Catches errors and fraud fast, is mandatory for bank branches under RBI norms, and reduces year-end surprises.",
  },
  {
    title: "Limited Review",
    whatItIs: "A lighter-scope review compared to a full audit — usually a quarterly financial result review for listed companies.",
    howWeImplement: "Analytical procedures and inquiry, without full substantive testing → moderate assurance opinion issuance.",
    whyItMatters: "SEBI mandates quarterly review for listed entities — faster and cheaper than a full audit, enabling timely investor disclosure.",
  },
  {
    title: "Due Diligence Review",
    whatItIs: "A deep investigative review conducted before M&A, investment, or partnership deals.",
    howWeImplement: "Financial due diligence (books, liabilities, tax exposure) plus legal and operational due diligence → red-flag report → deal-risk assessment.",
    whyItMatters: "Protects buyers and investors from hidden liability, misstated valuation, and compliance skeletons before money commits.",
  },
  {
    title: "Management & Performance Audit",
    whatItIs: "A review of the efficiency and effectiveness of management decisions and resource use — beyond pure financial compliance.",
    howWeImplement: "KPI and benchmark review → process efficiency assessment → resource utilization check → improvement recommendations.",
    whyItMatters: "Drives operational improvement, cost optimization, and better decision-making beyond a pure compliance box-tick.",
  },
];

export const TAX_TOPICS: Topic[] = [
  {
    title: "Income Tax",
    whatItIs: "Compliance and planning for direct tax — return filing, TDS, advance tax, and assessment.",
    howWeImplement: "Income computation → deduction/exemption optimization → return filing (ITR) → TDS return and reconciliation → advance tax calculation and payment.",
    whyItMatters: "Mandatory annual compliance with penalties for late or incorrect filing — planning also saves legitimate tax outflow.",
  },
  {
    title: "Tax Process Automation",
    whatItIs: "Automation of repetitive tax-compliance tasks — TDS calculation, reconciliation, and return preparation.",
    howWeImplement: "Integrate the accounting system with a tax tool → auto-calculate TDS/GST liability → auto-reconcile 26AS/GSTR data → auto-generate filing-ready reports.",
    whyItMatters: "Manual tax calculation is error-prone and slow — automation cuts compliance time and reduces mismatch-notice risk.",
  },
  {
    title: "GST Compliance",
    whatItIs: "Goods & Service Tax registration, return filing, and ongoing reconciliation.",
    howWeImplement: "GST registration → monthly/quarterly returns (GSTR-1, 3B) → input tax credit (ITC) reconciliation → annual return (GSTR-9).",
    whyItMatters: "Mandatory above the threshold turnover — ITC mismatch causes cash flow loss, and non-compliance risks penalties or registration cancellation.",
  },
  {
    title: "Tax Audit",
    whatItIs: "The mandatory audit under the Income Tax Act for businesses above the turnover threshold.",
    howWeImplement: "Books review against tax provisions → Form 3CA/3CB-3CD preparation → discrepancy identification → audit report filing.",
    whyItMatters: "A statutory requirement — non-filing carries heavy penalties, and the process surfaces compliance gaps before assessment.",
  },
  {
    title: "VAT & Sales Tax",
    whatItIs: "Legacy state-level tax from the pre-GST regime, still relevant for certain goods and pending cases/assessments.",
    howWeImplement: "Past-period compliance review → pending assessment/appeal handling → reconciliation for transition-period liability.",
    whyItMatters: "Old VAT cases and demands are still active for many businesses — they need closure or defense, not neglect just because GST replaced them.",
  },
  {
    title: "Excise & Service Tax",
    whatItIs: "Legacy central indirect tax from the pre-GST era, still relevant for pending litigation and refund claims.",
    howWeImplement: "Past liability/refund review → pending case documentation → department correspondence handling.",
    whyItMatters: "Transition-period disputes are common — unresolved old demands can surface during GST audit/cross-check.",
  },
  {
    title: "Certification",
    whatItIs: "Tax-related certificates issued by a CA or professional — required for various filings and transactions (Form 15CB, net worth certificate, turnover certificate, and more).",
    howWeImplement: "Underlying data/document verification → applicable form preparation → certification and digital signature → submission to the relevant authority or bank.",
    whyItMatters: "Mandatory for cross-border remittance, loans, and tenders — transactions stall without proper certification.",
  },
  {
    title: "Representation & Appeal",
    whatItIs: "Representing clients before tax authorities — assessment, scrutiny, and appeals at the CIT(A)/Tribunal level.",
    howWeImplement: "Notice/demand review → response/submission drafting → hearing representation → appeal filing if unresolved.",
    whyItMatters: "A wrong or missing response to a notice leads to an adverse order — expert representation improves outcomes and protects against unjust demands.",
  },
  {
    title: "Legal Opinions and Advisory Services",
    whatItIs: "Expert written opinion on complex tax positions — transaction structuring and applicability questions.",
    howWeImplement: "Fact pattern analysis → law/case-law research → opinion drafting with position and risk rating.",
    whyItMatters: "High-value or complex transactions need a documented expert view — protecting the client's position if challenged later and supporting decision-making.",
  },
];
