import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const form = new FormData();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        form.append('name', document.getElementById('name').value)
        form.append('location', document.getElementById('location').value)
        form.append('PostImage', document.getElementById('PostImage').files[0])
        form.append('fescription', document.getElementById('description').value)
        try{
            await axios({
                method: 'POST',
                url: 'http://localhost:4000/api/v1/posts',
                data: form
            });
            navigate('/postview')
        }catch(err){
            console.log(form,err)
        }
    }

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input name='name' id='name' type='text' placeholder='Author' ></input> <br/>
                <input name='location' id='location' type='text' placeholder='Location' ></input> <br/>
                <input name='PostImage' id='PostImage' type='file' accept='image/*' placeholder='Post'></input> <br/>
                <input name='description' id='description' type='text' placeholder='Description'></input> <br/>
                <button type='submit' onClick={handleSubmit}>Create Post</button>
            </form>
            <p>{form.name}</p>
        </div>
    )
}

export default CreatePost