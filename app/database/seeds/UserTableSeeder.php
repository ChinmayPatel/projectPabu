<?php

class UserTableSeeder extends Seeder {

    public function run()
    {
        DB::table('users')->delete();
        User::create(array('email' => 'admin@admin.com', 'password' => Hash::make('admin') ));
        User::create(array('email' => 'chinmay@chinmay.ca', 'password' => Hash::make('admin') ));
        User::create(array('email' => 'zadkiel.m@gmail.com', 'password' => Hash::make('admin') ));
        User::create(array('email' => 'jason-yang@live.ca', 'password' => Hash::make('admin') ));
        User::create(array('email' => 'ron@ron.ca', 'password' => Hash::make('admin') ));
        User::create(array('email' => 'shawn@shawn.ca', 'password' => Hash::make('admin') ));
        User::create(array('email' => 'admin@admin.com', 'password' => Hash::make('admin') ));
    }

}