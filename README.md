# ▢ ChapinFlow — IDE de Diagramas de Chapín

**ChapinFlow** es una aplicación web interactiva de página única (Single Page Application - SPA) de alto rendimiento, diseñada específicamente para construir, editar y exportar **Diagramas de Chapín (Nassi-Shneiderman / NS)** de forma totalmente visual e intuitiva. 

La herramienta es 100% estática, autónoma (corre completamente en el cliente sin requerir servidores backend) y es perfecta para ser desplegada en **GitLab Pages**, **GitHub Pages** o para ser ejecutada localmente en cualquier ordenador simplemente haciendo doble clic en el archivo HTML.

---

## 📽️ Demostración en Acción

Nuestra interfaz premium cuenta con un diseño estético *glassmorphic*, modo oscuro/claro y control de color de acentos dinámicos en tiempo real:

![Editor en Acción](/home/gabriel/.gemini/antigravity/brain/fa7b5d38-5696-4643-943d-073b150351ad/custom_modal_flow_demo_1779472079927.webp)

---

## ✨ Características Destacadas

### 🎓 1. Rigor y Representación Académica
*   **Condicionales Claros (IF-ELSE):** Cabeceras triangulares responsivas generadas mediante trazados SVG dinámicos que dividen el espacio de forma limpia para las etiquetas **SÍ** y **NO**.
*   **Líneas Diagonales Académicas:** Cuando una rama condicional o el cuerpo de un bucle se encuentra vacío, en los modos **Vista Previa** y **PDF** se dibuja automáticamente una línea diagonal cruzada, respetando estrictamente la simbología académica oficial de la notación Nassi-Shneiderman.
*   **Diferenciación de Funciones:**
    *   **Función Principal (`main`):** Renderiza esquinas y bordes rectos perfectos (`border-radius: 0px`).
    *   **Funciones Auxiliares:** Se visualizan con bordes curvos estéticos y modernos (`border-radius: 16px`) con recorte de desbordamientos (`overflow: hidden`).

### 📝 2. Edición Agilizada y Avanzada
*   **Inserción Directa e Instantánea:** Los bloques de "instrucciones vacíos" disponen de botones rápidos para insertar estructuras (`Action`, `IF-ELSE`, `FOR/WHILE`, `UNTIL`) directamente con un solo clic, eliminando menús emergentes redundantes.
*   **Bloques de Acción Multilínea:** Los bloques de acción (`Action`) te permiten escribir múltiples instrucciones o asignaciones secuenciales en un solo recuadro pulsando la tecla **Enter** para insertar saltos de línea naturales, manteniendo el foco de escritura en todo momento.
*   **Pila de Historial Completa (Undo/Redo):** Deshaz (`Ctrl + Z`) y rehás (`Ctrl + Y`) cualquier acción estructural (crear, eliminar, mover, duplicar o limpiar) con notificaciones Toast flotantes instantáneas en pantalla.
*   **Control de Zoom Dinámico:** Escalado vectorial completo desde el **60% hasta el 180%** para editar diagramas de gran tamaño cómodamente sin pérdida de nitidez.

### 📥 3. Importación y Exportación Blindada (A prueba de fallos)
*   **Exportación JSON con Blob URLs:** El guardado y lectura de proyectos en formato JSON estructurado utiliza la API de Blobs nativos del navegador. Esto **evita los bloqueos de seguridad de navegación** impuestos por navegadores modernos bajo el protocolo local `file:///`.
*   **Exportación a PDF en un Clic y Fallback de Impresión:**
    *   El motor integra la librería `html2pdf.js` para generar PDFs limpios en tiempo de ejecución.
    *   **Impresión Nativa Redundante (`@media print`):** Si estás sin conexión a internet (offline) o el navegador bloquea scripts externos, el sistema activa automáticamente un fallback llamando al diálogo de impresión nativo del sistema (`window.print()`).
    *   Nuestra hoja de estilos especial formatea todo el lienzo a un diseño estricto y elegante de **líneas negras vectoriales sobre fondo blanco**, libre de menús, botones de edición y barras laterales.

---

## ⌨️ Atajos de Teclado del Espacio de Trabajo

Optimiza tu flujo de trabajo en el canvas utilizando los siguientes atajos globales:

| Atajo | Acción |
| :--- | :--- |
| `Ctrl + Z` | Deshacer la última acción estructural (insertar, mover, borrar, duplicar, limpiar). |
| `Ctrl + Y` | Rehacer la última acción estructural deshecha. |
| `Enter` | Crea un salto de línea dentro de un bloque de acción (`Action`). |
| `Enter` | Confirma y aplica el cambio de texto en cabeceras de condiciones (`IF`, `WHILE`, `UNTIL`). |

---

## 🛠️ Estructura del Proyecto

El código está estructurado en un único archivo autocontenido de arquitectura limpia:

*   **`index.html`:** Archivo único SPA que contiene:
    *   **Diseño y Estilos (CSS):** Variables de diseño, temas oscuro/claro de alto contraste, rejilla Nassi-Shneiderman adaptativa, diseño *glassmorphic*, animaciones de transición y reglas de impresión `@media print`.
    *   **Estructura (HTML5):** Sidebar lateral con gestión de funciones y plantillas académicas preconfiguradas (Sumatoria de N números, Mayor de Tres y Fibonacci Recursivo), barra superior de herramientas de edición y el lienzo principal (`canvas`).
    *   **Lógica de Negocio (JavaScript):** Motor recursivo nativo generador de DOM, pila de historia (`undo`/`redo`), sistema de modales asíncronos basados en Promesas y rutinas de exportación Blob/PDF.

---

## 🚀 Despliegue en GitLab / GitHub Pages

Al ser una aplicación puramente estática de cliente (HTML/CSS/JS), su despliegue es sumamente sencillo:

### Despliegue Directo (Rápido)
1. Sube el archivo `index.html` al repositorio de tu proyecto.
2. Activa el servicio de **Pages** en la configuración de tu repositorio (GitLab en `Settings -> Pages` o GitHub en `Settings -> Pages`).
3. ¡Listo! Tu IDE estará en línea disponible para toda tu clase o equipo.

### Ejemplo de Configuración para GitLab CI (`.gitlab-ci.yml`)
Si deseas automatizar la publicación en GitLab Pages en cada cambio, añade este simple script en la raíz de tu proyecto:

```yaml
pages:
  stage: deploy
  script:
    - mkdir .public
    - cp index.html .public/index.html
    - mv .public public
  artifacts:
    paths:
      - public
  only:
    - main
```

---

## 🧑‍💻 Autoría y Propósito

Desarrollado como una solución de ingeniería de vanguardia para la cátedra de **Metodología de la Programación** (UCEL), aportando un entorno pedagógico, limpio y libre de bloqueos de hilos de ejecución para facilitar la enseñanza y aprendizaje de la lógica algorítmica estructurada.
