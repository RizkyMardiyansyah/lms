<?php

namespace App\Http\Controllers\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Role;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use Exception;
use Illuminate\Support\Facades\Session;
use App\User;

class SocialiteController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function redirectToGoogle()
    {
        // Menyimpan URL sebelumnya ke dalam session
        Session::put('previous_url', url()->previous(1));

        // Melakukan redirect ke Google
        return Socialite::driver('google')->redirect();
    }

    /**
     * Create a new controller instance.
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function handleGoogleCallback()
    {
        try {
            $account = Socialite::driver('google')->user();

            $user = User::where('google_id', $account->id)
                ->orWhere('email', $account->email)
                ->first();

            if (empty($user)) {
                $user = User::create([
                    'full_name' => $account->name,
                    'email' => $account->email,
                    'google_id' => $account->id,
                    'role_id' => Role::getUserRoleId(),
                    'role_name' => Role::$user,
                    'status' => User::$active,
                    'verified' => true,
                    'created_at' => time(),
                    'timezone' => 'Asia/Jakarta',
                    'password' => null
                ]);
            }

            $user->update([
                'google_id' => $account->id,
            ]);

            Auth::login($user);


            // Mendapatkan URL sebelumnya dari session
            $previousUrl = Session::get('previous_url', url('/'));

          
           // Mengambil query string dari URL sebelumnya
            $queryString = parse_url($previousUrl, PHP_URL_QUERY);

            // Parsing query string dan mendapatkan nilai dari "redirect"
            parse_str($queryString, $queryParams);
            $redirectValue = isset($queryParams['redirect']) ? $queryParams['redirect'] : null;

            $referer = $redirectValue ?? $previousUrl;
        
           $home = url('/');
           if (!empty($referer)) {
               if ($referer === $home) {
                   return redirect('/panel');
               } else {
                   return redirect($referer);
               }
           } else {
               return redirect()->back();
           }
            // Melakukan redirect ke URL sebelumnya
            return redirect($previousUrl);

        } catch (Exception $e) {
            $toastData = [
                'title' => trans('public.request_failed'),
                'msg' => trans('auth.fail_login_by_google'),
                'status' => 'error'
            ];
            return back()->with(['toast' => $toastData]);
        }
    }

    /**
     * Create a redirect method to facebook api.
     *
     * @return void
     */
    public function redirectToFacebook()
    {
        return Socialite::driver('facebook')->redirect();
    }

    /**
     * Return a callback method from facebook api.
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function handleFacebookCallback()
    {
        try {
            $account = Socialite::driver('facebook')->user();

            $user = User::where('facebook_id', $account->id)->first();

            if (empty($user)) {
                $user = User::create([
                    'full_name' => $account->name,
                    'email' => $account->email,
                    'facebook_id' => $account->id,
                    'role_id' => Role::getUserRoleId(),
                    'role_name' => Role::$user,
                    'status' => User::$active,
                    'verified' => true,
                    'created_at' => time(),
                    'password' => null
                ]);
            }

            Auth::login($user);
            return redirect('/');
        } catch (Exception $e) {
            $toastData = [
                'title' => trans('public.request_failed'),
                'msg' => trans('auth.fail_login_by_facebook'),
                'status' => 'error'
            ];
            return back()->with(['toast' => $toastData]);
        }
    }
}
