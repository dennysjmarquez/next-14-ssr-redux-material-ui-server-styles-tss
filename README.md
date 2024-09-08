# Proyecto Next.js 14 con SSR, Redux, Material-UI y TSS-React

Este repositorio es una plantilla para construir aplicaciones con Next.js 14, utilizando Server-Side Rendering (SSR), Redux para el manejo del estado, Material-UI para los componentes de la interfaz de usuario y TSS-React para los estilos.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/)
- [Redux](https://redux.js.org/)
- [Material-UI](https://material-ui.com/)
- [TSS-React](https://github.com/atlassian-labs/tss-react)

## Características

- **Server-Side Rendering (SSR)**: Next.js permite renderizar las páginas en el servidor, lo que mejora el rendimiento y el SEO al entregar HTML completamente renderizado al cliente.
- **Redux**: El estado de la aplicación se maneja con Redux, y está configurado para almacenar y cargar información desde el servidor utilizando SSR de Next.js, proporcionando una carga inicial más rápida y una mejor experiencia de usuario.
- **Material-UI**: Utilizamos Material-UI para los componentes de la interfaz de usuario, proporcionando una apariencia moderna, consistente y altamente personalizable.
- **TSS-React**: TSS-React se utiliza para gestionar los estilos de los componentes. Esto asegura que los estilos se carguen desde el servidor, mejorando el rendimiento y eliminando problemas como los saltos de estilo (Flicker).


## Instalación

Para comenzar a utilizar esta plantilla, sigue estos pasos:

```sh
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
npm install
```

## Uso

Para iniciar el servidor de desarrollo, ejecuta:

```sh
npm run dev
```

Esto iniciará la aplicación en modo de desarrollo y estará disponible en `http://localhost:3000`.

## Beneficios del SSR y TSS-React

- **Mejor SEO**: El SSR permite que los motores de búsqueda indexen el contenido de manera más efectiva, ya que el HTML se genera en el servidor.
- **Rendimiento Mejorado**: La carga inicial es más rápida porque el HTML y los estilos se entregan desde el servidor.
- **Experiencia de Usuario Mejorada**: Al cargar los estilos desde el servidor, se eliminan los saltos de estilo, proporcionando una experiencia de usuario más fluida y consistente.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún problema o tienes alguna sugerencia, por favor abre un issue o envía un pull request.

---

Espero que esta versión mejorada te sea útil. Si necesitas más ayuda o tienes alguna otra pregunta, no dudes en decírmelo.
