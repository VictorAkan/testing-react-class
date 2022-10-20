import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { postAdded } from "./postsSlice";
import { useDispatch } from "react-redux";

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)

    const onPostFormAdded = () => {
        dispatch(
            postAdded({
                id: nanoid(),
                title,
                content
            })
        )
    }

    return (
        <section className="flex justify-center">
            <div>
                <h2 className="capitalize font-bold text-4xl mt-3">
                    Add a new Post
                </h2>
                <form action="" className="bg-gray-700 w-[30rem] mt-4 p-3 drop-shadow-md rounded-md">
                    <div className="mt-3">
                        <label className="text-white text-left text-xl" htmlFor="postTitle">
                            Post Title
                        </label>
                        <input 
                        type="text" 
                            className="bg-gray-900 text-white focus:outline-none focus:ring focus:ring-gray-200 p-2"
                            value={title}
                            onChange={onTitleChanged}
                        />
                    </div>
                    <div className="mt-6">
                        <label className="text-white text-left text-xl" htmlFor="postContent">
                            Content
                        </label>
                        <textarea 
                            name="content"
                            className="bg-gray-900 text-white focus:outline-none focus:ring focus:ring-gray-200 p-2"
                            value={content}
                            onChange={onContentChanged}
                        ></textarea>
                    </div>
                    <div>
                        <button 
                            className="mt-3 bg-gray-500 text-white p-2 hover:bg-gray-400 rounded-md"
                            onClick={onPostFormAdded}
                        >
                            Save Post
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}