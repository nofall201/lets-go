<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('schedules', function (Blueprint $table) {
            $table->foreign(['bus_id'])->references(['id'])->on('buses')->onUpdate('restrict')->onDelete('cascade');
            $table->foreign(['stop_id'])->references(['id'])->on('stops')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('schedules', function (Blueprint $table) {
            $table->dropForeign('schedules_bus_id_foreign');
            $table->dropForeign('schedules_stop_id_foreign');
        });
    }
};
