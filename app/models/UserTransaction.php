<?php

class UserTransaction extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users_transactions';

	public static function get_user_with_card_info()
	{
		return DB::table('users_transactions')
        ->join('user_cards', 'users_transactions.card_id', '=', 'user_cards.id')
       	->get();
	}
}