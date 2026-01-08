import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // Load env variables properly for Vite config
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      __API_URL__: JSON.stringify(env.VITE_API_URL),
    },
  };
});
