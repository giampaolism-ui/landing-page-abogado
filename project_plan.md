# Giampaoli: Business & Law

## 1. Descripción del Proyecto
Sitio web corporativo de **Giampaoli: Business & Law**, una firma de advisory empresarial premium y multidisciplinaria que integra expertise legal, contable, notarial y financiero para acompañar decisiones estratégicas de empresas, inversores y emprendedores (mercado B2B).

- Posicionamiento: boutique consulting firm + legal advisory + corporate finance, con estética editorial contemporánea.
- Valor central: "Las decisiones empresariales no ocurren en compartimentos."
- Audiencia: PYMES, startups & scaleups, grandes empresas, inversores y emprendedores.

## 2. Estructura de Páginas
- `/` — Landing corporativa de una sola página (todas las secciones navegan por anclas):
  - Hero (inmersivo, foto cinematográfica full-screen) → Intro → A quiénes acompañamos → Nuestro diferencial → Soluciones → Áreas de práctica → Cómo trabajamos → CTA estratégico → Contacto → Footer.
- `/insight/:slug` — Página individual de artículo (fase posterior, preparada para SEO).

> Nota: las secciones de **Situaciones**, **Insights** y **Equipo** fueron removidas de la landing por decisión de negocio/visual. El Hero fue rediseñado con un lenguaje editorial inmersivo (foto de fondo, overlays, bordó #861F2E como firma y titular en serif editorial Fraunces).

## 3. Funcionalidades Clave
- [x] Landing completa con identidad visual institucional (rojo #861F2E + negro + gris + blanco cálido).
- [x] Header transparente sobre el Hero con transformación a glassmorphism al hacer scroll + menú móvil hamburguesa.
- [x] Animaciones discretas: reveal al scroll, líneas expansivas, microinteracciones, hover editorial.
- [x] Formulario de contacto funcional (built-in Form).
- [ ] Páginas individuales de Insights optimizadas para SEO.

## 4. Modelo de Datos
No se requiere base de datos para la versión actual. El formulario de contacto usa la funcionalidad integrada de formularios (Form). Los Insights usan datos de ejemplo (mocks) hasta incorporar artículos reales.

## 5. Integraciones
- Base de datos / Auth: no necesarias por ahora (sitio estático + formulario integrado).
- Shopify / Stripe / Toss / PayPal: no aplican.
- Formulario: built-in Form (submitAddr configurado).

## 6. Plan de Fases

### Fase 1: Landing corporativa completa
- Objetivo: construir la página principal con todas las secciones y la identidad visual.
- Entregable: homepage funcional, responsive, con animaciones y formulario de contacto.

### Fase 2: Páginas de Insights + SEO avanzado
- Objetivo: páginas individuales de artículos, datos estructurados, Open Graph, enlaces internos.
- Entregable: plantilla de artículo y metadata optimizada.

### Fase 3: Equipo / expertise real
- Objetivo: incorporar perfiles profesionales definitivos con fotografías y LinkedIn.
- Entregable: sección de equipo actualizada con contenido real.