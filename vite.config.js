import { defineConfig } from "vite"

console.log(typeof process.env.VITE_SOURCEMAP)

export default defineConfig({
  build: {
    sourcemap: "hidden",
  },
})
