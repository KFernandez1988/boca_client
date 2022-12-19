import './index.css'

import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IBlogCardProps {

    card : {
        id: string;
        title: string;
        blog: string;
    }
   
}

export function BlogCard (props: IBlogCardProps) {
    const {id, title, blog} = props.card;
  return (
    <div className='card-blog'>
      <li key={id}>
    <Link to={`/blogs/${id}`}>
      <div>
        <header>
          <h1>{title}</h1>
        </header>
        <main>
            <p>
                {blog.slice(0, 15)}
            </p>
        </main>
      </div>
      </Link>
    </li>
    </div>
  );
}
