'use client';
import React from 'react';
import books from '../../../public/bookData.json'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { url } from 'better-auth';

const BookSlider = () => {
    return (
        <div className="container mx-auto my-10 px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Book Collections</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {books.map((book) => (
                    <SwiperSlide key={book.id}>
                        <div className="bg-white p-4 shadow-lg rounded-3xl border border-gray-200">
                            <Image src={book.image_url}
                            alt={book.title}
                            width={100}
                            height={100}
                            className="h-60 w-full object-cover rounded-3xl" />
                            <h3 className="mt-2 font-bold">{book.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BookSlider;