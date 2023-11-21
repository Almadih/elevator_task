<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Customer;
use App\Models\Project;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/projects/create',[ProjectController::class,'create']);


Route::get('/projects', function () {
    return Project::get();
});

Route::get('/customers',function(){
    return Customer::with('project')->get();
});
