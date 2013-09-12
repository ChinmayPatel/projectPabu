<?php

class AuthenticationController extends \BaseController {

	protected $resource = "Auth";
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */

	protected $response = NULL;
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */



	/**
	 * Constructor to initialize the response.
	*/
	public function __construct()
	{
		$this->response = new AppResponse();
		$this->response->resource = $this->resource;
	}

	public function index()
	{

		Auth::logout();
		return Response::json([
			'flash' => 'you have been disconnected'],
			200
		);
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

		$credentials = array(
			'email' => Input::get('email'),
			'password' => Input::get('password')
		);
		// dd( $credentials );

		if ( Auth::attempt( $credentials ) ) 
		{
			return $this->response->json_ok();
		}else
		{
			return $this->response->json_401();
		}
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