import React from 'react'

const getSinglePost = async (params) => {
    try {
        const res = await fetch(`http://localhost:5000/getblog/${params.id}`)
        return res.json();
    }
    catch (err) {
        console.log(err)
    }
}

const page = async ({ params }) => {
    let post = await getSinglePost(params)
    return (
        <div>
            <div>
                {post.title}<br />
                {post.subtitle}<br />
                {post.authorName}
            </div>

        </div>
    )
}

export default page