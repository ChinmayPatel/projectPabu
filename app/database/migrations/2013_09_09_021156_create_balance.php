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
			$table->timestamps();
			$table->foreign('receiver_authentication_id')->references('id')->on('user_account_information');
			$table->foreign('sender_authentication_id')->references('id')->on('user_account_information');
			$table->decimal('allocated_grant', 32, 2);
			$table->decimal('current_allocated_grant_total', 32, 2);
			$table->date('allocated_grant_expiration');
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
