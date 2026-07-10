import isoLogo from "../assets/logos/iso.svg";
import aicpaLogo from "../assets/logos/aicpa.png";
import icaiLogo from "../assets/logos/icai.png";
import accaLogo from "../assets/logos/acca.svg";
import bliroLogo from "../assets/logos/companies/bliro.svg";
import dotfileLogo from "../assets/logos/companies/dotfile.svg";
import ethiackLogo from "../assets/logos/companies/ethiack.svg";
import sysarbLogo from "../assets/logos/companies/sysarb.svg";
import agilerlLogo from "../assets/logos/companies/agilerl.svg";
import acceleriadLogo from "../assets/logos/companies/acceleriad.png";
import fivetattvaLogo from "../assets/logos/companies/5tattva.png";
import accedereLogo from "../assets/logos/companies/accedere.png";
import techowlLogo from "../assets/logos/companies/techowl.png";
import acurateGlobalLogo from "../assets/logos/companies/acurate-global.png";
import abdulPhoto from "../assets/team/abdul-salam-shaik.jpg";
import kakeshaPhoto from "../assets/team/kakesha-vali-shaik.jpg";
import bilalPhoto from "../assets/team/bilal-shaik.jpg";
import kavyaPhoto from "../assets/team/kavya-samanthapudi.jpg";
import sauravPhoto from "../assets/team/saurav-gupta.jpg";
import jareenaPhoto from "../assets/team/jareena-begum.jpg";
import karishmaPhoto from "../assets/team/karishma-shaik.jpg";

export interface LogoItem {
  name: string;
  url: string;
  logo?: string;
}

export const CLIENTS: LogoItem[] = [
  { name: "Bliro", url: "https://bliro.io", logo: bliroLogo },
  { name: "Cobrainer", url: "https://cobrainer.com" },
  { name: "Dotfile", url: "https://dotfile.com", logo: dotfileLogo },
  { name: "Ethiack", url: "https://ethiack.com", logo: ethiackLogo },
  { name: "Sysarb", url: "https://sysarb.com", logo: sysarbLogo },
  { name: "Agile RL", url: "https://agilerl.com", logo: agilerlLogo },
  { name: "Acceleriad", url: "https://acceleraid.ai/", logo: acceleriadLogo },
  { name: "Neurosensum", url: "https://neurosensum.com/" },
  { name: "SuperAlign", url: "https://superalign.ai/" },
  { name: "Sales PlayX", url: "https://salesplayx.com/" },
  { name: "Time Tackle", url: "https://www.timetackle.com/" },
  { name: "Neural Web", url: "https://www.neuralweb.tech/" },
  { name: "Green Radar", url: "https://www.greenradar.com/" },
];

export const PARTNERS: LogoItem[] = [
  { name: "5tattva", url: "https://5tattva.com", logo: fivetattvaLogo },
  { name: "Accedere", url: "https://accedere.io", logo: accedereLogo },
  { name: "Auriseg", url: "https://auriseg.com" },
  { name: "Vulnuris", url: "https://vulnuris.in" },
  { name: "TechOwl Infosec", url: "https://techowl.com", logo: techowlLogo },
  { name: "Acurate Global Inc", url: "https://accurateiso.com/", logo: acurateGlobalLogo },
];

export const STANDARDS_ADVISED: LogoItem[] = [
  { name: "ISO 27001, 27701, 22301, 20000-1, 9001, 31000, 42001", url: "https://www.iso.org/", logo: isoLogo },
  { name: "SOC 1, SOC 2 Type II", url: "https://www.aicpa-cima.com/", logo: aicpaLogo },
];

export const TEAM_CREDENTIALS: LogoItem[] = [
  { name: "ICAI", url: "https://www.icai.org/", logo: icaiLogo },
  { name: "ACCA", url: "https://www.accaglobal.com/", logo: accaLogo },
  { name: "AICPA / CPA", url: "https://www.aicpa-cima.com/", logo: aicpaLogo },
];

export const WHY_US = [
  {
    title: "Licensed CPAs, Technical Fluency",
    desc: "Every engagement is led by CPAs who understand cloud infrastructure and access controls — not just accounting standards.",
  },
  {
    title: "SaaS & Technology Focus",
    desc: "We work exclusively with technology companies, so recommendations reflect how modern software businesses actually run.",
  },
  {
    title: "Direct Partner Access",
    desc: "You work directly with a partner from scoping through sign-off — no hand-off to a rotating bench of staff.",
  },
  {
    title: "Andhra Pradesh-Based, National Reach",
    desc: "Domiciled in Andhra Pradesh and licensed to serve technology clients across India.",
  },
];

export interface TeamMember {
  name: string;
  credentials: string;
  title: string;
  photo: string;
}

export const TEAM: TeamMember[] = [
  { name: "Abdul Salam Shaik", credentials: "CPA, CISA", title: "Founder", photo: abdulPhoto },
  {
    name: "Kakesha Vali Shaik",
    credentials: "CA, CISA",
    title: "Senior Director of Assessment Services (SOC 2, SOC 1, ISO 27001, ISO 42001)",
    photo: kakeshaPhoto,
  },
  { name: "Bilal Shaik", credentials: "CISA, MBA", title: "IT Audit Manager", photo: bilalPhoto },
  { name: "Kavya Samanthapudi", credentials: "CA, CISA", title: "IT Audit Manager", photo: kavyaPhoto },
  { name: "Saurav Gupta", credentials: "US CPA", title: "IT Audit Manager | SOC 1 & 2, SOX 404", photo: sauravPhoto },
  {
    name: "Shaik Jareena Begum",
    credentials: "CISA",
    title: "Service Line Leader — SOC Attestation Services",
    photo: jareenaPhoto,
  },
  { name: "Karishma Shaik", credentials: "", title: "Business Development Officer", photo: karishmaPhoto },
];

export const COMPANY_STATS = {
  founded: 2019,
  teamSize: "50+",
  clientsServed: "500+",
};
