<?php

class CardAccessController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
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
		$user = Auth::user();
		$card = Input::get('credit_id');
		$reciver = Input::get('receiver_email');
		$amount = Input::get('amount');
		$period = Input::get('period');
		$grant_access = New CardGrantedAccess();
		$grant_access->sender_id = $user->id ;
		$grant_access->receiver_id = $reciver['id']  ;
		$grant_access->card_id = $card;
		$grant_access->amount_granted = $amount ; 
		$grant_access->expires_in = $period ;
		$grant_access->save();

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