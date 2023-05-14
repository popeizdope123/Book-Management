import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [id, setID] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setISBN] = useState('');

  return (
    <div className='flex flex-col items-center gap-5'>
      <h1>Books Management System</h1>
      <form>
      <label>Search: </label>
      <input
            className='border border-slate-300'
            type="text"
            placeholder="Search Book ID"
          />
      </form>

      <table className="border-collapse border border-slate-400 w-1/2 p-5">
              <thead>
              <tr>
                <th colSpan={3} className='border border-slate-300 bg-green-400'>Books</th>
              </tr>
              </thead>
              <tbody>
                  <th className='border border-slate-300'>ID</th>
                  <th className='border border-slate-300'>Title</th>
                  <th className='border border-slate-300'>Author</th>
              </tbody>
            </table>

      <div className='flex flex-col'>
      Title:
      <input
            className='border border-slate-300'
            type="text"
            placeholder="Title"
          />
      Author:
      <input
            className='border border-slate-300'
            type="text"
            placeholder="Author"
          />
      ISBN:
      <input
            className='border border-slate-300'
            type="text"
            placeholder="ISBN"
          />
      <button 
            className='rounded-xl px-1 mt-2 bg-green-400'
            >Add
            </button>
      </div>
    </div>
  );
}

export default App;
