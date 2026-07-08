import "./index.css";
import { createRoot } from "react-dom/client";
import { ServiceCategoryPage } from "./pages/ServiceCategoryPage";
import { getCategoryBySlug } from "./data/categories";

const slug = document.body.dataset.slug ?? "";
const category = getCategoryBySlug(slug);

if (category) {
  createRoot(document.getElementById("root")!).render(<ServiceCategoryPage category={category} />);
}
