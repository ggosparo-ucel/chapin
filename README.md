# ▢ ChapinFlow — IDE de Diagramas de Chapín

**ChapinFlow** es una aplicación web interactiva SPA (Single Page Application) diseñada específicamente para construir, editar, importar y exportar **Diagramas de Chapín (Nassi-Shneiderman / NS)** de forma totalmente visual, ágil e intuitiva. 

La herramienta es autónoma (corre completamente en el cliente sin requerir servidores backend), lo que significa que puede ser ejecutada localmente en cualquier ordenador simplemente haciendo doble clic en el archivo HTML.

---

## ✨ Características Destacadas

### 🎓 1. Rigor y Representación Académica
*   **Condicionales Claros (IF-ELSE):** Cabeceras triangulares responsivas generadas mediante trazados SVG dinámicos que dividen el espacio de forma limpia para las etiquetas **SÍ** y **NO**.
*   **Acción RETURN ↩️ Especial:** Representación nativa y distinguida de retornos con un borde izquierdo rosa (`--rose`), degradado de fondo premium y etiqueta flotante `↩️ RETURN`.
*   **Controles de Flujo `continue` y `break` Inmutables:** Las acciones de control de bucles `continue` (verde esmeralda, badge `⏩ CONTINUE`) y `break` (rojo, badge `🛑 BREAK`) son completamente estáticas e inmutables en la interfaz, evitando que el alumno cometa errores tipográficos que alteren la lógica estructurada.
*   **Instrucción de Salida `exit` Estructurada:** Permite forzar el cierre del algoritmo con un valor de retorno específico (ej. `exit 0`, `exit 1`). La palabra clave `"exit "` permanece de forma fija en el canvas para evitar ediciones incidentales, permitiendo modificar únicamente el valor o código de salida contiguo.
*   **Simbología y Resaltado de Bucles:** Los bucles (`FOR`, `WHILE`, `DO-WHILE`) están visualmente diferenciados con bordes laterales sólidos en color índigo (`--primary`), fondos premium y badges identificables (`🔁 FOR`, `🔁 WHILE`, `🔄 DO-WHILE`) para destacar su naturaleza estructurada iterativa.
*   **Líneas Diagonales Académicas:** Cuando una rama condicional o el cuerpo de un bucle se encuentra vacío, en los modos **Vista Previa** y **PDF** se dibuja automáticamente una línea diagonal cruzada, respetando estrictamente la simbología académica oficial de la notación Nassi-Shneiderman.
*   **Diferenciación de Funciones:**
    *   **Función Principal (`main`):** Renderiza esquinas y bordes rectos.
    *   **Funciones Auxiliares:** Se visualizan con bordes curvos y estilizados.

### 📋 2. Prueba de Escritorio (Depuración) Profesional e Independiente
*   **Depuración por Función:** Cada función (tanto `main` como las auxiliares secundarias creadas por el usuario) mantiene su propio estado de depuración completamente aislado, con su respectiva lista de variables y filas de prueba de escritorio. El estado se mantiene en sincronía coordinada al alternar entre funciones, deshacer/rehacer, importar JSON o limpiar el proyecto.
*   **Prefijos de Depuración Inteligentes:** Al hacer la depuración paso a paso, el selector de líneas de ejecución incluye prefijos visuales claros (`🔁 [FOR]`, `🔀 [IF]`, `📝 [CÓDIGO]`, `↩️ [RETURN]`, `⏩ [CONTINUE]`, `🛑 [BREAK]`, `🚪 [EXIT]`, etc.) para identificar de forma diferente y clara en qué tipo de bloque se encuentra el puntero.
*   **Reordenamiento Intuitivo de Columnas:** Las columnas de la tabla de depuración y del PDF exportado están ordenadas bajo un estándar altamente pedagógico: **Paso** ➔ **[Variables dinámicas...]** ➔ **Línea de Código** ➔ **Acción**.

### 📝 3. Edición Agilizada y de Alta Fidelidad
*   **Caja de Herramientas Fija (Toolbox):** Integración de un panel de herramientas fijo y visible en la barra lateral izquierda que soluciona de raíz el problema de corte de espacio en los menús emergentes y flotantes antiguos. Permite insertar cualquier bloque con un solo clic.
*   **Selección y Resaltado de Bloques:** El usuario puede hacer clic sobre cualquier bloque en el canvas para seleccionarlo, lo cual es indicado visualmente mediante un contorno ámbar resplandeciente (`selected-block-highlight`) de alta fidelidad.
*   **Inserción Relativa e Inteligente (Antes / Después / Dentro):** Configura la relación de inserción de forma interactiva. El modo **Dentro** se habilita dinámicamente solo para bloques contenedores (IF-ELSE, WHILE, FOR, DO-WHILE), permitiendo insertar sub-bloques anidados de forma totalmente inequívoca.
*   **Auto-Selección para Inserciones en Cadena:** Tras agregar un bloque, este se auto-selecciona en el canvas de forma automática, permitiendo encadenar inserciones fluidas y consecutivas con total agilidad.
*   **Bloques de Acción Multilínea:** Los bloques de acción secuencial te permiten escribir múltiples instrucciones o asignaciones en un solo recuadro pulsando la tecla **Enter** para insertar saltos de línea naturales, manteniendo el foco de escritura en todo momento.
*   **Pila de Historial Completa (Undo/Redo):** Deshaz (`Ctrl + Z`) y rehaz (`Ctrl + Y`) cualquier acción estructural (crear, eliminar, mover, duplicar o limpiar).
*   **Control de Zoom Dinámico:** Escalado vectorial completo desde el **60% hasta el 180%** para editar diagramas de gran tamaño cómodamente sin pérdida de nitidez.

### 📥 4. Importación y Exportación Blindada (A prueba de fallos)
*   **Exportación JSON con Blob URLs:** El guardado y lectura de proyectos en formato JSON estructurado utiliza la API de Blobs nativos del navegador. Esto **evita los bloqueos de seguridad de navegación** impuestos por navegadores modernos bajo el protocolo local `file:///`.
*   **Compatibilidad Hacia Atrás:** Permite importar archivos JSON de versiones antiguas de ChapinFlow, migrando el estado de depuración global heredado a la función `main` de forma automática.
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

Desarrollado como una solución de alta calidad y rigor pedagógico para la cátedra de **Metodología de la Programación** (UCEL), aportando un entorno interactivo y estético para el aprendizaje de la lógica algorítmica estructurada.
