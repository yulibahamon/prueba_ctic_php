<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{   
    protected $table = 'estudiante';
    use HasFactory;

    protected $fillable = [
        'nombre',
        'correo',
        'programa_academico',
    ];

    public function cita()
    {
        return $this->hasMany(Cita::class);
    }
}
