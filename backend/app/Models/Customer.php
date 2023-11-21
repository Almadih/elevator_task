<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $fillable = [
        'companyName',
        'representative',
        'commercialRegistrationNumber',
        'taxNumber',
        'idNumber',
        'alternateMobile',
        'whatsapp',
        'mobile',
        'firstName',
        'secondName',
        'thirdName',
        'fourthName',
        'agencyName',
        'customerType'
    ];

    /**
     * Get the project associated with the Customer
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function project()
    {
        return $this->hasOne(Project::class, 'customerId', 'id');
    }
}
