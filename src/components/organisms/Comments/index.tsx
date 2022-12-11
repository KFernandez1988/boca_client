import * as React from 'react';

export interface ICommentsProps {
}

export function Comments (props: ICommentsProps) {
  return (
    <div>

        <form action="">
            <textarea name="" id="" cols={30} rows={50}></textarea>
            <div>
                <input type="submit" value="ENTER" />
                <input type="reset" value="CLEAR" />
            </div>
        </form>
      
    </div>
  );
}
