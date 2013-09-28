<?php

class UserCards extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'user_cards';


	public static function get_user_cards( $user_id )
	{
		return  UserCards::where('user_id' ,'=' , 15 )->get();
	}
}