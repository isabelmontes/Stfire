# StfireA

En este sprint se integraron las tecnologias que llevabamos trabajando, especificamente con la API en .net conectada al proyecto, para despues hacer un contenedor en docker.En este sprint se trabaja con la integración de una API y la normalización de una base de datos y finalizar con el uso de la herramienta kubernetes

*Nombre del proyecto*: StFire
*Nombre de desarrolladora:* Isabel F. Montes
*Usuaria en Discor*: isa_montes2507

---

## Descripción
En el sprint 6 se trabajan con tecnologias como mysql, manejon del framework angular v.12 para la renderización y lógica del proyecto con dependencias y librerias para poder hacer uso de docker y kubernetes en la imagen creada, asi como el uso de un servidor local y uno de SQL para conectar la base de datos a la API creada con .NET, programada en lenguaje C#, usando el MVC para manejar la información de las peticiones del sitio, comprobando dichas direcciones por medio de la interfaz de swagger y el navegador. 


## Requerimientos tecnicos

-Angular v.12-2-0
-NodeJS v. 14.17.6
-VS Code
-My SQL Serve(instalación)
-SSMS
-Docker v.4.0.18

## Instalación

1. Clonar repositorio de git
2. Establecer una carpeta 
3. Creación del proyecto
5. Instalación de MySQL Serve 2022 y SSMS 2022
6. Importar BD anexa(STFireDBComplete).
7. Descargar archivos adjuntos de la imagen, BD y API anexa en el proyecto. 
8. Instalacion de API,con creacion de proyecto VS  Code. 
9. Correr API en terminal del protecto."do net run"

## Dependecias

1. HTTP client para angular(import { HttpClient } from '@angular/common/http';)
2. DockerFile v.24.0.1(FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build)
3. Paquetes necesarios para correr la API con local host: 
Package Pomelo.EntityFrameworkCore.MySql
Package Microsoft.EntityFrameworkCore.Design
(install en api antes de comenzar)

Paquetes de instalacion para api en proyecto:
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet tool update -g dotnet-aspnet-codegenerator


## Capturas

![ST1](./capturas/imagenes/capturas/imagenes/1SP6.jpg)
Estos son los archivos anexos para poder instalar y descargar la bd y la api para su instalación. 

![ST2](./capturas/imagenes/capturas/imagenes/2SP6.jpg)
La base de datos normalizada con sus correciones quedo así.

![ST3](./capturas/imagenes/capturas/imagenes/3SP6.jpg)
Una vez descargada e instalada la API se debe ver de la siguiente manera. 

![ST4](./capturas/imagenes/capturas/imagenes/4SP6.jpg)
Para verificar que las rutas que tenemos determinadas por metodos en la API se puede ver en la interfaz de swagger en el navegador.

![ST5](./capturas/imagenes/capturas/imagenes/7SP6.jpg)
Imagen creada en Docker, que se ejecuta por medio de la Docker desktop o por medio de la terminal en la api
![ST5](./capturas/imagenes/capturas/imagenes/8SP6.jpg)
![ST5](./capturas/imagenes/capturas/imagenes/9SP6.jpg)

![ST5](./capturas/imagenes/capturas/imagenes/5SP6.jpg)
El sitio debe mostrarse como se había estado trabajando antes y renderiza este templante

![ST5](./capturas/imagenes/capturas/imagenes/6SP6.jpg)
Login view


## Proceso

Tuve que repasar los videos para poder configurar los entornos y corregir versiones anteriores del proyecto para que se pudieran conectar y que funciora de manera correcta la API y el proyecto que despues generaron la imagen y contenedor en docker para despues poder crear los archicos de configuración para Kubernetes. 

## Problemas conocidos

- Integracíon de diversas tecnologias
- Problemas para poder cargar la información en la API/Proyecto de angular que si llegaba a consola pero al template no
- Mejora de entedimiento de servidores y uso de imagenes de Docker e implementación de funcionamiento de archivos .yaml.  
- Relación de API y virtualizcación para contenedores 

# Mejoras presentadas futuras
-Añadir más procedimientos de interacción con el hub de entretenimiento
-Mejoras en la aplicación de tecnologias de revision en produccion como Docker y Kubernetes

## Retrospectiva del Proyecto

| ¿Qué salió bien? | ¿Qué puedo hacer diferente? | ¿Qué no salió bien? |
|------------------|-----------------------------|---------------------|
| Salio bien la instalación de programas y retomar todos los puntos vistos a lo largo del curso para poder intergrarlo en uno solo | Tener mayor expertis y cuidado para que al implementar todos los proyectos juntos los archivos de confuguración tengann el rendimeinto optimo| Implementar y conectar funciones y servicios tanto Docker y mejor implemntación de Kubernetes   
|                  |                             |                     |







