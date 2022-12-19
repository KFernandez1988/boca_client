import axios from 'axios';
import { useRef } from 'react';

export interface ISignUpProps {
}

export default function SignUp (props: ISignUpProps) {
  const nameRef = useRef<any>();
  const usernameRef = useRef<any>();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const proRef = useRef<any>();

    const submitAction = async (event: any) => {
      event.preventDefault()

      await axios.post('https://dashboard.heroku.com/apps/bocaapi/auth', {
        name: nameRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        email: emailRef.current.value,
        pro: proRef.current.value,
      }).then(() => { window.location.href = '/auth' })
      .catch(err => console.log("not able to sign up", err))
    }


  return (
    <div>
        <h1>Sign Up To Boca</h1>
    <form onSubmit={(e) => submitAction(e)}>
             <input ref={nameRef} type="text" name="name" id="name" placeholder='Enter Your FullName' required />
             <input ref={usernameRef} type="text" name="username" placeholder='Enter you alias (username)' required/>
             <input ref={emailRef} type="email" name="email" placeholder="Enter your email address" required/>
             <input ref={passwordRef} type="password" name="password" id="password" placeholder='Enter your password' required />
             <div>
              <h4>Pro?</h4>
              <label htmlFor="yes">yes</label>
              <input ref={proRef} type="radio" name="pro" value="yes" id="yes" placeholder='yes' />
              <label htmlFor="no">no</label>
              <input ref={proRef} type="radio" name="pro" value="no" id="no" placeholder='no' />
              <p></p>
             </div>
             <div>

              
              <input type="submit" value="Submit" />
              <input type="reset" value="Clear Info" />
             </div>
    </form>
    </div>
  );
}
