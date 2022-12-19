import './index.css';

import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogCard } from '../../organisms/BlogCard';

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
      ).catch(err => console.log("getting blog error", err));
    }
      getBlogs();
        
        }
        
        return () => {
          run = !run;
        }
  
  }, [blogs])

blogsDisplay = blogs.map( (b) =>  {
  return (<BlogCard card={b}/>)
  })

  return (
    <div>
      <h1>Blogs Page</h1>

      <ul className='card-list'>
        {blogsDisplay}
      </ul>
        
    </div>
  );
}
