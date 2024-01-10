import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import Link from 'next/link';

const getPosts = async () => {
  try {
    const res = await fetch('http://localhost:5000/', { cache: "no-store" })
    if (!res.ok) {
      console.log('failed to fetch posts')
    }
    return res.json();
  }

  catch (err) {
    console.log(err)
  }

}

export default async function Home() {
  let posts = await getPosts();
  return (
    <div className='py-12'>
      {posts.map((value, index) => (
        <div key={index} className="my-5 flex items-center border-solid border-2 border-gray-600 rounded-lg px-5 py-5 mx-auto my-0 w-9/12 justify-between hover:scale-110 cursor-pointer transition-all">
          <Link href={`/${value._id}`} className='w-full'>
            <div className="flex flex-col">
              <h2 className="font-bold text-xl">{value.title}</h2>
              <h3 className="text-slate-500 font-bold">{value.subtitle}</h3>
            </div>
          </Link>
          <div className='flex gap-7'>
            <DeleteOutlined className='text-red-400 text-xl hover:text-red-800' />
            <EditOutlined className='text-blue-400 text-xl hover:text-blue-800' />
          </div>
        </div>
      ))}
    </div>
  )
}
