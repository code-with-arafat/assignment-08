import BookCard from "@/components/books/BooksCard";


const AllBooksPage = async () => {
    // ডাটা ফেচ করা
    const res = await fetch(`http://localhost:3000/bookData.json`, {
        cache: 'no-store'
    });
    const allBooks = await res.json();

    return (
        <div className="max-w-7xl mx-auto py-12 px-6">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">আমাদের সকল বইয়ের সংগ্রহ</h1>
                <p className="text-slate-600">আপনার প্রিয় বইটির নাম বা ক্যাটাগরি খুঁজে নিন এখান থেকে।</p>
                <div className="divider w-24 mx-auto bg-purple-500 h-1 mt-2"></div>
            </div>

            {/* সব বই দেখানোর গ্রিড */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    allBooks.map(book => (
                        <BookCard 
                            key={book.id} 
                            topBook={book} 
                        />
                    ))
                }
            </div>

            {/* যদি কোনো বই না থাকে */}
            {allBooks.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-500">বর্তমানে কোনো বই পাওয়া যায়নি।</p>
                </div>
            )}
        </div>
    );
};

export default AllBooksPage;