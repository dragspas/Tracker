<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('locations', function (Blueprint $table) {
            $table->increments('id');
            $table->string('longitude');
            $table->string('latitude');
            $table->integer('country_id')->unsigned()->references('id')->on('countries')->onDelete('restrict');
            $table->integer('region_id')->unsigned()->references('id')->on('regions')->onDelete('restrict');
            $table->integer('district_id')->unsigned()->references('id')->on('districts')->onDelete('restrict');
            $table->integer('city_id')->unsigned()->references('id')->on('cities')->onDelete('restrict');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('locations');
    }
}
