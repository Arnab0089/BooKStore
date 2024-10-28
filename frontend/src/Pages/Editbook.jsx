import React,{useState,useEffect} from 'react'
import Backbutton from '../Component/Backbutton'
import Spinner from '../Component/Spinner'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { url } from '../../config'


export default function Editbook() {
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const [publishYear,setPublishYear]=useState('');
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const {id}=useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(()=>{
    setLoading(true);
    axios.get(`${url}/books/${id}`)
    .then((res)=>{
      setTitle(res.data.title);
      setAuthor(res.data.author);
      setPublishYear(res.data.published_Year);
      setLoading(false);
    })
    .catch((error)=>{
      console.log('Error:',error);
      alert('Something went wrong');
      setLoading(false);
    })

  },[])

  const handleEditBook=async()=>{
    const data={
      title,
      author,
      published_Year:publishYear
    }
    setLoading(true);
    axios.put(`${url}/books/${id}`,data)
    .then(res=>{
      setLoading(false);
      enqueueSnackbar('Book updated successfully', { variant: 'success' });
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
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading?(<Spinner/>):('')}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input type='text' className='border-2 border-gray-400 px-4 py-2 rounded-lg w-full' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input type='text' className='border-2 border-gray-400 px-4 py-2 rounded-lg w-full' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input type='text' className='border-2 border-gray-400 px-4 py-2 rounded-lg w-full' value={publishYear} onChange={(e)=>setPublishYear(e.target.value)}/>
        </div>
        <button className='bg-sky-400 text-white px-4 py-2 rounded-lg' onClick={handleEditBook}>Save</button>
      </div>
    </div>
  )
}
