import axios from 'axios';
import * as React from 'react';
import { useParams } from 'react-router-dom';

export interface IBlogsDetailsProps {
}

export function BlogsDetails (props: IBlogsDetailsProps) {
      const [blog, setBlog] = React.useState<any>({});
      const { id } = useParams();


      React.useEffect(() => {
        const getBlog = async () => {
            await axios.get('https://bocaapi.herokuapp.com/blogs/' + id)
            .then( data => { console.log(data)})
        }

        
      })
     



  return (
    <div>
      
    </div>
  );
}
