<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserAuthentication extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('user_account_information', function(Blueprint $table)
		{
			$table->increments('id');
			$table->timestamps();
			$table->string('user_name', 32)->unique();
			$table->string('password', 128);
			$table->decimal('account_balance', 32, 2);
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('user_account_information');
	}

}
