<?php

namespace App\Http\Requests\User;
use Illuminate\Foundation\Http\FormRequest;

class createUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required',
            'first_name' => 'required',
            'email'      => 'required|unique:users|',
            'password'   => 'required',
            'password2'  => 'required|same:password',

        ];
    }
    
    public function messages()
{
        return [
            'first_name.required' => 'unesite Ime',
            'last_name.required'  => 'unestite Prezime',
            'email.required'      => 'unesite Email',
            'password.required'   => 'unesite Šifru',
            'password2.required'  => 'ponovite šifru',
            'password2.same'      => 'šifre se ne slažu'
        ];
    }
}