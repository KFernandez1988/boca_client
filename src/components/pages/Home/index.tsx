import './index.css'

import axios from 'axios';
import { useContext, useRef } from 'react';
import logContext from '../../../log-context';

export interface IHomeProps {
}

 function Home (props: IHomeProps) {
  const ctx = useContext(logContext)
     const titleRef = useRef<any>('');
     const blogRef = useRef<any>('');


     const submitPost = async (e: any) => {
        e.preventDefault();

        console.log(titleRef.current.value);
        console.log(blogRef.current.value);

        await axios.post('https://dashboard.heroku.com/apps/bocaapi/blogs?token='+ctx.token,{
            title: titleRef.current.value,
            blog:  blogRef.current.value
        });

        titleRef.current.value = "";
        blogRef.current.value = "";
     }

     
     return (
    <div>
      
      <h2>DASHBOARD</h2>

      <form onSubmit={(e) => submitPost(e)}> 
        <h3>Create a Post</h3>
        <div className='inputs'>
            <input type="text" ref={titleRef} name='title' placeholder="Post Title"/>
            <textarea ref={blogRef} name='blog' placeholder='Enter Blog Body'>
              
            </textarea>
            <div className='btns'>
                <input type="reset" value="Cancel" />
                <input type="submit" value="Submit" />
            </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
