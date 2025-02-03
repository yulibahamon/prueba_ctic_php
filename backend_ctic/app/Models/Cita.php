<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    protected $table = 'cita';
    use HasFactory;

    protected $fillable = [
        'estudiante_id',
        'medico_id',
        'fecha',
        'hora',
        'estado',
    ];

    public function estudiante()
    {
        return $this->belongsTo(Estudiante::class);
    }

    public function medico()
    {
        return $this->belongsTo(Medico::class);
    }
}
