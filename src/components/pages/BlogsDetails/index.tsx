import axios from 'axios';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import logContext from '../../../log-context';

import { Comments } from '../../organisms/Comments';

export interface IBlogsDetailsProps {
}

let reRender = true

export function BlogsDetails (props: IBlogsDetailsProps) {
  const ctx = React.useContext(logContext)
      const [blog, setBlog] = React.useState<any>({});
      const [comments, setComments] = React.useState<any>([]);
      const { id } = useParams();


      React.useEffect(() => {

        if(reRender) {
        const getBlog = async () => {
            await axios.get('https://dashboard.heroku.com/apps/bocaapi/blogs/' + id)
            .then( res => { setBlog(res.data) }).catch( error => console.log(error))

            await axios.get('https://dashboard.heroku.com/apps/bocaapi/comments?blogId='+id+"&token="+ctx.token)
            .then(res => {setComments(res.data)}).catch(err => { console.error("error on getting comments") })
        }
         console.log("blog deatils", comments)
  
         getBlog();
      }
     
        return () => {
            reRender = !reRender;
        }

        
      }, [blog])
     
    const commentsList = comments.map( (comment: any) => (
      <p style={{backgroundColor: "lightslategray", margin: "25px auto", width: "320px", color: "white"}}>{comment.comment}</p>
    ))


  return (
    <div>

        <h1>{blog.title}</h1>
        <p>{blog.blog}</p>
        <Comments />

        { comments ? commentsList : <p>Be the first to comment</p> }
      
    </div>
  );
}
