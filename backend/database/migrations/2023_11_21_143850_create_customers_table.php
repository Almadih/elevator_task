<?php

// database/migrations/xxxx_xx_xx_create_companies_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('companyName')->nullable();
            $table->string('representative')->nullable();
            $table->string('commercialRegistrationNumber')->nullable();
            $table->string('taxNumber')->nullable();
            $table->string('idNumber');
            $table->string('alternateMobile')->nullable();
            $table->string('whatsapp')->nullable();
            $table->string('mobile');
            $table->string('firstName')->nullable();
            $table->string('secondName')->nullable();
            $table->string('thirdName')->nullable();
            $table->string('fourthName')->nullable();
            $table->string('agencyName')->nullable();
            $table->string('customerType');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
