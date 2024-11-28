import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#252525', // Fondo principal
          secondary: '#252525', // Fondo secundario
          tertiary: '#2a313d',
        },
        button: {
          primary: {
            DEFAULT: '#fc7622', // Botón principal
            hover: '#d66219', // Hover del botón principal
          },
          secondary: {
            DEFAULT: '#23A455', // Botón secundario
            hover: '#1a8845', // Hover del botón secundario
          },
        },
        text: {
          base: '#F3F4F6', // Texto
        },
        heading: {
          base: '#E5E7EB', // Títulos
        },
        card: {
          base: '#252525', // Tarjetas
        },
        detail: {
          primary: '#fc7622', // Detalle primario
          secondary: '#2f2017', // Detalle secundario
        },
      },
      boxShadow: {
        'lateral-right': '4px 0 10px rgba(255, 255, 255, 0.3)', // Sombra derecha
        'lateral-left': '-4px 0 10px rgba(255, 255, 255, 0.3)', // Sombra izquierda
      },

    },
  },
  plugins: [],
};
export default config;






// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: {
//           primary: '#1F2937', // Fondo principal
//           secondary: '#111827', // Fondo secundario
//           tertiary: '#2a313d',
//         },
//         button: {
//           primary: {
//             DEFAULT: '#2563EB', // Botón principal
//             hover: '#1D4ED8', // Hover del botón principal
//           },
//           secondary: {
//             DEFAULT: '#10B981', // Botón secundario
//             hover: '#059669', // Hover del botón secundario
//           },
//         },
//         text: {
//           base: '#F3F4F6', // Texto
//         },
//         heading: {
//           base: '#E5E7EB', // Títulos
//         },
//         card: {
//           base: '#374151', // Tarjetas
//         },
//         detail: {
//           primary: '#9333EA', // Detalle primario
//           secondary: '#F59E0B', // Detalle secundario
//         },
//       },
//       boxShadow: {
//         'lateral-right': '4px 0 10px rgba(255, 255, 255, 0.3)', // Sombra derecha
//         'lateral-left': '-4px 0 10px rgba(255, 255, 255, 0.3)', // Sombra izquierda
//       },

//     },
//   },
//   plugins: [],
// };
// export default config;
