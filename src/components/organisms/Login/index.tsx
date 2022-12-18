import * as React from 'react';

export interface ILogInProps {
}

export function LogIn (props: ILogInProps) {

    const submitAction = (event: any) => {
        event.preventDefault()
      }

  return (
    <div>
        <h1>Log In</h1>
    <form onSubmit={(e) => submitAction(e)}>
             <input type="email" name="email" placeholder="Enter your email address" />
             <input type="password" name="password" id="password" placeholder='Enter your password' />
             <div>
              <input type="submit" value="Submit" />
              <input type="reset" value="Clear Info" />
             </div>
    </form>
    </div>
  );
}
