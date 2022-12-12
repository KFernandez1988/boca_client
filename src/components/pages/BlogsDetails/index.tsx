import axios from 'axios';
import * as React from 'react';
import { useParams } from 'react-router-dom';

import { Comments } from '../../organisms/Comments';

export interface IBlogsDetailsProps {
}

let reRender = true

export function BlogsDetails (props: IBlogsDetailsProps) {
      const [blog, setBlog] = React.useState<any>({});
      const [comments, setComments] = React.useState<any>([]);
      const { id } = useParams();


      React.useEffect(() => {
        console.log(id)
        const getBlog = async () => {
            await axios.get('https://bocaapi.herokuapp.com/blogs/' + id)
            .then( res => { setBlog(res.data) }).catch( error => console.log(error))
        }
        if(reRender) getBlog();

        return () => {
            reRender = !reRender;
        }

        
      }, [blog])
     



  return (
    <div>

        <h1>{blog.title}</h1>
        <p>{blog.blog}</p>
        <Comments />

        { comments.lenth > 0 ? comments : <p>Be the first to comment</p> }
      
    </div>
  );
}
