import React,{useState,useEffect} from 'react'
import Backbutton from '../Component/Backbutton'
import Spinner from '../Component/Spinner'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { url } from '../../config'

export default function Deletebook() {
  const [book,setBook]=useState({});
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const {id}=useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(()=>{
    setLoading(true);
    axios.get(`${url}/books/${id}`)
    .then((res)=>{
      setBook(res.data);
      setLoading(false);
    })
    .catch((error)=>{
      console.log('Error:',error);
      alert('Something went wrong');
      setLoading(false);
    })
  },[])

  const handleDeleteBook=async()=>{
    setLoading(true);
    axios.delete(`${url}/books/${id}`)
    .then(res=>{
      setLoading(false);
      enqueueSnackbar('Book deleted successfully', { variant: 'success' });
      navigate('/');
    })
    .catch(err=>{
      console.log(err);
      enqueueSnackbar('Something went wrong', { variant: 'error' });
      setLoading(false);
    })
  }
  return (
    <div className='p-4'>
      <Backbutton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      { loading ?(<Spinner/>):('')}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit  p-4  items-center  mx-auto'>
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
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto my-2'>
        <h3 className='text-2xl uppercase'>Are you Sure You want to Delete This Book</h3>
        <button className='bg-red-500 text-white px-4 py-2 rounded-lg mt-4' onClick={handleDeleteBook}>Delete</button>
      </div>
    </div>
  )
}
