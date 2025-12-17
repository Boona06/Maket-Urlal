import React from 'react';

const Services = () => {
    return (
        <section id="services" className="section bg-bg-off-white">
            <div className="container px-8 mx-auto max-w-[1200px]">
                <div className="text-center mb-16">
                    <h2 className="section-title">Манай Үйлчилгээ</h2>
                    <p className="section-subtitle">Макет Урлалын Цогц Шийдэл</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-2xl border border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-secondary group">
                        <div className="w-[60px] h-[60px] bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-[30px] h-[30px]">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl mb-4 font-heading text-primary">Архитектурын Макет</h3>
                        <p className="text-text-gray">Орон сууц, худалдаа үйлчилгээ, олон нийтийн барилгын нарийвчилсан макет. Борлуулалтын алба болон
                            танилцуулгад нэн тохиромжтой.</p>
                    </div>
                    <div className="bg-white p-10 rounded-2xl border border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-secondary group">
                        <div className="w-[60px] h-[60px] bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-[30px] h-[30px]">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                            </svg>
                        </div>
                        <h3 className="text-2xl mb-4 font-heading text-primary">Хот Төлөвлөлтийн Макет</h3>
                        <p className="text-text-gray">Хот, дүүргийн ерөнхий төлөвлөгөө, дэд бүтэц, ландшафтын уялдааг харуулсан томоохон хэмжээний
                            макет.</p>
                    </div>
                    <div className="bg-white p-10 rounded-2xl border border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-secondary group">
                        <div className="w-[60px] h-[60px] bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-[30px] h-[30px]">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl mb-4 font-heading text-primary">Үйлдвэрлэлийн Макет</h3>
                        <p className="text-text-gray">Үйлдвэр, машин механизм, тоног төхөөрөмжийн нарийн хийцтэй макетыг сургалт, үзэсгэлэнгийн
                            зориулалтаар бүтээнэ.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
