<?php

use Illuminate\Database\Migrations\Migration;

class CreateUserCardsTable extends Migration {

	/**
	 * add user cards table
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('user_cards', function($table)
        {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('card_name', 50 );
            $table->string('card_token', 300 );
            $table->timestamps();    
        });
	}

	/**
	 * drop user cards table
	 *
	 * @return void
	 */
	public function down()
	{
        Schema::dropIfExists('user_cards');
	}

}