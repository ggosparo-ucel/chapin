# ▢ ChapinFlow — IDE de Diagramas de Chapín

**ChapinFlow** es una aplicación web interactiva SPA (Single Page Application) diseñada específicamente para construir, editar, importar y exportar **Diagramas de Chapín (Nassi-Shneiderman / NS)** de forma totalmente visual e intuitiva. 

La herramienta es autónoma (corre completamente en el cliente sin requerir servidores backend), es decir, puede ser ejecutada localmente en cualquier ordenador simplemente haciendo doble clic en el archivo HTML.

---

## ✨ Características Destacadas

### 🎓 1. Rigor y Representación Académica
*   **Condicionales Claros (IF-ELSE):** Cabeceras triangulares responsivas generadas mediante trazados SVG dinámicos que dividen el espacio de forma limpia para las etiquetas **SÍ** y **NO**.
*   **Líneas Diagonales Académicas:** Cuando una rama condicional o el cuerpo de un bucle se encuentra vacío, en los modos **Vista Previa** y **PDF** se dibuja automáticamente una línea diagonal cruzada, respetando estrictamente la simbología académica oficial de la notación Nassi-Shneiderman.
*   **Diferenciación de Funciones:**
    *   **Función Principal (`main`):** Renderiza esquinas y bordes rectos.
    *   **Funciones Auxiliares:** Se visualizan con bordes curvos.

### 📝 2. Edición Agilizada y Avanzada
*   **Inserción Directa e Instantánea:** Los bloques de "instrucciones vacíos" disponen de botones rápidos para insertar estructuras (`Action`, `IF-ELSE`, `FOR/WHILE`, `UNTIL`) directamente con un solo clic, eliminando menús emergentes redundantes.
*   **Bloques de Acción Multilínea:** Los bloques de acción (`Action`) te permiten escribir múltiples instrucciones o asignaciones secuenciales en un solo recuadro pulsando la tecla **Enter** para insertar saltos de línea naturales, manteniendo el foco de escritura en todo momento.
*   **Pila de Historial Completa (Undo/Redo):** Deshaz (`Ctrl + Z`) y rehacer (`Ctrl + Y`) cualquier acción estructural (crear, eliminar, mover, duplicar o limpiar).
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

## 🧑‍💻 Autoría y Propósito

Desarrollado como una solución para la cátedra de **Metodología de la Programación** (UCEL), aportando un entorno pedagógico para el aprendizaje de la lógica algorítmica estructurada.


