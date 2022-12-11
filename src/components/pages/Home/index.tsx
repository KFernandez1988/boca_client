import axios from 'axios';
import { useRef } from 'react';

export interface IHomeProps {
}

 function Home (props: IHomeProps) {
     const titleRef = useRef<any>('');
     const blogRef = useRef<any>('');


     const submitPost = async (e: any) => {
        e.preventDefault();

        console.log(titleRef.current.value);
        console.log(blogRef.current.value);

        await axios.post('https://bocaapi.herokuapp.com/blogs',{
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
        <div>
            <input type="text" ref={titleRef} name='title' placeholder="Post Title"/>
            <textarea ref={blogRef} name='blog' placeholder='Enter Blog Body'>
              
            </textarea>
            <div>
                <input type="reset" value="Cancel" />
                <input type="submit" value="Submit" />
            </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
