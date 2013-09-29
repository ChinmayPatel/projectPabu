<?php

use Illuminate\Database\Migrations\Migration;

class CreateUsersTransactionTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{        
		Schema::create('users_transactions', function($table)
        {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('card_id');
            $table->integer('spender_id');
            $table->string('spender_name', 128);
            $table->string('marchant_name', 64);
            $table->float('amount');
            $table->string('notes' , 300 );
            $table->binary('reciept_photo');
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
        Schema::dropIfExists('users_transactions');
	}

}