import landing from "./index.html";
import services from "./services.html";

import service_dpdpa from "./services/dpdpa.html";
import service_iso from "./services/iso.html";
import service_soc_2 from "./services/soc-2.html";
import service_soc_1 from "./services/soc-1.html";
import service_soc_3 from "./services/soc-3.html";
import service_cert_in from "./services/cert-in.html";
import service_rbi_audit from "./services/rbi-audit.html";
import service_sebi_audit from "./services/sebi-audit.html";
import service_irdai_audit from "./services/irdai-audit.html";
import service_dot from "./services/dot.html";
import service_meity from "./services/meity.html";
import service_other_grc from "./services/other-grc.html";
import service_global_grc from "./services/global-grc.html";
import service_audit_assurance from "./services/audit-assurance.html";
import service_tax from "./services/tax.html";
import service_financial_services from "./services/financial-services.html";
import service_forensic_audit from "./services/forensic-audit.html";

import company_about from "./company/about.html";
import company_leadership from "./company/leadership.html";
import company_blogs from "./company/blogs.html";
import company_data_security_policy from "./company/data-security-policy.html";

const server = Bun.serve({
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
  routes: {
    "/": landing,
    "/services": services,

    "/services/dpdpa": service_dpdpa,
    "/services/iso": service_iso,
    "/services/soc-2": service_soc_2,
    "/services/soc-1": service_soc_1,
    "/services/soc-3": service_soc_3,
    "/services/cert-in": service_cert_in,
    "/services/rbi-audit": service_rbi_audit,
    "/services/sebi-audit": service_sebi_audit,
    "/services/irdai-audit": service_irdai_audit,
    "/services/dot": service_dot,
    "/services/meity": service_meity,
    "/services/other-grc": service_other_grc,
    "/services/global-grc": service_global_grc,
    "/services/audit-assurance": service_audit_assurance,
    "/services/tax": service_tax,
    "/services/financial-services": service_financial_services,
    "/services/forensic-audit": service_forensic_audit,

    "/company/about": company_about,
    "/company/leadership": company_leadership,
    "/company/blogs": company_blogs,
    "/company/data-security-policy": company_data_security_policy,
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log(`Listening on ${server.url}`);
