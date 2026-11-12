# Reglas de esta demo

Lee `BRIEF.md` antes de nada. Usa la skill `estudio-web` para la dirección de arte y la revisión final.

## Stack
- Astro + Tailwind (`@tailwindcss/vite`), igual que el resto de demos de charcoles-hub.
- `astro.config.mjs` con `site: 'https://charcoles-hub.github.io'` y `base: '/demo-psicologia-ines-gonzalez-carballo'`.
  Todas las rutas de assets tienen que funcionar con ese base.
- El despliegue lo hace `.github/workflows/deploy.yml` al llegar a `main`. No lo toques.

## Obligatorio
- `<meta name="robots" content="noindex, nofollow">` en el layout: no es la web oficial del negocio.
- Una franja discreta arriba del todo: "Propuesta de diseño para el Gabinete de Psicología Inés González Carballo ·
  preparada por Sergio García" con enlace a https://sergiogarciaweb.com.
- **Nada inventado.** Ni reseñas, ni testimonios, ni precios, ni años de experiencia, ni premios que no
  salgan de su web o de su ficha de Google. Las opiniones se citan tal cual de su web con las iniciales
  que ellos usan. La nota de Google (4,8 con 270 reseñas) sí se puede citar.
- Sector sanitario: tono sereno, sin promesas de curación. Nada de "resultados garantizados".
- Fotos: las suyas (de su web actual). Nada de stock que parezca su gente.
- Sin comentarios en el código.

## Al terminar
Resume qué has cambiado respecto a su web actual y qué datos no has encontrado.
