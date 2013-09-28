<?php

class UserCardsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$user = Auth::user();
		$record = UserCards::get_user_cards( $user->id );
		$this->response = new AppResponse();
		$this->response->data = $record->toArray();
		return $this->response->json_ok();
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$input = Input::all();
		$api_response =  Input::get('response');
		$user = Auth::user() ;
		$card_name = Input::get('name') ;
		$mastercard_key = $api_response['id'] ;
		$new_card = new UserCards();
		$new_card->user_id = $user->id ;
		$new_card->card_name = $card_name ;
		$new_card->card_token = $mastercard_key ;
		$new_card->save();

		$this->response = new AppResponse();
		return $this->response->json_ok();
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}