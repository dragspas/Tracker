<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id'             => 1,
            'first_name'     => 'Vladimir',
            'last_name'      => 'Stus',
            'email'          => '1@1.rs',
            'password'       => bcrypt('1'),
        ]);
    }
}
