import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export interface IBlogsProps {
}

let run = true;

export default function Blogs (props: IBlogsProps) {
  const [blogs, setBlogs] = useState<any[]>([]);

  let blogsDisplay: any[] = [];

  useEffect(() => {
    if(run) {

    const getBlogs = async () => {
      await axios.get('https://bocaapi.herokuapp.com/blogs').then(json => {
        console.log("awaiting blogs")
        console.log(json)
        setBlogs(json.data)
      }).then(
         () => {
          console.log("get blogs")
         }
      );
    }
      getBlogs();
        
        }
        
        return () => {
          run = !run;
        }
  
  }, [blogs])

blogsDisplay = blogs.map( (b) =>  {
  return (<li key={b.id}>
    <Link to={`/blogs/${b.id}`}>
      <div>
        <header>
          <h1>{b.title}</h1>
        </header>
        <main>
        </main>
      </div>
      </Link>
    </li>)
  })

  return (
    <div>
      <h1>Blogs Page</h1>

      <ul>
        {blogsDisplay}
      </ul>
        
    </div>
  );
}
