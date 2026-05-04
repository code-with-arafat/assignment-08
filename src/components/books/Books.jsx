import React from 'react';
import BookCard from './BooksCard';

const bookDataFetch = async () => {
    const bookData = await fetch("http://localhost:3000/bookData.json")
    const booksData = await bookData.json()
    return booksData ;
}

const Books = async () => {
    const bookinfo = await bookDataFetch();
    const topBooks = bookinfo.slice(0,4)
    console.log(bookinfo);
    console.log(topBooks);
    return (
        <div className='mt-8'>
            <h2 className='text-3xl text-bold text-center'>Book Self</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 container mx-auto'>

                {topBooks.map(topBook => <BookCard 
                key={topBook.id}
                topBook = {topBook}
                />)}

            </div>

        </div>
    );
};

export default Books;