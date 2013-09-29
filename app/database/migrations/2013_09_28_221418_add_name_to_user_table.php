<?php

use Illuminate\Database\Migrations\Migration;

class AddNameToUserTable extends Migration {

	/**
	 * add user name column to table 
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('users', function($table)
		{
		    $table->string('user_name' , 60);
		});
	}

	/**
	 * remove user name column to table 
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('users', function($table)
		{
		    $table->dropColumn('user_name');
		});
	}

}