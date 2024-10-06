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
        Schema::table('route_stop', function (Blueprint $table) {
            $table->foreign(['route_id'])->references(['id'])->on('routes')->onUpdate('restrict')->onDelete('cascade');
            $table->foreign(['stop_id'])->references(['id'])->on('stops')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('route_stop', function (Blueprint $table) {
            $table->dropForeign('route_stop_route_id_foreign');
            $table->dropForeign('route_stop_stop_id_foreign');
        });
    }
};
