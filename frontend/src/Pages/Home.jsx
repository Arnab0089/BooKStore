import React , {useEffect,useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Spinner from '../Component/Spinner';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox,MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../Component/Home/BooksTable';
import Bookscard from '../Component/Home/Bookscard';


export default function Home() {

    const [books,setBooks] = useState([]);
    const [loading,setLoading] = useState(false);
    const [showType , setShowType] = useState('table');
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
    <div className='flex justify-center items-center gap-x-4'>
                <button
                    className={`px-4 py-1 rounded-lg ${showType === 'table' ? 'bg-sky-600 text-white' : 'bg-sky-300 hover:bg-sky-600'}`}
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>
                <button
                    className={`px-4 py-1 rounded-lg ${showType === 'card' ? 'bg-sky-600 text-white' : 'bg-sky-300 hover:bg-sky-600'}`}
                    onClick={() => setShowType('card')}
                >
                    Card
                </button>
    </div>
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
        ): showType === 'card' ? (
            <Bookscard books={books}/>
        ) : ( 
            <BooksTable books={books}/>
        )
      }
    </div>
  )
}
