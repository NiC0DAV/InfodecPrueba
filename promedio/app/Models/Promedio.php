<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Promedio extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'parcial_uno',
        'parcial_dos',
        'parcial_tres,',
        'promedio'
    ];
}
