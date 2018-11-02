<?php
namespace App\Http\Controllers\Front\Register;
use Illuminate\Http\Request;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\AuthController;
use Validator;
use App\User;

class RegisterController extends FrontController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    
    private $user;
    
    public function __construct()
    {
        $this->user = new User();
    }

    public function postCreate(Request $request) {
      
        $data = $request->all();
        
        try {
           $validator = Validator::make($data, $this->rules(), $this->messages());
           
            if ($validator->fails()) {
                $response = response()->json(['message' => 'validationFail', 'data'=> $validator->messages(), 'status' => 422], 200);
            } else {  
                $this->user->postCreate($data);
                unset($data['account_type']);
                $authUser = AuthController::login($data);
                $response = response()->json(['message' => 'success', 'data' => $authUser, 'status' => 200], 200);
            } 
        }
        catch(Exception $e) {
            $response = response()->json(['message' => 'fail', 'status' => $e->getCode()], $e->getCode());
        }
        return $response;
    }
    
    private function rules() {
        return [
            'first_name' => 'required',
            'last_name' => 'required',
            'email'      => 'required|unique:users|email',
            'password'   => 'required|min:8',
            'password2'  => 'required|same:password',
        ];
    }
    
    private function messages() {
        return [
            'first_name.required' => 'obavezno polje',
            'last_name.required'  => 'obavezno polje',
            'email.required'      => 'obavezno polje',
            'email.unique'        => 'email postoji u sistemu',
            'password.required'   => 'obavezno polje',
            'email'               => 'unesite ispravnu email adresu',
            'password.min'        => 'šifra mora biti najmanje 8 karaktera',
            'password2.required'  => 'ponovite šifru',
            'password2.same'      => 'šifre se ne slažu'
        ];
    }
}