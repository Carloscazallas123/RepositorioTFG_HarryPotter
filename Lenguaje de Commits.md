# 📜 Lenguaje de Commits: **Conventional Commits v1.0.0**.
> Este Documento solo puede modificarlo la rama Master con el git doc.
## 🛠️ Diccionario de Tipos

| Tipo | Categoría | Cuándo usarlo |
| :--- | :--- | :--- |
| **`feat`** | ✨ Funcionalidad | Nueva característica (ej. buscador, login, tablas nuevas). |
| **`fix`** | 🐛 Corrección | Reparar un bug o un error en la lógica. |
| **`docs`** | 📚 Documentación | Cambios en el README, comentarios de código o manuales. |
| **`style`** | 🎨 Estética | Formateo, espacios, puntos y comas (sin tocar lógica). |
| **`refactor`** | ♻️ Refactorización | Mejora de código que ni añade función ni arregla fallos. |
| **`check/test`** | 💾 Testeo | Testeo de algunas funciones (Base de Datos,Spring...) |
| **`perf`** | ⚡ Rendimiento | Cambios que hacen que la app o la BD vayan más rápido. |
| **`build`** | 📦 Sistema | Cambios en dependencias, npm, scripts de compilación. |
| **`chore`** | 🧹 Mantenimiento | Tareas mundanas (actualizar .gitignore, mover archivos). |
| **`security`**| 🔑 Seguridad | Implementación de hashing, JWT o parches de seguridad. |
| **`ui`** | 🖼️ Interfaz | Cambios visuales menores (iconos, etiquetas, textos). |

---

## 🎯 Ámbitos comunes (Scopes)
Para ser aún más preciso, puedes añadir entre paréntesis la parte del proyecto que has tocado:
* `(db)`: Base de Datos (SQL).
* `(auth)`: Login, Registro y Seguridad.
* `(api)`: Conexión con HP-API o rutas de Express.
* `(frontend)`: Componentes de React, Hooks.
* `(styles)`: CSS, Tailwind o SASS.

---

## 🧙 Reglas de Oro
1. **Imperativo siempre:** Di `feat: añadir`, NO `añadido` ni `añadiendo`. Es una orden al código.
2. **Minúsculas:** La descripción empieza siempre en minúsculas.
3. **Sin punto final:** Mantén la línea limpia.
4. **Límite de 50:** Intenta que el mensaje sea corto y directo.

---

## 🚀 Ejemplos de "Nivel Mortífago" (Pro)

* **Base de Datos:**
  `feat(db): implementar tabla valoraciones con restricción unique`
* **Seguridad:**
  `security(auth): añadir encriptación bcrypt a las contraseñas`
* **Rendimiento:**
  `perf(api): optimizar tiempo de respuesta en el catálogo de magos`
* **Limpieza:**
  `chore(git): ignorar archivos desktop.ini de forma recursiva`