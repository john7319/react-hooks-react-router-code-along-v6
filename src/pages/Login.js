import React from 'react'
import NavBar from '../components/NavBar'

export default function Login() {
  return (
    <>
        <header>
            <NavBar/>
        </header>
        <main>
            <h1>LOGIN</h1>
            <form>
                <div>
                    <label for = "username">Username:  </label>
                    <input id='username' type='text' name='username' placeholder='Enter Your Username...'/>
                </div>
                <br/>
                <div>
                    <label for= "Password">Password: </label>
                    <input id='password' type='password' name='password' placeholder='Enter Your Password...'/>
                </div>
                <br/>
                <button type='submit'> Submit </button>
            </form>
        </main>
    </>
  )
}
