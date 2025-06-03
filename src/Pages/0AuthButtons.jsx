import React from "react";
import { RiGoogleLine } from "react-icons/ri";
import { GoogleLogin } from '@react-oauth/google';
import { MdFacebook } from "react-icons/md";

export default function OAuthButtons() {
  const handleGoogleLogin = (response) => {
    console.log("Google Response:", response);
    // You can send the response token to your backend for verification.
  };

  const handleFacebookLogin = (response) => {
    console.log("Facebook Response:", response);
    // Send the response to your backend for verification.
  };

  return (
    <div>
      <div className="oauth-divider">
        <span>Or sign in with</span>
      </div>
      <div className="oauth-buttons">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => console.log("Google login failed")}
          useOneTap
        />
      </div>
    </div>
  );
}
