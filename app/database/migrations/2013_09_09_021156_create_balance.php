<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBalance extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('grant', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('receiver_authentication_id');
			$table->integer('sender_authentication_id');
			$table->decimal('allocated_grant', 32, 2);
			$table->decimal('current_allocated_grant_total', 32, 2);
			$table->date('allocated_grant_expiration');
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
		Schema::drop('grant');
	}

}
