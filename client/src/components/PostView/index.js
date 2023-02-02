import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PostView = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            try{
                console.log('fetching..')
                const res = await axios({
                    method: 'GET',
                    url: 'http://localhost:4000/api/v1/posts'
                })
                setPosts(res.data.data.posts)
            }catch(err){
                alert('there is an error')
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            <h2>Post View</h2>
            {posts.map(post => 
                <>
                    <img src= {`http://localhost:4000/img/${post.PostImage}`} alt={post.PostImage}/> <br/>
                    {console.log(post.PostImage)}
                </>
                )
            }
            <Link to="/createpost">Create a post</Link>
        </div>
    )
}

export default PostView