import React , {useEffect,useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Spinner from '../Component/Spinner';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox,MdOutlineDelete } from 'react-icons/md';

export default function Home() {

    const [books,setBooks] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((res)=>{
                setBooks(res.data.data);
                setLoading(false);
            })
            .catch((error)=>{
                console.log('Error:',error);
                setLoading(false);
            })
    },[]);
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center '>
        <h1 className='text-3xl my-8'> Books List</h1>
        <Link to='/books/create' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center'>
          <MdOutlineAddBox className='mr-2 text-4xl' />
          Add Book
        </Link>
      </div>
      {
        loading?(
            <Spinner/>
        ):
        (
            <table className='w-full border-separate border-spacing-2'>
                <thead>
                    <tr>
                        <th className='border border-slate-600 rounded-md'>No</th>
                        <th className='border border-slate-600 rounded-md'>Title</th>
                        <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                        <th className='border border-slate-600 rounded-md max-md-hidden'>Published Year</th>
                        <th className='border border-slate-600 rounded-md'>Actions</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {books.map((book,index)=>()=>{
                        <tr key={book._id}>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {index+1}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {book.title}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                {book.author}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                {book.published_Year}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                <div className='flex justify-center gap-x-4'>
                                     <Link to={`/books/details/${book._id}`}>
                                        <BsInfoCircle className='text-2xl text-green-500'/>
                                     </Link>
                                     <Link to={`/books/edit/${book._id}`}>
                                        <AiOutlineEdit className='text-2xl text-blue-500'/>
                                     </Link>
                                     <Link to={`/books/delete/${book._id}`}>
                                            <MdOutlineDelete className='text-2xl text-red-500'/>
                                     </Link>
                                </div>
                            </td>
                        </tr>
                    })}
                </tbody> */}
                <tbody>
                    {books.map((book, index) => (
                        <tr key={book._id}>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {index + 1}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {book.title}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {book.author}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {book.published_Year}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                            <Link to={`/books/details/${book._id}`}>
                                <BsInfoCircle className='text-2xl text-green-500' />
                            </Link>
                            <Link to={`/books/edit/${book._id}`}>
                                <AiOutlineEdit className='text-2xl text-blue-500' />
                            </Link>
                            <Link to={`/books/delete/${book._id}`}>
                                <MdOutlineDelete className='text-2xl text-red-500' />
                            </Link>
                            </div>
                        </td>
                        </tr>
                    ))}
                    </tbody>

            </table>
        )
      }
    </div>
  )
}
