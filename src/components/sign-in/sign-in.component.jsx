import React, { useState } from 'react'
import useInputState from '../../hooks/useInputState'

const SignIn = () => {

    const [emailValue, handleEmailChange, resetEmail] = useInputState("")
    const [passwordValue, handlePasswordChange, resetPassword] = useInputState("")



    const handleSubmit = (e) => {
        e.preventDefault()
        resetEmail()
        resetPassword()
    }

    return (
        <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            value={emailValue}
            onChange={handleEmailChange}
            required
          />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
            required
          />
          <label>Password</label>
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    )
}


export default SignIn