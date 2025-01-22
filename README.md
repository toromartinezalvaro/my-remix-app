# Remix Contacts App

Este proyecto es una aplicación web de gestión de contactos utilizando **Remix** y **React**. Permite agregar, editar, eliminar y marcar contactos como favoritos. La aplicación sigue un patrón de diseño simple y funcional.

## Índice

- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funcionalidades](#funcionalidades)
- [Rutas Principales](#rutas-principales)
- [Dependencias](#dependencias)
- [Contribuciones](#contribuciones)

## Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone <URL_DEL_REPOSITORIO>

2. Navega al directorio del proyecto:

   ```bash
   cd remix-contacts

3. Instala las dependencias del proyecto:

   ```bash
   npm install

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev

5. Abre el navegador y accede a http://localhost:3000 para ver la aplicación en funcionamiento.

## Estructura del Proyecto

- **`app/`**: Contiene los archivos principales de la aplicación.
- **`components/`**: Componentes reutilizables como el formulario de edición de contactos y el botón de favoritos.
- **`data.ts`**: Contiene las funciones de simulación de la base de datos para crear, obtener y actualizar contactos.
- **`routes/`**: Define las rutas de la aplicación, incluyendo la vista de contactos, la vista de edición y la ruta principal.

## Funcionalidades

- **Ver Contactos**: Muestra la lista de contactos con la opción de ver más detalles de cada uno.
- **Agregar Contacto**: Permite crear un nuevo contacto desde la vista principal.
- **Editar Contacto**: Permite editar los detalles de un contacto específico, como el nombre, la cuenta de Twitter y las notas.
- **Eliminar Contacto**: Permite eliminar un contacto después de una confirmación. (Aún en desarrollo)
- **Marcar como Favorito**: Permite marcar o desmarcar un contacto como favorito. (Aún en desarrollo)

## Rutas Principales

- **`/`**: Página principal con la lista de contactos.
- **`/contacts/:contactId`**: Vista de detalle de un contacto.
- **`/contacts/:contactId/edit`**: Vista para editar un contacto.

## Dependencias

- **`@remix-run/react`**: Framework para React que facilita el manejo de rutas y renderizado del lado del servidor.
- **`react`**: Librería de interfaz de usuario.
- **`tiny-invariant`**: Paquete para verificar la existencia de parámetros en las rutas.
- **`@remix-run/node`**: Herramientas de backend para Remix.
- **`react-router-dom`**: Manejo de rutas en la aplicación.





