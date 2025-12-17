import React from 'react';

const Hero = () => {
    return (
        <header id="home" className="relative h-screen flex items-center text-text-light -mt-20">
            <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                <img src="/assets/hero.png" alt="Architectural Model Detail" className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
            </div>
            <div className="container px-8 mx-auto max-w-[1200px]">
                <div className="max-w-[800px]">
                    <h1 className="text-4xl md:text-6xl mb-6 text-text-light font-heading fade-in-up">
                        Таны төсөөллийг <span className="text-gradient font-bold">Бодит</span> болгоно
                    </h1>
                    <p className="text-xl mb-10 text-slate-300 max-w-[600px] fade-in-up delay-1">
                        Монголын тэргүүлэх архитектур, үйлдвэрлэлийн макет урлалын үйлчилгээ.
                        Нарийвчлал, ур чадвар, чанарын баталгаа.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 fade-in-up delay-2">
                        <a href="tel:88011648" className="btn-primary text-center">Үнийн санал авах</a>
                        <a href="#portfolio" className="btn-secondary text-center ml-0 md:ml-4">Бүтээлүүд үзэх</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
