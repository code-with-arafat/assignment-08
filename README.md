# 📚 Book Flow - Digital Library & Management System

**Book Flow** একটি আধুনিক ও ডাইনামিক ওয়েব অ্যাপ্লিকেশন, যা পাঠকদের বইয়ের বিশাল সংগ্রহের সাথে পরিচয় করিয়ে দেয়। এটি মূলত **Next.js 15**, **Tailwind CSS** এবং **React Context API** ব্যবহার করে তৈরি করা হয়েছে।

---

## 🚀 মূল ফিচারসমূহ (Features)

*   **ডাইনামিক বুক ডিটেইলস:** প্রতিটি বইয়ের জন্য আলাদা ডাইনামিক রাউট (`/book/[id]`) ব্যবহার করা হয়েছে যা JSON ডাটা থেকে তথ্য সংগ্রহ করে।
*   **মক অথেন্টিকেশন:** ডাটাবেজ ছাড়াই `Context API` ব্যবহার করে রেজিস্ট্রেশন এবং লগইন সিস্টেম তৈরি করা হয়েছে, যা পেজ রিলোড দিলে স্বয়ংক্রিয়ভাবে রিসেট হয়।
*   **অল বুকস কালেকশন:** একটি ডেডিকেটেড পেজ যেখানে লাইব্রেরির সকল বই একসাথ দেখা যায়।
*   **স্মুথ মারকিউ অ্যানিমেশন:** প্রজেক্টের হোম পেজে গুরুত্বপূর্ণ আপডেট এবং অফার দেখানোর জন্য ডাইনামিক মারকিউ যোগ করা হয়েছে।
*   **প্রফেশনাল ইউআই:** Tailwind CSS এবং DaisyUI ব্যবহার করে সম্পূর্ণ রেসপন্সিভ এবং ক্লিন ডিজাইন নিশ্চিত করা হয়েছে।

---

## 🛠️ টেক স্ট্যাক (Tech Stack)

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
*   **State Management:** [React Context API](https://react.dev/learn/passing-data-deeply-with-context)
*   **Language:** [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

---

## 📁 ফোল্ডার স্ট্রাকচার (Structure)
```text
src/
├── app/
│   ├── (auth)/         # লগইন এবং রেজিস্ট্রেশন (Route Grouping)
│   ├── all-books/      # সকল বই প্রদর্শনের পেজ
│   ├── book/[id]/      # ডাইনামিক বইয়ের বিস্তারিত পেজ
│   └── layout.js       # গ্লোবাল লেআউট ও AuthProvider
├── components/         # শেয়ারড কম্পোনেন্টস (Navbar, Marquee, BookCard)
├── context/            # AuthContext (লগইন লজিক)
└── public/             # bookData.json এবং অন্যান্য ইমেজ
