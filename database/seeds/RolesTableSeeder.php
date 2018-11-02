<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'id'       => 1,
            'name'         => 'regular_user',
            'display_name' => 'regular user',
            'description'  => 'regular user',
        ]);
    }
}
