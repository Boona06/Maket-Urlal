import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section id="about" className="section bg-white" ref={ref}>
            <div className="container px-8 mx-auto max-w-[1200px]">
                <div className="text-center mb-16">
                    <h2 className="section-title">Бидний тухай</h2>
                    <p className="section-subtitle">2015 оноос хойшхи туршлага</p>
                </div>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="about-text">
                        <p className="mb-6 text-text-gray"><strong>Maket Urlal</strong> нь архитектурын зураг төсөл, үйлдвэрлэлийн санааг бодит, өндөр
                            нарийвчлалтай макет болгон хувиргах чиглэлээр мэргэшсэн. Улаанбаатар хотод байрладаг манай
                            чадварлаг уран бүтээлчид, инженерүүдийн баг орчин үеийн технологи болон уламжлалт ур ухааныг
                            хослуулан таны сэтгэлд нийцсэн бүтээлийг урладаг.</p>
                        <p className="mb-6 text-text-gray">Үл хөдлөх хөрөнгийн борлуулалт, хот төлөвлөлт эсвэл үйлдвэрлэлийн загварчлал гээд аль ч салбарт
                            манай макетууд таны төслийг бусдад таниулах хүчирхэг хэрэгсэл болно.</p>
                        <ul className="mt-8 space-y-4">
                            <li className="flex items-center gap-4 font-medium"><FaCheckCircle className="text-secondary text-xl" /> Өндөр нарийвчлалтай лазер зүсэлт & 3D хэвлэл</li>
                            <li className="flex items-center gap-4 font-medium"><FaCheckCircle className="text-secondary text-xl" /> Бодит мэт ландшафт & Гэрэлтүүлэг</li>
                            <li className="flex items-center gap-4 font-medium"><FaCheckCircle className="text-secondary text-xl" /> Цаг тухайд нь хүлээлгэн өгөх & Мэргэжлийн үйлчилгээ</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="stat-card bg-bg-off-white p-8 rounded-2xl text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                            <span className="block text-4xl font-bold text-primary font-heading">
                                {inView ? <CountUp end={100} duration={1.5} /> : '0'}+
                            </span>
                            <span className="text-text-gray text-sm">Гүйцэтгэсэн Төсөл</span>
                        </div>
                        <div className="stat-card bg-bg-off-white p-8 rounded-2xl text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                            <span className="block text-4xl font-bold text-primary font-heading">
                                {inView ? <CountUp end={50} duration={10} /> : '0'}+
                            </span>
                            <span className="text-text-gray text-sm">Сэтгэл Ханамжтай Харилцагч</span>
                        </div>
                        <div className="stat-card bg-bg-off-white p-8 rounded-2xl text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md col-span-2 md:col-span-1 md:col-start-1 md:col-end-3 lg:col-auto">
                            <span className="block text-4xl font-bold text-primary font-heading">
                                {inView ? <CountUp end={8} duration={10} /> : '0'}
                            </span>
                            <span className="text-text-gray text-sm">Жилийн Туршлага</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
