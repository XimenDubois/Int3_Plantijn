import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/Int3_Plantijn/",  // Dit moet overeenkomen met je repo-naam
});
