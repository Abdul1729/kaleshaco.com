import "./index.css";
import { createRoot } from "react-dom/client";
import { CompanyPage } from "./pages/CompanyPage";
import { COMPANY_PAGES } from "./data/categories";

const slug = document.body.dataset.slug ?? "";
const page = COMPANY_PAGES.find((p) => p.slug === slug);

if (page) {
  createRoot(document.getElementById("root")!).render(<CompanyPage page={page} />);
}
