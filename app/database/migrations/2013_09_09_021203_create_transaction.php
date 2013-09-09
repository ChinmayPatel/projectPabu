<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransaction extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('transaction', function(Blueprint $table)
		{
			$table->increments('id');
			$table->timestamps();
			$table->foreign('allocated_grant_id')->references('id')->on('grant');
			$table->string('merchant', 32);
			$table->date('transaction_date');
			$table->decimal('amount', 32, 2);
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('transaction');
	}

}
