// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'
// import tailwindcss from 'tailwindcss'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [tailwindcss(),react()],
// })
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [tailwindcss(), react()],
});
