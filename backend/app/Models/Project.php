<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'customerId',
        'projectName',
        'region',
        'city',
        'district',
        'maintenanceType',
        'elevatorType',
        'stops',
        'elevatorDistance',
        'cost',
        'startDate',
        'visitCount',
        'endDate',
        'buildingType',
        'doorOpeningSize',
        'doorOpeningDirection',
        'entrances',
        'elevatorRoom',
        'machineType',
        'machineSpeed',
        'machineLoad',
        'notes',
    ];
}
