# Portafolio web — Mario Andres Alvarez Isaza

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-087ea4?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/Uso_acad%C3%A9mico-0052CC?style=flat-square)

**Autor:** Mario Andres Alvarez Isaza
**Asignatura:** Ingeniería Web — Práctica 2
**Institución:** Universidad de Antioquia (Medellín, Colombia)

---

## Contenido

1. [Propósito del proyecto](#1-propósito-del-proyecto)
2. [Tecnologías utilizadas](#2-tecnologías-utilizadas)
3. [Requisitos previos](#3-requisitos-previos)
4. [Cómo ejecutarlo](#4-cómo-ejecutarlo)
5. [Estructura del proyecto](#5-estructura-del-proyecto)
6. [Decisiones de diseño y arquitectura](#6-decisiones-de-diseño-y-arquitectura)
7. [Funcionalidades](#7-funcionalidades)
8. [Accesibilidad](#8-accesibilidad)
9. [Despliegue en Vercel](#9-despliegue-en-vercel)
10. [Scripts disponibles](#10-scripts-disponibles)
11. [Créditos](#11-créditos)
12. [Licencia](#12-licencia)

---

## 1. Propósito del proyecto

Portafolio personal de una sola página (*single-page*), construido como entregable
de la práctica 2 de la asignatura Ingeniería Web.

El objetivo es presentar, en una única pantalla, la información profesional
del estudiante: datos de contacto, fotografía, nivel de idiomas y
habilidades, áreas de conocimiento, formación académica y proyectos
realizados.

El proyecto existe para cumplir tres objetivos concretos:

- **Demostrar dominio de un framework moderno.** El diseño se implementa en
  Next.js 14 con el App Router, TypeScript en modo estricto y Tailwind CSS,
  sin depender de componentes prefabricados.
- **Reproducir fielmente un diseño de Figma.** La composición de tres
  columnas, la paleta amarilla y la jerarquía tipográfica provienen de la
  maqueta de referencia de la práctica.
- **Practicar la separación entre contenido y presentación.** Todo el
  contenido editable está aislado del código de las vistas, de modo que
  actualizar la información del portafolio no requiere modificar componentes.

La interfaz es completamente bilingüe (español/inglés), funciona en tema
claro y oscuro, y está adaptada a dispositivos móviles.

---

## 2. Tecnologías utilizadas

| Tecnología | Versión | Por qué se usa |
|---|---|---|
| **Next.js** | 14.2.5 | Framework de React con App Router. Genera la página como contenido estático en el momento de la compilación, lo que permite un despliegue rápido sin servidor. |
| **React** | 18.3.1 | Biblioteca de interfaz. Se usa `useState`, `useEffect`, `useRef` y Context para el estado de idioma, tema y diálogos. |
| **TypeScript** | 5.9.3 | Tipado estático en modo estricto (`strict: true` en `tsconfig.json`): los contratos de cada componente y de los datos quedan verificados en compilación. |
| **Tailwind CSS** | 3.4.1 | Único mecanismo de estilos del proyecto. No hay CSS Modules ni librerías de UI; los tokens de color se definen en `theme.extend`. |
| **PostCSS + Autoprefixer** | 8 / 10 | Plugins que Tailwind utiliza dentro del pipeline de compilación de Next.js. |
| **ESLint** (`next/core-web-vitals`) | 8.57.1 | Análisis estático durante `npm run lint` y dentro de `npm run build`. |
| **`next/image`** | — | Optimización de la fotografía de perfil y de las portadas de los proyectos (redimensionado, carga prioritaria). |
| **SVG en línea** | — | Los iconos son componentes propios en `components/icons.tsx`; no se instala ninguna librería de iconos. |

---

## 3. Requisitos previos

| Requisito | Versión mínima | Verificación |
|---|---|---|
| Node.js | 18.17.0 | `node -v` (declarado en el campo `engines` de Next.js 14) |
| npm | 9 o superior | `npm -v` |

No se requiere base de datos, ni variables de entorno, ni servicios
externos. El proyecto es completamente estático.

---

## 4. Cómo ejecutarlo

Clonar o descargar el proyecto y, desde la raíz del repositorio:

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo con recarga en caliente
npm run dev
```

El sitio queda disponible en **http://localhost:3000**.

Para verificar la compilación de producción y servirla localmente:

```bash
# 3. Compilación optimizada
npm run build

# 4. Servidor de producción (requiere el paso 3)
npm start
```

Análisis estático del código:

```bash
# 5. Linter
npm run lint
```

---

## 5. Estructura del proyecto

```text
.
├── app/                        # Rutas y shell de la aplicación (App Router)
│   ├── globals.css             # Base de Tailwind + clase .no-scrollbar del carrusel
│   ├── layout.tsx              # Layout raíz: <html lang="es">, <body> y metadatos
│   └── page.tsx                # Página única: sidebar, columna central, rail y diálogos
│
├── components/
│   ├── atoms/                  # Piezas mínimas sin estado ni lógica de negocio
│   │   ├── DateBadge.tsx           # Etiqueta amarilla (fechas, categorías)
│   │   ├── LanguageToggle.tsx      # Botón que alterna ES/EN
│   │   ├── ProgressBar.tsx         # Barra de habilidad con role="progressbar"
│   │   ├── SectionTitle.tsx        # Encabezado de sección con subtítulo
│   │   ├── SkillBullet.tsx         # Ítem de lista con marcador romboidal
│   │   ├── SocialButton.tsx        # Botón circular de red social
│   │   ├── ThemeToggle.tsx         # Alternador claro/oscuro
│   │   └── YellowButton.tsx        # Botón primario (ancla o botón)
│   ├── molecules/              # Composiciones de atoms con datos ya resueltos
│   │   ├── EducationRow.tsx        # Fila de formación: institución + período + detalle
│   │   ├── KnowledgeCard.tsx       # Tarjeta de área de conocimiento
│   │   └── PortfolioCard.tsx       # Tarjeta de proyecto del carrusel
│   ├── organisms/              # Secciones completas de la página
│   │   ├── EducationList.tsx       # Sección "Educación"
│   │   ├── Footer.tsx              # Pie de página
│   │   ├── Hero.tsx                # Banner de presentación
│   │   ├── KnowledgeGrid.tsx       # Sección "Mis Conocimientos"
│   │   ├── LeftSidebar.tsx         # Sidebar de perfil (variantes fija y compacta)
│   │   ├── PortfolioCarousel.tsx   # Carrusel horizontal de proyectos
│   │   ├── PortfolioDialog.tsx     # Diálogo de detalle de proyecto
│   │   ├── ProfileDialog.tsx       # Diálogo de contacto
│   │   └── RightRail.tsx           # Rail derecho de toggles y redes
│   └── icons.tsx               # Set de iconos SVG en línea
│
├── data/
│   └── profile.ts              # Contenido editable del portafolio (datos neutrales)
│
├── lib/
│   ├── i18n.ts                 # Diccionario ES/EN, claves de almacenamiento y textos de accesibilidad
│   ├── LanguageContext.tsx     # Contexto de idioma (estado + persistencia)
│   └── useReveal.ts            # Hook de IntersectionObserver para el revelado por scroll
│
├── public/                     # Archivos estáticos servidos sin procesar
│   ├── Mario.png               # Fotografía de perfil
│   ├── Mario-Alvarez-CV.pdf    # Hoja de vida descargable
│   └── project-*.jpg           # Portadas de los proyectos
│
├── tailwind.config.ts          # Paleta, tipografía y darkMode: "class"
├── postcss.config.mjs          # Plugins de Tailwind y Autoprefixer
├── next.config.mjs             # Configuración de Next.js (valores por defecto)
├── .eslintrc.json              # Reglas: next/core-web-vitals
└── tsconfig.json               # Alias @/* y modo estricto
```

---

## 6. Decisiones de diseño y arquitectura

### 6.1 Composición en tres columnas

`app/page.tsx` replica la maqueta de Figma con un contenedor
`max-w-[1400px]` y tres regiones:

| Región | Ancho | Comportamiento |
|---|---|---|
| Columna izquierda (`LeftSidebar`) | 280 px | `position: sticky` con `max-h-[calc(100vh-3rem)]` y scroll propio |
| Columna central (`main`) | hasta 850 px | Flujo normal de la página; es la única región que crece con el contenido |
| Columna derecha (`RightRail`) | 80 px | `sticky` sin scroll propio |

Se eligió `sticky` en lugar de `fixed` porque conserva el flujo del documento:
las columnas laterales no se superponen al contenido y no es necesario
calcular el ancho restante del `body`.

### 6.2 Diseño adaptable

El punto de corte es el breakpoint `lg` (1024 px). Por debajo de él:

- ambos `aside` se ocultan con `hidden … lg:block`;
- aparece un encabezado `sticky` con los toggles de tema e idioma y los tres
  primeros enlaces sociales;
- el contenido del `LeftSidebar` se vuelve a renderizar al final de la
  página mediante la variante `compact`, de modo que la información de
  contacto no se pierde en móvil.

La fotografía del sidebar compacto se marca como `priority={false}` para no
competir por el ancho de banda con la imagen principal del `Hero`.

### 6.3 Atomic Design

Los componentes se organizan en tres niveles:

- **Atoms**: elementos sin estado propio ni lógica de negocio
  (`ProgressBar`, `YellowButton`, `SectionTitle`…).
- **Molecules**: combinaciones de atoms que ya reciben datos resueltos
  (`KnowledgeCard`, `EducationRow`, `PortfolioCard`).
- **Organisms**: secciones completas que consumen `data/profile.ts` y el
  contexto de idioma (`Hero`, `LeftSidebar`, `PortfolioCarousel`…).

El criterio práctica es el **reuso real**: ningún componente se creó si no
aparece en más de un lugar. Por ejemplo, `ProgressBar` y `SkillBullet` se
usan tanto en el sidebar como en el diálogo de contacto, y `YellowButton`
se emplea en el `Hero` (como acción), en el diálogo de perfil y en el
diálogo de proyecto (como enlace).

`components/icons.tsx` se mantiene fuera de `atoms/` a propósito: son
glifos sin comportamiento propio, no componentes de interfaz.

### 6.4 Idioma: React Context + almacenamiento local

El estado del idioma vive en `lib/LanguageContext.tsx` y se expone mediante
el hook `useLanguage()`.

- **Por qué Context y no props:** el texto aparece en más de diez
  componentes distribuidos en varios niveles del árbol. Pasar el diccionario
  por props obligaría a repetirlo en cada nivel intermedio.
- **Por qué `localStorage`:** la preferencia del usuario debe sobrevivir a
  la recarga. La clave es `portfolio-lang` y se valida (`"es"` o `"en"`)
  antes de aplicarse, para tolerar datos corruptos.
- **Sincronización con el documento:** un `useEffect` actualiza
  `document.documentElement.lang` con el idioma activo, de modo que los
  lectores de pantalla y los buscadores interpretan el contenido correcto.
- **Sin librería de i18n:** el diccionario es un objeto plano en
  `lib/i18n.ts` con la forma `Record<Lang, Dictionary>`. El tipado de
  `Dictionary` garantiza que agregar una clave en español obliga a
  agregarla también en inglés.

### 6.5 Separación entre datos y vistas

`data/profile.ts` contiene la información que el propietario puede editar
(foto, correo, hoja de vida, contacto, idiomas, habilidades, formación,
proyectos y redes sociales) y define los tipos `ProjectItem`,
`EducationItem`, `KnowledgeItem` y `SocialLink` que usan los componentes.

La convención que sostiene la traducción bilingüe es esta:

- `data/profile.ts` guarda únicamente **hechos independientes del idioma**
  (correos, enlaces, fechas, niveles, rutas de imagen).
- `lib/i18n.ts` guarda **todo texto visible**, incluidas las descripciones
  de los proyectos y de las áreas de conocimiento.
- Las listas se combinan **por índice**: cada entrada de `profile.projects`
  se empareja con `t.projects[index]`, y los `?? ""` evitan que una
  traducción faltante rompa el renderizado.

Esta separación permite actualizar el contenido sin tocar ningún
componente y garantiza que ambos idiomas se mantengan sincronizados.

### 6.6 Tema claro/oscuro

- `tailwind.config.ts` declara `darkMode: "class"`. Las variantes `dark:`
  solo se activan cuando el elemento raíz tiene la clase `dark`.
- `ThemeToggle` alterna esa clase sobre `<html>`, lo que evita el
  problema de los frameworks basados en `prefers-color-scheme` (donde cada
  ventana del sistema operativo tendría su propio tema).
- La preferencia se guarda en `localStorage`, con la clave
  `portfolio-theme`.
- El tema se aplica dentro de un `useEffect` posterior al montaje. Es una
  decisión consciente: evita el bloqueo de la primera pintura, pero
  implica que una recarga con el tema oscuro guardado produce un destello
  breve en tema claro. Resolverlo por completo exigiría un script inline
  antes de la hidratación.

### 6.7 Estilos exclusivamente con Tailwind

No hay CSS Modules, styled-components ni librerías de UI. `app/globals.css`
contiene las tres directivas de Tailwind, los estilos base de `body`, una
única utilidad propia, `.no-scrollbar`, que oculta la barra de desplazamiento
horizontal del carrusel manteniendo el desplazamiento táctil, y el bloque de
animaciones de entrada descrito en §6.9. Los `@keyframes` no viven en el
archivo CSS, sino en el tema de `tailwind.config.ts`.

La paleta se centraliza en `theme.extend.colors` de `tailwind.config.ts`:
`brand` (amarillo institucional), `page` (fondo), `ink` (texto principal) y
`muted` (texto secundario). Cambiar la identidad visual implica modificar
un único archivo.

### 6.8 Frontera entre servidor y cliente

`app/layout.tsx` permanece como componente de servidor: es el lugar donde se
declaran los metadatos y donde Next.js genera la etiqueta `<html>`. Solo
`app/page.tsx` se marca `"use client"`, porque la página necesita estado para
los diálogos y consume el contexto de idioma. El contexto se monta
dentro de la página (`LanguageProvider`) y no en el layout, de modo que los
metadatos del servidor no dependen del estado del cliente.

Los archivos de `public/` (fotografía, hoja de vida y portadas) se sirven
como estáticos y se referencian por ruta absoluta (`/Mario.png`,
`/Mario-Alvarez-CV.pdf`).

### 6.9 Animaciones de entrada

Las animaciones de entrada se organizan en dos capas según si el elemento está
o no en la primera pantalla, porque el momento adecuado para animarse es
distinto en cada caso.

**Capa 1 — entrada escalonada al cargar la página.** Los cuatro bloques
superiores (encabezado móvil, rail izquierdo, `Hero` y rail derecho) ya están
en pantalla al cargar, así que esperar al scroll los dejaría fuera de
animación. `app/page.tsx` aplica `animate-fade-in` con un
`animationDelay` en línea de 0 ms, 80 ms, 160 ms y 240 ms respectivamente. El
retardo se escribe como estilo en línea porque el orden de llegada depende de
la disposición, no de un valor reutilizable del tema.

**Capa 2 — revelado por scroll.** `KnowledgeGrid`, `EducationList`,
`PortfolioCarousel` y el `Footer` quedan por debajo del pliegue. El hook
`lib/useReveal.ts` los observa con un `IntersectionObserver` de
`threshold: 0.15` y alterna el atributo `data-reveal` de `"pending"` a
`"in"`, tras lo cual llama a `disconnect()` para que la animación se ejecute
una sola vez y no se repita al volver hacia arriba.

Se eligió un hook y no un componente envoltorio `<Reveal>` porque los cuatro
destinos ya renderizan su propio elemento raíz: un envoltorio añadiría un
nivel de DOM dentro de `<main>` únicamente para portar una clase, y tendría
que reenviar la referencia y distinguir entre `<section>` y `<footer>`.

**Parámetros.** `theme.extend` de `tailwind.config.ts` define `fade-in`
(opacidad 0 → 1) y `fade-up` (opacidad 0 → 1 más `translateY` de 12px a 0),
ambas a 0.5 s `ease-out` con `animation-fill-mode: both`. La duración es lo
bastante larga para que el movimiento se lea como intencional y lo bastante
corta para no retrasar la lectura; `ease-out` desacelera, de modo que el
elemento se asienta en lugar de frenar de golpe. El desplazamiento de 12 px
permanece por debajo del umbral en que un movimiento se percibe como
desplazamiento en una disposición basada en texto, y no hay rebote ni
sobrepaso. Ambas animaciones se limitan a `opacity` y `transform`, por lo que
no provocan reflujo ni corrimiento de maquetación. El modo de relleno `both`
es lo que mantiene el estado inicial durante el `animation-delay` de la
capa 1: sin él, un bloque retrasado aparecería un instante totalmente visible
antes de desvanecerse.

**Guardas de accesibilidad.** Hay dos mecanismos independientes, y ambas son
necesarias:

1. Bajo `prefers-reduced-motion: reduce`, las utilidades `animate-fade-*`
   reciben `animation: none`, y además la máquina de estados del revelado por
   scroll —incluida la regla `opacity: 0`— está contenida dentro de
   `@media (prefers-reduced-motion: no-preference)`. Una persona que pidió
   movimiento reducido nunca recibe la regla que oculta contenido, de modo que
   no puede quedarse con una sección invisible.
2. Con JavaScript deshabilitado, `data-reveal` se escribe de forma imperativa
   al montar y nunca se renderiza en el servidor. Sin ese atributo ninguna
   regla coincide y el contenido permanece visible.

Por eso no se usó estado de React ni una clase `opacity-0` escrita en el JSX:
cualquiera de las dos habría enviado el estado oculto dentro del HTML
prerenderizado, convirtiendo la animación en un requisito para ver la página
en lugar de una mejora progresiva. `app/globals.css` usa selectores de
atributo (`[class~="animate-fade-in"]`) en lugar de selectores de clase en el
bloque de movimiento reducido, porque la caché local de `@apply` de Tailwind
registra como definición de utilidad cualquier selector de clase escrito en el
propio CSS, lo que hacía que la anulación resolviera contra sí misma y emitiera
un bloque de media anidado inalcanzable.

**Verificación.** El HTML prerenderizado no contiene declaraciones `opacity`
ni atributos `data-reveal`, y una auditoría en Chromium sobre cuatro
escenarios (por defecto, movimiento reducido forzado, ventana móvil y
ejecución de scripts deshabilitada) reportó 95 nodos de texto visibles y 0
invisibles.

Deliberadamente **no** se animan los diálogos, los estados de hover ni los
conmutadores de tema e idioma: son estados dirigidos por el usuario, donde un
retardo percibido se lee como falta de respuesta y no como entrada.

---

## 7. Funcionalidades

| Funcionalidad | Descripción | Componente |
|---|---|---|
| **Cambio de idioma ES/EN** | Alterna el diccionario completo en tiempo de ejecución, sin recargar la página. Persiste la preferencia y actualiza `<html lang>`. | `LanguageToggle`, `lib/LanguageContext.tsx` |
| **Tema claro / oscuro** | Alterna la clase `dark` sobre el elemento raíz. Persiste la preferencia. | `ThemeToggle` |
| **Diálogo de perfil de contacto** | Se abre con el botón "Contrátame" del `Hero`. Muestra biografía, correo, las tres habilidades principales y tres habilidades adicionales. | `ProfileDialog` |
| **Diálogo de detalle de proyecto** | Se abre con "Ver más →" sobre la tarjeta de cada proyecto. Muestra portada, categoría, título, descripción completa y enlace al repositorio. | `PortfolioDialog` |
| **Cierre de diálogos** | Los dos diálogos se cierran con la tecla `Escape`, con clic sobre el fondo oscurecido o con el botón de cerrar. | `ProfileDialog`, `PortfolioDialog` |
| **Carrusel horizontal** | Lista de proyectos con desplazamiento horizontal, anclaje por `scroll-snap` y botones de desplazamiento de 320 px. | `PortfolioCarousel` |
| **Descarga de la hoja de vida** | El botón "Descargar CV" enlaza al PDF estático en `public/` mediante el atributo `download`. | `LeftSidebar`, `YellowButton` |
| **Enlaces sociales** | GitHub, LinkedIn, Instagram y correo, disponibles en el sidebar, en el rail derecho, en el pie y en el encabezado móvil. | `SocialButton` |
| **Diseño adaptable** | Por debajo de 1024 px los railes se ocultan, aparece un encabezado `sticky` y el resumen de contacto se traslada al final de la página. | `app/page.tsx` |
| **Animaciones de entrada** | Entrada escalonada de los bloques superiores al cargar la página y revelado progresivo de las secciones inferiores al hacer scroll. Se desactivan por completo bajo `prefers-reduced-motion: reduce` y sin JavaScript el contenido permanece visible. | `tailwind.config.ts`, `app/globals.css`, `lib/useReveal.ts`, `app/page.tsx` |

---

## 8. Accesibilidad

El proyecto implementa los siguientes mecanismos:

- **Etiquetas en controles de solo icono.** `ThemeToggle`,
  `LanguageToggle`, `SocialButton`, las flechas del carrusel y los botones de
  cierre de los diálogos usan `aria-label` y `title` con textos
  localizados, por lo que nunca dependen únicamente del símbolo mostrado.
- **Semántica de diálogo.** Ambos diálogos declaran `role="dialog"` y
  `aria-modal="true"`, con un `aria-label` que identifica su contenido.
- **Barras de habilidad.** `ProgressBar` expone `role="progressbar"` con
  `aria-valuenow`, `aria-valuemin`, `aria-valuemax` y `aria-label`. Además,
  el nivel se recorta al rango 0–100 para que un dato incorrecto no
  produzca una barra fuera de escala.
- **Cierre con teclado.** La tecla `Escape` cierra el diálogo activo, ya que
  ambos escuchan el evento a nivel de `window` y eliminan el listener al
  desmontarse.
- **Navegación por teclado.** Todos los controles interactivos son
  elementos nativos `<button>` o `<a>`, por lo que son alcanzables con `Tab`
  y se activan con `Enter` o `Espacio` sin código adicional.
- **Regiones etiquetadas.** Las secciones usan `aria-labelledby` apuntando a
  su encabezado, y los bloques del sidebar y el `nav` del rail derecho
  declaran `aria-label`.
- **Textos alternativos.** Todas las imágenes de `next/image` incluyen un
  `alt` descriptivo construido a partir del nombre del titular.
- **Contraste.** Se verificó la relación de contraste de los pares de color
  realmente utilizados (WCAG 2.1):

  | Texto / fondo | Ratio | Evaluación |
  |---|---|---|
  | `ink` sobre blanco (`#2B2B2B` / `#FFFFFF`) | 14.16:1 | AAA |
  | `muted` sobre blanco (`#767676` / `#FFFFFF`) | 4.54:1 | AA |
  | `muted` sobre `page` (`#767676` / `#F0F0F6`) | 4.00:1 | Por debajo de AA |
  | `brand-600` sobre blanco (`#D98E00` / `#FFFFFF`) | 2.69:1 | Por debajo de AA |
  | Blanco sobre `brand-400` (`#FFFFFF` / `#FFB400`) | 1.78:1 | Por debajo de AA |

  El texto principal cumple holgadamente; los tres últimos pares quedan por
  debajo del mínimo AA de 4.5:1 y se registran como pendiente de corrección
  en «Límites conocidos».

### Límites conocidos

- **Contraste insuficiente en tres combinaciones de color.** El amarillo
  `brand-400` con texto blanco (2.69:1 y 1.78:1 según el caso de uso) y el
  `muted` sobre el fondo `page` (4.00:1) no alcanzan el mínimo AA de 4.5:1.
  Afecta a `DateBadge`, a los enlaces de texto en `brand-600` y a los
  estados de hover. La corrección requiere oscurecer `brand-400` o usar
  texto `ink` sobre el amarillo, lo que alteraría el contraste con la
  maqueta de Figma; se deja documentado en lugar de aplicar un cambio de
  paleta no acordado.
- Los diálogos **no implementan trampa de foco** (*focus trap*) ni restauran el
  foco al elemento que los abrió al cerrarse. En una evaluación de
  accesibilidad completa este sería el siguiente paso (por ejemplo, usando
  el elemento `<dialog>` nativo).
- El tema y el idioma se aplican después del montaje, por lo que una recarga
  con tema oscuro guardado produce un destello breve en tema claro.
- No se incluyen navegación por anclas ni encabezados de navegación: la
  página es un único documento largo, no una aplicación de varias vistas.
- **Un elemento con `useReveal` que una media query ocultaría podría quedar
  en `opacity: 0`.** Un elemento con `display: none` nunca intersecta la
  ventana, por lo que el `IntersectionObserver` no dispara y el atributo
  permanece en `"pending"`; si un redimensionado lo vuelve visible, aparecería
  oculto. Los cuatro destinos actuales (`KnowledgeGrid`, `EducationList`,
  `PortfolioCarousel` y `Footer`) se renderizan siempre, así que la situación
  no se da hoy. Si se añade uno nuevo, no debe montarse el hook sobre un
  elemento que una media queryaltere.

---

## 9. Despliegue en Vercel

La página se compila como contenido estático (`○ (Static)` en la salida de
`npm run build`), por lo que el despliegue no necesita servidor ni base de
datos.

1. Publicar el repositorio en GitHub.
2. En Vercel, seleccionar **Add New → Project** e **importar** el repositorio.
3. Vercel detecta automáticamente el framework **Next.js** y sus valores por
   defecto:
   - *Build Command*: `npm run build`
   - *Output Directory*: gestionada por Next.js (archivos estáticos y de
     soporte en `.next/`)
   - *Install Command*: `npm install`
4. Pulsar **Deploy**. El proyecto queda publicado en un dominio
   generado por Vercel, que puede sustituirse por un dominio propio desde
   *Settings → Domains*.

No se requieren variables de entorno ni secretos: el proyecto es
completamente estático y `package.json` está marcado como `private`.

---

## 10. Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo en `http://localhost:3000` con recarga en caliente. |
| `npm run build` | Genera la compilación de producción optimizada y verifica tipos y reglas de ESLint. |
| `npm start` | Sirve localmente la compilación generada por `npm run build`. |
| `npm run lint` | Ejecuta ESLint con la configuración `next/core-web-vitals`. |

Comandos adicionales de Next.js disponibles en el proyecto:

| Comando | Descripción |
|---|---|
| `npx tsc --noEmit` | Comprobación de tipos sin emitir archivos. |

---

## 11. Créditos

- **Diseño de referencia:** maqueta de Figma entregada como parte de la
  práctica 2 de Ingeniería Web. La composición en tres columnas, la paleta
  amarilla y la jerarquía tipográfica proceden de ese diseño.
- **Iconos:** conjunto de SVG en línea de elaboración propia
  (`components/icons.tsx`). No se utiliza ninguna librería de iconos.
- **Fotografía:** `public/Mario.png` es fotografía personal del autor.
- **Imágenes de los proyectos:** `public/project-*.jpg` son fotografías de
  stock utilizadas como portada de cada proyecto; están almacenadas
  localmente para que el sitio funcione sin dependencias de red externas.
  Puede reemplazarlas por capturas reales de cada proyecto.
- **Tipografía:** la familia `Inter` está declarada en
  `tailwind.config.ts` con `system-ui`, `Segoe UI` y `Arial` como
  alternativas. No se descarga ningún archivo de fuente, por lo que el
  navegador usa la fuente instalada o, en su defecto, la primera
  alternativa del sistema.
- **Asignatura:** Ingeniería Web, Universidad de Antioquia.

---

## 12. Licencia

Proyecto académico entregado para la asignatura Ingeniería Web de la
Universidad de Antioquia.

`package.json` está marcado como `private: true` y el repositorio no declara
una licencia de software abierta. El código, los textos y los recursos
visuales son de uso exclusivamente académico. Para reutilizarlo en otro
contexto, contactar al autor.
