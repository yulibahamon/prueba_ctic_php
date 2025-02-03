<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CitaController;

Route::prefix('citas')->group(function () {
    Route::post('/', [CitaController::class, 'registrarCita']);
    Route::get('/estudiante/{estudianteId}', [CitaController::class, 'consultarCitas']);
    Route::put('/{citaId}/cancelar', [CitaController::class, 'cancelarCita']);
});