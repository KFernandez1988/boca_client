import * as React from 'react';

export interface ISignUpProps {
}

export default function SignUp (props: ISignUpProps) {

    const submitAction = (event: any) => {
      event.preventDefault()
    }


  return (
    <div>
        <h1>Sign Up To Boca</h1>
    <form onSubmit={(e) => submitAction(e)}>
             <input type="text" name="name" id="name" placeholder='Enter Your FullName' />
             <input type="text" name="username" placeholder='Enter you alias (username)' />
             <input type="email" name="email" placeholder="Enter your email address" />
             <input type="password" name="password" id="password" placeholder='Enter your password' />
             <input type="password" name="v-password" id="password" placeholder='verified your password' />
             <div>
              <input type="submit" value="Submit" />
              <input type="reset" value="Clear Info" />
             </div>
    </form>
    </div>
  );
}
