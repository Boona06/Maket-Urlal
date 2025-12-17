import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Portfolio = () => {
    return (
        <section id="portfolio" className="section bg-primary text-text-light">
            <div className="container px-8 mx-auto max-w-[1200px]">
                <div className="text-center mb-16">
                    <h2 className="section-title text-text-light fade-in-up">Сүүлд хийгдсэн ажлууд</h2>
                    <p className="section-subtitle fade-in-up">Бидний ур ухааны дээж</p>
                </div>

                <div className="portfolio-swiper-container fade-in-up pb-[50px]">
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="portfolio-swiper"
                    >
                        {[
                            { img: "/assets/portfolio1.png", title: "Тансаг Зэрэглэлийн Орон Сууц", cat: "Орон сууц" },
                            { img: "/assets/portfolio2.png", title: "Уул Уурхайн Баяжуулах Үйлдвэр", cat: "Үйлдвэрлэл" },
                            { img: "/assets/portfolio3.png", title: "Хотын Цэцэрлэгт Хүрээлэн", cat: "Ландшафт" },
                            { img: "/assets/portfolio4.png", title: "Үйлдвэрийн Цогцолбор", cat: "Үйлдвэрлэл" },
                            { img: "/assets/portfolio5.png", title: "Худалдааны Төв", cat: "Үйлчилгээ" },
                        ].map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="portfolio-item bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 relative h-full group">
                                    <div className="h-[300px] overflow-hidden">
                                        <img src={item.img} alt={item.title}
                                            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110" />
                                    </div>
                                    <div className="portfolio-info absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent translate-y-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <h4 className="text-text-light mb-2 text-xl">{item.title}</h4>
                                        <p className="text-slate-300 text-sm m-0">{item.cat}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
