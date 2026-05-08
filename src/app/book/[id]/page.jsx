import Image from "next/image";

const BookDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:3000/bookData.json`);
    const allBooks = await res.json();

    const book = allBooks.find((b) => b.id === parseInt(id));

    if (!book) {
        return <div className="text-center py-20">বইটি পাওয়া যায়নি!</div>;
    }

    return (
        <div className="max-w-4xl mx-auto py-20 px-6">
            <div className="flex flex-col md:flex-row gap-10 items-start">
                <Image
                    width={300}
                    height={200} 
                    src={book.image_url} 
                    alt={book.title} 
                    className="w-full md:w-80 rounded-lg shadow-2xl" 
                />
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">{book.title}</h1>
                    <p className="text-xl text-gray-700">লেখক: <span className="font-semibold">{book.author}</span></p>
                    <div className="badge badge-secondary p-4">{book.category}</div>
                    <p className="text-lg leading-relaxed text-gray-600">
                        {book.description}
                    </p>
                    <p className="mt-2"><span className="font-bold">Available Quantity: </span>{book.available_quantity}</p>
                    <button className="btn btn-accent px-10">Add to Library</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;