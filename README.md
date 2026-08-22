# Portfolio Website - ImSanty

Portfolio personal interactivo y moderno para ImSanty - Desarrollador Web Full Stack, Programador Java, Artista 3D y Minecraft Modder.

## 🌐 Demo

Visita el portfolio en vivo: [imsanty.com](https://imsanty.com/)

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html              # Archivo HTML principal
├── css/
│   ├── variables.css       # Variables CSS (colores, gradientes, sombras)
│   ├── base.css           # Reset y estilos base
│   ├── components.css     # Componentes reutilizables (navbar, preloader, cursor)
│   └── sections.css       # Estilos específicos de cada sección
├── js/
│   ├── particles.js       # Animación de partículas interactivas
│   ├── typing.js          # Efecto de escritura animada
│   └── main.js            # Scroll animations, cursor, filtros, etc.
└── assets/
    ├── images/            # Imágenes del portfolio
    └── fonts/             # Fuentes personalizadas
```

## ✨ Características

- **Diseño Moderno**: Tema oscuro con gradientes vibrantes y efectos de glassmorphism
- **Totalmente Responsive**: Optimizado para desktop, tablet y móvil
- **Animaciones Interactivas**:
  - Partículas de fondo que reaccionan al mouse
  - Efecto de escritura automática en el hero
  - Animaciones de scroll reveal
  - Cursor personalizado (solo desktop)
  - Preloader animado
- **Secciones Completas**:
  - Hero con avatar animado
  - Marquee de tecnologías
  - Sobre mí con bloque de código estilizado
  - Habilidades organizadas por categorías
  - Proyectos con filtros interactivos
  - Estadísticas de GitHub
  - Formulario de contacto
- **Navegación Suave**: Smooth scroll y navbar con efecto de transparencia
- **Performance**: CSS y JS modularizados, animaciones optimizadas con requestAnimationFrame

## 🚀 Uso Local

1. Clona o descarga este repositorio
2. Abre `index.html` en tu navegador
3. ¡Listo! No necesitas instalar dependencias

O usa un servidor local:

```bash
# Python 3
python -m http.server 8000

# Node.js (con npx)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000`

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Framework CSS**: Bootstrap 5.3.3
- **Icons**: Bootstrap Icons 1.11.3
- **Fonts**: Inter, JetBrains Mono (Google Fonts)
- **Arquitectura**: CSS modular, JavaScript vanilla orientado a clases

## 🎨 Personalización

### Cambiar Colores
Edita `css/variables.css` para modificar:
- Colores primarios, secundarios y de acento
- Gradientes
- Colores del tema oscuro
- Sombras y transiciones

### Editar Contenido
- **Información personal**: `index.html` (secciones Hero y About)
- **Habilidades**: `index.html` (sección Skills)
- **Proyectos**: `index.html` (sección Projects)
- **Links sociales**: `index.html` (navbar, hero, footer)

### Modificar Textos de Typing
Edita `js/typing.js`:
```javascript
new TypingEffect('typedText', [
    'Desarrollador Web',
    'Programador Java',
    // Agrega más textos aquí
], 100, 50, 2000);
```

## 📱 Navegación

| Sección | ID | Descripción |
|---------|-----|-------------|
| Inicio | `#hero` | Presentación con avatar y typing effect |
| Sobre mí | `#about` | Historia, info personal y estadísticas |
| Habilidades | `#skills` | Skills técnicas organizadas por categoría |
| Proyectos | `#projects` | Galería de proyectos con filtros |
| GitHub | `#github` | Estadísticas del perfil GitHub |
| Contacto | `#contact` | Info de contacto y formulario |

## 🔄 Scripts de GitHub

Las estadísticas de GitHub son estáticas en el HTML. Para datos dinámicos, puedes integrar la API de GitHub:

```javascript
fetch('https://api.github.com/users/ImSanty')
  .then(response => response.json())
  .then(data => {
    // Actualizar estadísticas
  });
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible para que lo uses como inspiración para tu propio portfolio.

## 🤝 Contribuir

Si tienes ideas para mejorar este portfolio, no dudes en hacer un fork y enviar un PR.

## 📧 Contacto

- **GitHub**: [@ImSanty](https://github.com/ImSanty)
- **Twitter**: [@imsanty_](https://twitter.com/imsanty_)
- **Ubicación**: Argentina

---

Desarrollado con ❤️ por ImSanty - 2026
