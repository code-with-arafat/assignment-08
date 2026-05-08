import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-200 tracking-widest relative">
          404
          <span className="absolute inset-0 flex items-center justify-center text-blue-600 text-2xl md:text-4xl font-serif mt-10">
            Page Not Found
          </span>
        </h1>

        <div className="bg-blue-600 px-2 text-sm rounded rotate-12 absolute">
          <span className="text-white font-bold">BookFlow Library</span>
        </div>

        <main className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl mb-4">
            দুঃখিত! এই পৃষ্ঠাটি আমাদের শেলফে নেই।
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে অথবা এর লিংক ভুল।
            আমাদের লাইব্রেরির মূল সংগ্রহে ফিরে যান।
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              হোমে ফিরে যান
            </Link>
            <Link
              href="/all-books"
              className="w-full sm:w-auto px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              সব বই দেখুন
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}