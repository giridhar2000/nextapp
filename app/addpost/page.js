import React from 'react'

const addpost = () => {
  return (
    <div className='flex flex-col mx-auto my-5 justify-between w-9/12 h-96'>
      <div className='flex flex-col py-3'>
        <label htmlFor='title' className='pb-1'>Title: </label>
        <textarea type='text' placeholder='Enter Title' name="title" className='border-2 rounded-lg p-2' />
      </div>

      <div className='flex flex-col py-3'>
        <label htmlFor='subtitle' className='pb-1'>Subtitle (should be less than 30 words):</label>
        <textarea type='text' placeholder='Enter Subtitle' name="subtitle" className='border-2 rounded-lg p-2' />
      </div>

      <div className='flex flex-col py-3'>
        <label htmlFor='authorName' className='pb-1'>Author Name (optional) :</label>
        <textarea type='text' placeholder='Enter Author Name' name="authorName" className='border-2 rounded-lg p-2' />
      </div>

      <div className='flex flex-col py-3'>
        <label htmlFor='authorProfile' className='pb-1'>Author Profile Link (optional) :</label>
        <textarea type='text' placeholder='Enter Author Profile Link' name="authorProfile" className='border-2 rounded-lg p-2' />
      </div>

      <div className='flex flex-col py-3'>
        <label htmlFor='coverImg' className='pb-1'>Author Profile Link (optional) :</label>
        <input type='file' accept="image/png, image/jpeg" name="coverImg" />
      </div>

      <div className='flex flex-col py-3'>
        {/* <ReactQuill theme='snow' value={value} onChange={setValue} placeholder={'Enter Body'} /> */}
      </div>

      <div className='mx-auto my-5 hover:scale-110 transition-all'>
        <button className='bg-slate-800 text-white py-3 px-5 rounded-lg'>Add Blog</button>
      </div>

    </div>
  )
}

export default addpost