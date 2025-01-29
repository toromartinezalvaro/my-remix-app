# Remix Contacts App

Este proyecto es una aplicación web de gestión de contactos utilizando **Remix** y **React**. Permite agregar, editar, eliminar y marcar contactos como favoritos. La aplicación sigue un patrón de diseño simple y funcional.

## Índice

1. [Instalación](#instalación)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Funcionalidades](#funcionalidades)
4. [Rutas Principales](#rutas-principales)
5. [Explicación de Remix](#explicacion-de-remix)
6. [Archivo `contacts.$contactId:edit.tsx`](#archivo-contactscontactidedittsx)
   - [Acción (Edit)](#acción-edit)
   - [Cargador (Loader)](#cargador-loader)
   - [Formulario de Edición](#formulario-de-edición)
7. [Archivo `contacts.$contactId.tsx`](#archivo-contactscontactidtsx)
   - [Cargador (Loader)](#cargador-loader-1)
   - [Vista del Contacto](#vista-del-contacto)
   - [Botones de Editar y Eliminar](#botones-de-editar-y-eliminar)
8. [Componente `Favorite`](#componente-favorite)
9. [Resumen General](#resumen-general)
10. [Dependencias](#dependencias)
11. [Contribuciones](#contribuciones)

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

---

## Explicación de Remix

En Remix, hay dos formas principales de manejar los datos en la aplicación: los **loaders** y las **actions**.

- **Los loaders** se usan para obtener información antes de que la página cargue. Son útiles para traer datos desde una base de datos o una API antes de mostrar la vista.
- **Las actions** se usan cuando se necesita modificar información, como al enviar un formulario o actualizar un registro en la base de datos.

Para acceder a los datos de un **loader**, se usa el hook `useLoaderData`, que permite traer la información y usarla en la interfaz. Ademas, se pueden obtener los resultados de una **action**, como mensajes de error después de enviar un formulario, usando `useActionData`.

También existe `invariant`, que sirve para asegurarse de que ciertos datos existen antes de continuar con un proceso. Si la condición no se cumple, se lanza un error, esto se usa para evitar fallos en la aplicacion.

---

## Archivo `contacts.$contactId:edit.tsx`

### Acción (Edit)
Este archivo contiene la lógica para editar un contacto. Tiene dos secciones principales: la acción y el cargador.

- **`action`**: Aquí se obtiene el ID del contacto desde la URL (`params.contactId`) y luego se toma la información del formulario enviado (`formData`). Con esta información, se actualizan los detalles del contacto utilizando la función `updateContact`. Después de actualizar, se redirige al usuario a la página de detalles del contacto (`/contacts/:contactId`).

### Cargador (Loader)
- **`loader`**: Obtiene el contacto a editar usando el ID que llega como parámetro en la URL. Si no se encuentra el contacto, se devuelve un error 404. De lo contrario, devuelve los detalles del contacto para que se puedan mostrar en el formulario.

### Formulario de Edición
- **Formulario (`<Form>` en JSX)**: Es el formulario donde el usuario puede editar los detalles del contacto, como el nombre, cuenta de Twitter, avatar y notas. Los valores predeterminados del formulario están llenados con los datos actuales del contacto.

---

## Archivo `contacts.$contactId.tsx`

Este archivo se encarga de mostrar la vista de un contacto específico.

### Cargador (Loader)
- **`loader`**: Al igual que en el archivo anterior, el cargador obtiene el contacto utilizando el ID pasado como parámetro en la URL. Si no se encuentra el contacto, se devuelve un error 404. Si el contacto existe, se pasan los datos a la vista.

### Vista del Contacto
- **Vista (`<div id="contact">`)**: Esta es la página donde se muestra el detalle del contacto, incluyendo su avatar, nombre, cuenta de Twitter y notas. Si el contacto tiene un avatar, se muestra la imagen. También se muestra el nombre del contacto, si está disponible.

- **Botón de Favorito**: Un pequeño componente de React, **`Favorite`**, que permite marcar o desmarcar al contacto como favorito. Cuando el usuario hace clic en el botón, se actualiza el estado del favorito y se muestra un icono de estrella llena o vacía dependiendo de si el contacto es favorito o no.

- **Botones de Editar y Eliminar**:
- **Editar**: Un botón que redirige a la página de edición del contacto.
- **Eliminar**: Un botón que permite eliminar un contacto. El usuario tiene que confirmar antes de eliminar un contacto, de lo contrario la acción se cancela.

---

## Componente `Favorite`

Este es un componente pequeño pero importante que se utiliza para manejar la funcionalidad de marcar o desmarcar un contacto como favorito.

- **Estado de Favorito**: Este componente recibe un objeto `contact` y determina si el contacto es favorito o no (usando la propiedad `favorite`). Si es favorito, se muestra una estrella llena (★); si no lo es, se muestra una estrella vacía (☆).
- **Acción en el Botón**: Cuando el usuario hace clic en el botón de favorito, se cambia el estado de la propiedad `favorite` del contacto.


---

## RESUMEN

- El archivo **`contacts.$contactId:edit.tsx`** se encarga de permitir la edición de los contactos. Ofrece un formulario para cambiar los detalles del contacto y los guarda en la base de datos.
- El archivo **`contacts.$contactId.tsx`** es la página de detalles de un contacto, donde puedes ver la información del contacto, editarla o eliminarla. También tiene un botón para marcar el contacto como favorito.
- El **componente `Favorite`** es responsable de manejar el estado de favorito de un contacto, permitiendo que el usuario lo marque o desmarque.

En general, el flujo de la aplicación se basa en cargar la información del contacto desde una "base de datos", mostrarla en una página de detalles y permitir la edición o eliminación a través de formularios. También se incluye la funcionalidad para marcar los contactos como favoritos.

---

## Dependencias

- **`@remix-run/react`**: Framework para React que facilita el manejo de rutas y renderizado del lado del servidor.
- **`react`**: Librería de interfaz de usuario.
- **`tiny-invariant`**: Paquete para verificar la existencia de parámetros en las rutas.
- **`@remix-run/node`**: Herramientas de backend para Remix.
- **`react-router-dom`**: Manejo de rutas en la aplicación.





