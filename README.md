# Comunidad El Carmen

Sitio web informativo para la Comunidad El Carmen, ubicada en Rio Segundo de Alajuela. El proyecto fue desarrollado con fines academicos y presenta una experiencia web para comunicar noticias, actividades, voluntariado, talleres, reciclaje, emprendimientos locales e informacion de contacto.

## Tecnologias

- .NET 9
- Blazor Web App
- Razor Components
- HTML, CSS y JavaScript
- Font Awesome para iconografia

## Funcionalidades

- Pagina principal con hero visual de la comunidad.
- Seccion de avisos y noticias recientes.
- Calendario y tarjetas de eventos.
- Informacion de voluntariado y talleres.
- Seccion de reciclaje y recomendaciones ambientales.
- Espacio para emprendimientos locales.
- Informacion sobre la comunidad.
- Formulario de contacto con seleccion automatica de asunto desde otras secciones.
- Diseno responsive para escritorio, tablet y movil.

## Estructura principal

```text
Comunidaddelcarmen/
+-- Components/
|   +-- Pages/
|   +-- Shared/
|   +-- Layout/
+-- wwwroot/
|   +-- css/
|   +-- images/
|   +-- js/
+-- Program.cs
+-- Comunidaddelcarmen.csproj
```

## Requisitos

- .NET SDK 9.0 o superior
- Git

## Como ejecutar el proyecto

Desde la raiz del repositorio:

```bash
dotnet restore
dotnet build
dotnet run --project Comunidaddelcarmen/Comunidaddelcarmen.csproj
```

Tambien se puede ejecutar desde la carpeta del proyecto:

```bash
cd Comunidaddelcarmen
dotnet run
```

Segun el perfil local de desarrollo, la aplicacion puede abrirse en:

```text
http://localhost:5047
https://localhost:7204
```

## Paleta visual

El diseno utiliza una paleta inspirada en la identidad visual del sitio:

- Delft Blue: `#1D2A62`
- Carolina Blue: `#87AECE`
- Beige: `#F5F3D8`
- Pistachio: `#AFD06E`
- Fern Green: `#437118`

## Repositorio

Repositorio en GitHub:

```text
https://github.com/ShanneykhaEspinoza/Shanneg
```
