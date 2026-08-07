# Comunidad El Carmen

Esta carpeta contiene la aplicacion principal del sitio web Comunidad El Carmen. Es una Blazor Web App construida con .NET 9 para presentar informacion comunitaria de Rio Segundo, Alajuela.

## Contenido de la aplicacion

- Inicio con imagen principal y llamados a la accion.
- Noticias y avisos recientes.
- Eventos, calendario y actividades.
- Voluntariado, talleres y reciclaje.
- Emprendimientos locales.
- Seccion "Nosotros".
- Formulario de contacto.

## Ejecutar desde esta carpeta

```bash
dotnet restore
dotnet build
dotnet run
```

URL local configurada:

```text
http://localhost:5047
https://localhost:7204
```

## Archivos importantes

```text
Components/Pages/Home.razor       Pagina principal
Components/Shared/                Secciones reutilizables del sitio
Components/Layout/                Layout y navegacion
wwwroot/css/app.css               Estilos globales
wwwroot/js/site.js                Interacciones del sitio
wwwroot/images/                   Imagenes publicas
Program.cs                        Configuracion inicial de la app
Comunidaddelcarmen.csproj         Proyecto .NET
```
