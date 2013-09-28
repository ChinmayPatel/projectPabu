<?php

use Illuminate\Database\Migrations\Migration;

class CreateCardGrantedAccessTable extends Migration {

	/**
	 * add table for cards that has acces granted
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('card_granted_access', function($table)
        {
            $table->increments('id');
            $table->integer('sender_id');
            $table->integer('receiver_id');
            $table->integer('card_id');
            $table->integer('amount_grabted');
            $table->integer('expires_in');
            $table->timestamps();    
        });
	}

	/**
	 * drop table for cards that has acces granted
	 *
	 * @return void
	 */
	public function down()
	{
        Schema::dropIfExists('card_granted_access');
	}

}