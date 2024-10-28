import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Backbutton from '../Component/Backbutton'
import Spinner from '../Component/Spinner'
import { url } from '../../config'

export default function Showbook() {
    const [book,setBook] = useState({});
    const [loading,setLoading] = useState(false);
    const {id} = useParams();
    useEffect(()=>{
        setLoading(true);
        axios
        .get(`${url}/books/${id}`)
        .then((res)=>{
            setBook(res.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log('Error:',error);
            setLoading(false);
        })
    },[])

  return (
    <div className='p-4'>
      <Backbutton/>
      <h1 className='text-3xl my-4'>Show Book</h1>
      {
        loading ? (
            <Spinner/>
        ):
        (
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit  p-4'>
                <div className='my-4'>
                    <span className='font-bold text-lg mr-4 text-gray-500 '>ID</span>
                    <span>{book._id}</span>
                </div>
                <div className='my-4'>
                    <span className='font-bold text-lg mr-4 text-gray-500'>Title</span>
                    <span>{book.title}</span>
                </div>
                <div className='my-4'>
                    <span className='font-bold text-lg mr-4 text-gray-500'>Author</span>
                    <span>{book.author}</span>
                </div>
                <div className='my-4'>
                    <span className='font-bold text-lg mr-4 text-gray-500'>Published Year</span>
                    <span>{book.published_Year}</span>
                </div>
                <div className='my-4'>
                    <span className='font-bold text-lg mr-4 text-gray-500'>Created Time</span>
                    <span>{new Date(book.createdAt).toString()}</span>
                </div>
                <div className='my-4'>
                    <span className='font-bold text-lg mr-4 text-gray-500'>Last Update Time</span>
                    <span>{new Date(book.updatedAt).toString()}</span>
                </div>
            </div>
        )
      }
    </div>
  )
}
