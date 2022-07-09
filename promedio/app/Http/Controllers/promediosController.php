<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Promedio;

class promediosController extends Controller
{
    public function fetchAvg(){

        $avg = Promedio::select
        ('id','nombre', 'parcial_uno', 'parcial_dos', 'parcial_tres', 'promedio')
        ->get();

        return response ()->json([
            'code' => 200,
            'status' => 'success',
            'promedios' => $avg
        ],200);
    }

    public function avgRegister(Request $request){
        $jsonData = $request->input('json', null);
        $paramsArray = json_decode($jsonData, true);

        $paramsArray = array_map('trim', $paramsArray);

        if(!empty($paramsArray)){

            	$validateData = \Validator::make($paramsArray,[
                    'nombre' => ['required', 'alpha'],
                    'parcial_uno' => ['required', 'numeric', 'between:1,5'],
                    'parcial_dos' => ['required', 'numeric', 'between:1,5'],
                    'parcial_tres' => ['required', 'numeric', 'between:1,5']
                ]);

                if($validateData->fails()){

                    $data = array(
                        'status' => 'Error',
                        'code' => 400,
                        'message' => 'No ha sido posible calcular el promedio, por favor intentelo de nuevo',
                        'errors' => $validateData -> errors()
                    );

                    return response()->json($data, $data['code']);

                }else{
                    
                    $promedio = ($paramsArray['parcial_uno'] + $paramsArray['parcial_dos'] + $paramsArray['parcial_tres'])/3;

                    $avg = new Promedio();
                    $avg->nombre = $paramsArray['nombre'];
                    $avg->parcial_uno = $paramsArray['parcial_uno'];
                    $avg->parcial_dos = $paramsArray['parcial_dos'];
                    $avg->parcial_tres = $paramsArray['parcial_tres'];
                    $avg->promedio = round($promedio,1);

                    $avg->save();

                    $data = array(
                        'status' => 'success',
                        'code' => 200,
                        'message' => 'El usuario se ha creado correctamente',
                        'promedio' => $avg
                    );

                    return response()->json($data, $data['code']);

                }

        }else{
            $data = array(
                'status' => 'error',
                'code' => 400,
                'message' => 'Los datos enviados no son correctos'
            );

            return response()->json($data, $data['code']);
        }
    }

    public function avgDelete(Request $request, $id){

        $avg = Promedio::where('id',$id);
        $avg->delete();
        $data = array(
            'code' => 200,
            'status' => 'Success',
            'message' => 'Usuario eliminado de manera exitosa'
        );


        return response()->json($data, $data['code']);
    }
}
