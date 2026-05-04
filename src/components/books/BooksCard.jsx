import Image from 'next/image';
import React from 'react';

const BookCard = ({ topBook }) => {
    const { title, author, image_url, category } = topBook;

    return (
        <div className="card bg-base-100 shadow-xl border border-gray-100 rounded-2xl p-4">
            <figure className="h-60 overflow-hidden rounded-lg">
                <Image 
                    src={image_url} 
                    alt={title} 
                    width={400}
                    height={300}
                    className="w-full h-full object-cover" 
                />
            </figure>
            <div className="card-body p-4 text-left">
                <div className="badge badge-secondary mb-2">{category}</div>
                <h2 className="card-title text-xl font-bold">{title}</h2>
                <p className="text-gray-600">লেখক: {author}</p>
                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary w-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;