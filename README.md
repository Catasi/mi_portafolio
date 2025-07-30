# Portfolio Profesional - Desarrollador Web

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Astro](https://img.shields.io/badge/Astro-4.0-orange.svg)
![React](https://img.shields.io/badge/React-18-blue.svg)
![Status](https://img.shields.io/badge/status-En%20línea-green.svg)

## 🌟 Descripción

Mi portafolio profesional como desarrollador web junior, diseñado para mostrar mis habilidades técnicas, proyectos destacados y experiencia en el desarrollo de aplicaciones web modernas. Un sitio web completamente responsivo con animaciones fluidas y soporte multiidioma.

## ✨ Características

- 🚀 **Rendimiento optimizado** con Astro para carga ultrarrápida
- 🎨 **Diseño moderno** con Tailwind CSS y componentes personalizados
- 🌐 **Multiidioma** con i18next (Español/Inglés)
- ⚡ **Animaciones fluidas** con MagicUI y fullpage.js
- 🎯 **Secciones organizadas:** Sobre mí, Proyectos, Trayectoria, Programas, Contacto
- 🔧 **Componentes interactivos** desarrollados en React

## 🛠️ Tecnologías Utilizadas

### Core

- **Framework:** [Astro](https://astro.build/) - Generación de sitios estáticos
- **Frontend:** [React 18](https://reactjs.org/) - Componentes interactivos
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) - Diseño responsivo

### Librerías y Herramientas

- **Internacionalización:** [i18next](https://www.i18next.com/) - Traducciones
- **Animaciones:**
  - [MagicUI](https://magicui.design/) - Componentes animados
  - [fullpage.js](https://alvarotrigo.com/fullPage/) - Navegación por secciones
- **Desarrollo:** TypeScript, ESLint, Prettier
- **Deployment:** Vercel/Netlify

## 📋 Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [Git](https://git-scm.com/)
- Editor de código (recomendado: VS Code)

## 🚀 Instalación y Desarrollo Local

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/Catasi/mi_portafolio
   ```

2. **Navega al directorio del proyecto**

   ```bash
   cd mi_portafolio
   ```

3. **Instala las dependencias**

   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo**

   ```bash
   npm run dev
   ```

5. **Abre tu navegador**
   ```
   http://localhost:4321
   ```

## 📖 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run i18next      # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de la build
npm run astro        # CLI de Astro
npm run lint         # Revisar código con ESLint
npm run format       # Formatear código con Prettier
```

## 📁 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── components/       # Componentes React reutilizables
│   │   ├── formacion/    # Componentes de react para la seccion training
│   │   ├── home/         # Secciones del portfolio v.1
│   │   └── magicui/      # Componentes de MagicUI
│   │   └── proyect/      # Componentes de la seccion proyects
│   │   └── start/        # Componentes del protafolio v.2
│   ├── pages/            # Páginas de Astro
│   ├── layouts/          # Layouts base
│   ├── styles/           # Estilos globales
│   ├── utils/            # Utilidades y helpers
│   ├── i18n/             # Configuración de traducciones
│   │   ├── locales/      # Archivos de idiomas
│   │   └── config.ts     # Configuración i18next
│   └── assets/           # Imágenes y recursos
├── public/               # Archivos estáticos
├── astro.config.mjs      # Configuración de Astro
├── tailwind.config.mjs   # Configuración de Tailwind
└── tsconfig.json         # Configuración de TypeScript
```

## 🎨 Secciones del Portfolio

### 🏠 Hero Section

- Presentación personal con animaciones
- Call-to-action para descargar CV
- Navegación fluida entre secciones

### 👨‍💻 Sobre Mí

- Información profesional y personal
- Habilidades técnicas visualizadas
- Experiencia y formación

### 💼 Proyectos

- Showcase de proyectos destacados
- Enlaces a repositorios y demos
- Tecnologías utilizadas en cada proyecto

### 🛠️ Habilidades

- Stack tecnológico organizado por categorías
- Nivel de experiencia visual
- Herramientas y metodologías

### 📞 Contacto

- Formulario de contacto funcional
- Enlaces a redes sociales profesionales
- Información de contacto directo

## 🌐 Internacionalización

El sitio está disponible en:

- 🇪🇸 **Español** (por defecto)
- 🇺🇸 **English**

### Añadir nuevos idiomas:

1. Crea archivo en `src/i18n/locales/[idioma].json`
2. Actualiza la configuración en `src/i18n/config.ts`
3. Añade el selector de idioma en el componente correspondiente

## 🚀 Deployment

### Automático con Vercel

```bash
# Conecta tu repositorio con Vercel
# Deploy automático con cada push a main
```

### Manual con build

```bash
npm run build
# Sube la carpeta 'dist/' a tu hosting preferido
```

## 📊 Optimizaciones Implementadas

- ⚡ **Lazy loading** de imágenes y componentes
- 🗜️ **Compresión automática** de assets
- 🎯 **Código splitting** con Astro
- 📱 **Progressive Web App** características
- 🔍 **SEO optimizado** con meta tags dinámicos
- ♿ **Accesibilidad** siguiendo estándares WCAG

## 🤝 Contribuciones

Si encuentras algún error o tienes sugerencias:

1. Fork el repositorio
2. Crea una rama (`git checkout -b improvement/descripcion`)
3. Commit tus cambios (`git commit -m 'Mejora: descripción'`)
4. Push a la rama (`git push origin improvement/descripcion`)
5. Abre un Pull Request

## 📋 Roadmap

- [ ] Añadir más animaciones con Framer Motion
- [ ] Implementar tema oscuro/claro
- [ ] Agregar blog personal
- [ ] Integrar CMS para gestión de contenido
- [ ] Añadir más idiomas
- [x] Responsive design completo
- [x] Optimización de rendimiento
- [x] Sistema de traducciones

## 📞 Contacto

- 🌐 **Portfolio:** [tu-dominio.com](https://tu-dominio.com)
- 📧 **Email:** tu-email@ejemplo.com
- 💼 **LinkedIn:** [Tu Perfil](https://linkedin.com/in/tu-perfil)
- 🐙 **GitHub:** [Tu Usuario](https://github.com/tu-usuario)
- 🐦 **Twitter:** [@tu_usuario](https://twitter.com/tu_usuario)

## 📄 Licencia

Este proyecto es de uso personal para demostrar habilidades profesionales.

**© 2025 Tu Nombre. Todos los derechos reservados.**

## 🙏 Agradecimientos

- **Astro Team** por el increíble framework
- **Tailwind Labs** por el sistema de diseño
- **React Community** por los componentes reutilizables
- **i18next** por facilitar la internacionalización
- **MagicUI** por los componentes animados

---

⭐ **¿Te gustó mi trabajo?** ¡No dudes en contactarme para colaborar en tu próximo proyecto!
