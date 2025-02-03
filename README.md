
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
1. Cambia el nombre del archivo .env.example a
```bash
  .env
   ```
2. Edita el archivo .env en la seccion
```bash
    DB_CONNECTION=sqlite
  # DB_HOST=127.0.0.1
  # DB_PORT=3306
  # DB_DATABASE=laravel
  # DB_USERNAME=root
  # DB_PASSWORD=
   ```
  Modificalo con tus datos, ejemplo:
```bash
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=sistema_citas
    DB_USERNAME=root
    DB_PASSWORD=
   ```
4. Corre los siguientes comando
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

