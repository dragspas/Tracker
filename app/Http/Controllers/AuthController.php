<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
       // $this->middleware('auth:api', ['except' => ['login']]);
    }

    public static function login($userData = null) {
        try {

            $credentials = $userData ? $userData : request()->all();

            if (! $token = auth()->attempt($credentials)) {
                $response = response()->json(['message' => 'unauthorized', 'status' => 401], 401);
            } else {
                $data = ['user' => auth()->user(), 'token' => $token];
                $response = response()->json(['message' => 'authorized', 'data' => $data, 'status' => 200], 200);
            }
        }
        catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {  

	    	$response = response()->json(['message' => 'token_expired', 'status' => $e->getStatusCode()],        $e->getStatusCode());

        } 
        catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

		    $responsse = response()->json(['message'=>'token_invalid', 'status' => $e->getStatusCode()], $e->getStatusCode());

	    } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

		    $response = response()->json(['message'=>'token_absent', 'status' => $e->getStatusCode()],          $e->getStatusCode());

	    }

        return $response;
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function authenticatedUser() {   
        try {
            $data = auth()->user();
            $response = response()->json(['message' => 'valid_user', 'data' => $data, 'status' => 200], 200);
        } catch(\Exception $e) {
            $response = response()->json(['message' => 'invalid_user', 'data' => NULL , 'status' => 400], 400);
        }
        return $response;
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        try {
            auth()->logout();
            $response = response()->json(['message' => 'Successfully logged out', 'status' => 200], 200);

       } catch(\Exception $e) {
      
           $response = response()->json(['message' => $e->getMessage(), 'status' => 400], 400);
       }
        return $response;
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        try {
            $data = $this->respondWithToken(auth()->refresh());
            $response = response()->json(['message' => 'refreshed_token', 'data' => $data, 'status' => 200], 200);

        } catch(\Exception $e) {

           $response = response()->json(['message' => 'unable_to_refresh_token', 'status' => 400], 400);
        }
        return $response;
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token) {
        
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}