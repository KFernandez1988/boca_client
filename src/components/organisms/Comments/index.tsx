import "./index.css"

import axios from 'axios';
import * as React from 'react';
import { useParams } from 'react-router-dom';

export interface ICommentsProps {
}

export function Comments (props: ICommentsProps) {
  const commentRef = React.useRef<any>();
  const {id} = useParams()

  const onSubmit = (e: any) => {
    e.preventDefault();

    axios.post('', {
        blogId: id,
        comment: commentRef.current.value
    });

    commentRef.current.value = "";
  }


  return (
    <div>

        <form >
            <textarea ref={commentRef} name="" id="" cols={40} rows={30}></textarea>
            <div className="btns">
                <input type="submit" value="ENTER" />
                <input type="reset" value="CLEAR" />
            </div>
        </form>
      
    </div>
  );
}
