import * as React from 'react';
import logContext from '../../../log-context';
import { LogIn } from '../../organisms/Login';
import SignUp from '../../organisms/SignIn';

export interface IAuthProps {
}

export function Auth (props: IAuthProps) {
  
  const [isToLog, setIsToLog] = React.useState<boolean>(true);

const authToggle = () => {
    setIsToLog(!isToLog);
}

  return (
    <div>
        <button onClick={authToggle}>
        {
            !isToLog? 'LogIn': 'SignUp'
        }
        </button>

        {
            isToLog? <LogIn /> : <SignUp />
        }

    </div>
  );
}
