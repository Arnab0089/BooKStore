import React from 'react'
import {Link} from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox,MdOutlineDelete } from 'react-icons/md';

export default function BooksTable({books}) {
  return (
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
