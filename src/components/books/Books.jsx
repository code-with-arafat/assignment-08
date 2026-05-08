import React from 'react';
import BookCard from './BooksCard';
import allBooks from "../../../public/bookData.json";



const Books = async () => {
    const topBooks = allBooks.slice(0,4)
    
    return (
        <div className='mt-8 mb-8'>
            <h2 className="text-4xl font-bold text-center mb-12">Featured Books</h2>
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