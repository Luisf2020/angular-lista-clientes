# angular-lista-clientes

![stack: Angular 18](https://img.shields.io/badge/stack--Angular%2018-0d9488?style=flat-square) ![stack: TypeScript](https://img.shields.io/badge/stack--TypeScript-0d9488?style=flat-square) ![stack: RxJS](https://img.shields.io/badge/stack--RxJS-0d9488?style=flat-square) ![stack: Signals](https://img.shields.io/badge/stack--Signals-0d9488?style=flat-square) [![Demo](https://img.shields.io/badge/demo-en%20vivo-22c55e?style=flat-square)](https://luisf2020.github.io/angular-lista-clientes/)
![IA: asistido](https://img.shields.io/badge/IA--asistido-6366f1?style=flat-square)

Lista de clientes en Angular 18 con servicio inyectable, signals y componente standalone.

> **Transparencia sobre IA:** este proyecto se desarrollo con asistencia de inteligencia artificial (generacion de codigo, revision y documentacion). El codigo fue leido, ejecutado y probado manualmente antes de publicarse. No declara clientes, metricas ni resultados que no puedan verificarse.

## Problema que resuelve

Compartir el estado de clientes entre componentes sin pasar datos por multiples niveles (@Input/@Output).

## Solucion implementada

Servicio inyectable con signals y componente standalone con deteccion OnPush; la lista se actualiza de forma inmutable.

### Funcionalidades principales

- Servicio con estado y API asReadonly
- Componente standalone (sin NgModule)
- ChangeDetectionStrategy.OnPush
- Modelo tipado con interfaces

## Stack

- Angular 18
- TypeScript
- RxJS
- Signals

## Estructura

```
src/app/clientes.component.ts  # componente standalone
src/app/clientes.service.ts    # estado con signals
src/app/cliente.model.ts
```

## Puesta en marcha

```bash
npm install
npm start
```

## Complejidad del proyecto

**Nivel: Intermedio** — Separacion componente/servicio, reactividad con signals y deteccion de cambios optimizada.

El nivel describe la complejidad tecnica del proyecto, no el grado de dominio de quien lo escribio.

## Despliegue

Demo en vivo: <https://luisf2020.github.io/angular-lista-clientes/>  
Publicado con GitHub Pages (rama `gh-pages`).

## Autor

**Luis Felipe Zuniga Leon** — Desarrollador de software asistido por IA

- GitHub: <https://github.com/Luisf2020>
- Correo: developerluis2@gmail.com
- WhatsApp: +504 3237 0056

---

_Proyecto de portafolio. El desarrollo se apoyo en herramientas de IA bajo revision tecnica humana._
