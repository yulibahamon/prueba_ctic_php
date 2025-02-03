<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cita;
use App\Models\Estudiante;
use App\Models\Medico;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class CitaController extends Controller
{
    public function registrarCita(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'estudiante_id' => 'required|exists:estudiante,id',
            'medico_id' => 'required|exists:medico,id',
            'fecha' => 'required|date|after:today',
            'hora' => 'required|date_format:H:i',
        ]);

        if ($validator->fails()) {
            return response()->json(['errores' => $validator->errors()], 400);
        }

        $cita = Cita::create([
            'estudiante_id' => $request->estudiante_id,
            'medico_id' => $request->medico_id,
            'fecha' => $request->fecha,
            'hora' => $request->hora,
            'estado' => 'agendada'
        ]);

        return response()->json($cita, 201);
    }

    public function consultarCitas($estudianteId)
    {
        $citas = Cita::where('estudiante_id', $estudianteId)
            ->with(['medico'])
            ->get();
        return response()->json($citas);
    }

    public function cancelarCita($citaId)
    {
        $cita = Cita::findOrFail($citaId);
        $cita->estado = 'cancelada';
        $cita->save();

        return response()->json(['mensaje' => 'Cita cancelada exitosamente']);
    }
}
