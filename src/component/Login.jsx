import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost,removePost } from '../redux/postslice'

function Login() {
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts); // Change to state.posts


    const senddata = (e) => {
        e.preventDefault()
        dispatch(addPost({ title: title, description: description,id: posts.length }))

    }


    return (
        <>
            <div className="container my-8">
                <form action="" method="post" className='flex flex-col gap-2 items-center' onSubmit={(e) => { senddata(e) }}>
                    <div className='flex'>
                        <label htmlFor="title" className='w-32 '>Title :</label>
                        <input type="text" id='title' className='focus:outline-none py-1 pl-4' onChange={(e) => settitle(e.target.value)} />

                    </div>
                    <div className='flex'>
                        <label htmlFor="description " className='w-32'>Description : </label>
                        <input type="text" id='description' className='focus:outline-none py-1 pl-4' onChange={(e) => { setdescription(e.target.value) }} />

                    </div>
                    <input type="submit" value="submit" className='bg-green-900 py-1 px-3 text-white rounded-lg' />
                </form>
                <div className='posts my-8 flex flex-col gap-3'>
                    {posts.length > 0 ? posts.map((e) =>
                        <div className='mx-auto bg-cyan-300 p-4 flex flex-col gap-3 w-full'>
                            <p className="tittle text-center font-bold">{e.title}</p>
                            <p className="description text-center"> {e.description}</p>
                            <div className='flex justify-end'>
        
                                <button className='py-1 px-3 bg-green-900 mr-4 rounded-lg text-white' onClick={() => dispatch(removePost({id : e.id}))}>remove</button>
                            </div>
                        </div>

                    ) : <>there is no posts</>}

                </div>
            </div>
        </>
    )
}

export default Login