<?php

class TransactionTableSeeder extends Seeder {

    public function run()
    {
        DB::table('users_transactions')->delete();
        UserTransaction::create(array('user_id' => 7 , 'card_id' => 1 , 'spender_id' => 2 , 'spender_name' => "chinmay Patel" , "marchant_name" => 'Insomniac' , "amount" => 200 , "notes" => "For meeting with John and Chris from MasterCard" ));
        UserTransaction::create(array('user_id' => 7 , 'card_id' => 2 , 'spender_id' => 2 , 'spender_name' => "chinmay Patel" , "marchant_name" => 'All Star Wings' , "amount" => 259.9 , "notes" => "For meeting with Jonathan and Jenna from RBC" ));
        UserTransaction::create(array('user_id' => 7 , 'card_id' => 3 , 'spender_id' => 2 , 'spender_name' => "chinmay Patel" , "marchant_name" => 'McDonalnd' , "amount" => 50 , "notes" => "For meeting with Derek and David from Kinetic Cafe" ));
        UserTransaction::create(array('user_id' => 7 , 'card_id' => 1 , 'spender_id' => 2 , 'spender_name' => "chinmay Patel" , "marchant_name" => 'Fine Dining' , "amount" => 150 , "notes" => "For meeting with represtatives from Microsoft" ));
        UserTransaction::create(array('user_id' => 7 , 'card_id' => 3 , 'spender_id' => 7 , 'spender_name' => "Gamal Tawaf" , "marchant_name" => 'Paramount' , "amount" => 69.99 , "notes" => "For meeting with foreign representatives from UAE" ));
        UserTransaction::create(array('user_id' => 7 , 'card_id' => 2 , 'spender_id' => 2 , 'spender_name' => "chinmay Patel" , "marchant_name" => 'CN Tower' , "amount" => 300 , "notes" => "For meeting with foreign representatives from UAE" ));
        UserTransaction::create(array('user_id' => 7 , 'card_id' => 1 , 'spender_id' => 2 , 'spender_name' => "chinmay Patel" , "marchant_name" => 'Toronto Island' , "amount" => 259.90 , "notes" => "For meeting with foreign representatives from UAE" ));
        UserTransaction::create(array('user_id' => 7 , 'card_id' => 2 , 'spender_id' => 3 , 'spender_name' => "Zad Kiel" , "marchant_name" => 'Casa Loma' , "amount" => 100 , "notes" => "For meeting with foreign representatives from UAE" ));
        UserTransaction::create(array('user_id' => 3 , 'card_id' => 3 , 'spender_id' => 3 , 'spender_name' => "Zad Kiel" , "marchant_name" => 'LinkedIn Api' , "amount" => 40 ));
        UserTransaction::create(array('user_id' => 3 , 'card_id' => 3 , 'spender_id' => 3 , 'spender_name' => "Zad Kiel" , "marchant_name" => 'Stripe Api' , "amount" => 20  ));
        UserTransaction::create(array('user_id' => 3 , 'card_id' => 2 , 'spender_id' => 2 , 'spender_name' => "chinmay Patel" , "marchant_name" => 'Cineplex' , "amount" => 100 , "notes" => "The Expendables 2 was great" ));
        UserTransaction::create(array('user_id' => 3 , 'card_id' => 3 , 'spender_id' => 6 , 'spender_name' => "Shawn Rasbottom" , "marchant_name" => 'Insomniac' , "amount" => 200 , "notes" => "We loved the linguini" ));
        UserTransaction::create(array('user_id' => 3 , 'card_id' => 1 , 'spender_id' => 3 , 'spender_name' => "Zad Kiel" , "marchant_name" => 'Toronto Ferry' , "amount" => 70 , "notes" => "For meeting with foreign representatives from UAE" ));
        UserTransaction::create(array('user_id' => 3 , 'card_id' => 1 , 'spender_id' => 4 , 'spender_name' => "Jason Yang" , "marchant_name" => 'Car Rentals' , "amount" => 89.7 , "notes" => "Less tiring than walking :P" ));
        UserTransaction::create(array('user_id' => 2 , 'card_id' => 1 , 'spender_id' => 2 , 'spender_name' => "chinmay Patel" , "marchant_name" => 'Shell Gas Station' , "amount" => 30.0 , "notes" => "Hope My grades were this high :P" ));
    }

}