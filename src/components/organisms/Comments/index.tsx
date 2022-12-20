import "./index.css"

import axios from 'axios';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useContext, useState } from "react";
import logContext from "../../../log-context";

export interface ICommentsProps {
}

let run = true;

export function Comments (props: ICommentsProps) {
  const ctx = useContext(logContext);
  const commentRef = React.useRef<any>();
  const {id} = useParams()


  const actionSubmit = async (e: any) => {
  
    e.preventDefault();
   try {
    await axios.post('https://bocaapi.herokuapp.com/comments?token='+ctx.token, {
        blogId: id,
        comment: commentRef.current.value
     
  }).catch(err => console.error("error when posting comment",err));

  commentRef.current.value = "";
  window.location.href = "'https://bocaapi.herokuapp.com/blogs/"+id
   } catch (error) {
    console.error("actionSubmit fail", error)
   }
   
  }


  return (
    <div>

        <form onSubmit={(event) => actionSubmit(event)}>
            <textarea ref={commentRef} name="" id="" cols={40} rows={30}></textarea>
            <div className="btns">
                <input type="submit" value="ENTER" />
                <input type="reset" value="CLEAR" />
            </div>
        </form>
      
    </div>
  );
}
