# Yu-Gi-Oh Cards E-commerce App

Este proyecto es una aplicación de **e-commerce de cartas de Yu-Gi-Oh** desarrollada en **React Native**, diseñada para ofrecer una experiencia rápida y eficiente incluso con grandes volúmenes de datos.

---

## Tecnologías utilizadas

- **React Native**: para el desarrollo de la aplicación móvil.
- **SQLite**: para almacenamiento local de datos y manejo de sesiones de usuario.
- **Firebase Realtime Database**: para obtener información en tiempo real de precios y stock de las cartas.
---

## Características principales

### Manejo eficiente de cartas

- La aplicación almacena **14 MB de cartas de Yu-Gi-Oh** localmente usando SQLite.  
  Esto permite que el usuario no tenga que descargar miles de cartas cada vez que interactúa con la app.
- Tener las cartas localmente permite **filtrar búsquedas rápidamente** en la pantalla de búsqueda del Tab Navigator.
- La descarga inicial se realiza desde la pantalla de **Settings**, presionando el botón **Download Card Tables**. Esta acción es obligatoria antes de usar la aplicación.

### Autenticación y sesiones

- El usuario debe **logearse** antes de comenzar a usar la app.
- La sesión del usuario se guarda localmente para mantener la persistencia entre cierres de la app.

### Detalle de productos

- Cada carta tiene una **pantalla de detalle** que descarga la información más reciente (precios y stock) desde la **Realtime Database**.
- Esto asegura que el usuario solo descarga **una carta a la vez**, evitando descargar todo el catálogo innecesariamente.
- El usuario puede presionar la **imagen de la carta** para ver la imagen original en detalle.
- El usuario puede presionar sobre el **nombre del archetype** para ver a todas las cartas de la misma familia (Sólo aplicable para cartas que pertenezcan a una familia).

### Carrito de compras

- El carrito puede ser llenado con las cartas seleccionadas.
- La compra **no puede completarse** hasta que al menos un usuario esté logeado.

---

## Flujo de uso

1. El usuario se registra o inicia sesión.
2. Va a la pantalla de **Settings** y presiona **Download Card Tables** para descargar la base de datos de cartas.
3. Puede navegar por el catálogo y usar la pantalla de **Búsqueda** para filtrar cartas localmente.
4. Al seleccionar una carta, puede ver su **detalle**, incluyendo precios y stock actualizado desde la base de datos en tiempo real.
5. Agrega cartas al carrito y completa la compra (solo si está logeado).

---

## Ventajas del diseño

- **Almacenamiento local de cartas:** permite una experiencia offline rápida y eficiente.
- **Descargas selectivas de detalles:** evita descargar innecesariamente miles de cartas, optimizando el uso de datos.
- **Persistencia de sesión:** la información del usuario se mantiene entre cierres de la app.
- **Filtrado rápido:** gracias a SQLite, las búsquedas son instantáneas, incluso con un catálogo grande.