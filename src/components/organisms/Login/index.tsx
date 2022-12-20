import * as React from 'react';
import { useRef } from 'react';
import logContext from '../../../log-context';

export interface ILogInProps {
}

export function LogIn (props: ILogInProps) {
  const ctx = React.useContext(logContext)
  const emailRef = useRef<any>('');
  const passRef = useRef<any>('');


  console.log(ctx);
  return (
    <div>
        <h1>Log In</h1>
    <form onSubmit={(e) => {
      e.preventDefault()
      ctx.login(emailRef.current.value, passRef.current.value);
      emailRef.current.valuev="";
       passRef.current.value="";
    }}>
             <input ref={emailRef} type="email" name="email" placeholder="Enter your email address" />
             <input ref={passRef} type="password" name="password" id="password" placeholder='Enter your password' />
             <div>
              <input type="submit" value="Submit" />
              <input type="reset" value="Clear Info" />
             </div>
    </form>
    </div>
  );
}
