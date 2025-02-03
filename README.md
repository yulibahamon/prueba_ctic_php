
# Sistema de Citas Médicas Universitario.

## Descripción
Sistema web para gestionar citas médicas de estudiantes, con categorías general, odontológica y psicológica.

## Tecnologías
- Backend: Laravel 11
- Frontend: Angular 16
- Base de Datos: MySQL

## Requisitos Previos
- PHP 8.1+
- Composer
- Node.js 18+
- Angular CLI
- MySQL

## Instalación

### Base de Datos
1. Crear base de datos
2. Ejecutar scripts SQL del archivo `scripsDB/`

### Backend (Laravel)
```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```

### Frontend (Angular)
```bash
npm install
ng serve
```

## Endpoints API
- `POST /api/citas`: Registrar cita
- `GET /api/citas/estudiante/{id}`: Consultar citas
- `DELETE /api/citas/{id}`: Cancelar cita

