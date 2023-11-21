<?php

// database/migrations/xxxx_xx_xx_create_projects_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('customerId');
            $table->string('projectName');
            $table->string('region');
            $table->string('city');
            $table->string('district')->nullable();
            $table->string('maintenanceType');
            $table->string('elevatorType');
            $table->string('stops');
            $table->string('elevatorDistance')->nullable();
            $table->string('cost')->nullable();
            $table->date('startDate')->nullable();
            $table->integer('visitCount')->nullable();
            $table->date('endDate')->nullable();
            $table->string('buildingType')->nullable();
            $table->string('doorOpeningSize');
            $table->string('doorOpeningDirection');
            $table->string('entrances');
            $table->string('elevatorRoom');
            $table->string('machineType');
            $table->string('machineSpeed');
            $table->integer('machineLoad');
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
