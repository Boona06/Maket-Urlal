import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const btn = form.querySelector('button');

        setStatus('sending');
        btn.disabled = true;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxHY2Budj5DsqzdsiA3Fvq86E7U0OUcNgZ_N0hQ0prnBigELGmmUw61EUkvH5okJwdk/exec';

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(data)
            });
            setStatus('success');
            alert('Таны хүсэлтийг хүлээн авлаа! Бид тантай удахгүй холбогдох болно.');
            form.reset();
        } catch (error) {
            console.error('Fetch Error:', error);
            setStatus('error');
            alert('Алдаа гарлаа. Та дахин оролдоно уу.');
        } finally {
            setStatus('');
            btn.disabled = false;
        }
    };

    return (
        <section id="contact" className="section bg-white">
            <div className="container px-8 mx-auto max-w-[1200px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 bg-white rounded-3xl overflow-hidden shadow-lg">
                    <div className="contact-info bg-primary text-text-light p-12">
                        <h2 className="text-text-light mb-4 text-3xl font-heading">Таны төсөөллийг хамтдаа бүтээцгээе</h2>
                        <p className="text-slate-300 mb-12">Төслөө эхлүүлэхэд бэлэн үү? Бидэнтэй холбогдож зөвлөгөө, үнийн санал аваарай.</p>

                        <div className="flex items-start gap-4 mb-8">
                            <FaPhoneAlt className="text-secondary text-xl mt-1" />
                            <div>
                                <h4 className="text-text-light text-lg mb-1 font-body">Утас</h4>
                                <p className="text-slate-400 text-[0.95rem] m-0">+976 9911-XXXX (Placeholder)</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 mb-8">
                            <FaEnvelope className="text-secondary text-xl mt-1" />
                            <div>
                                <h4 className="text-text-light text-lg mb-1 font-body">И-мэйл</h4>
                                <p className="text-slate-400 text-[0.95rem] m-0">info@maketurlal.mn (Placeholder)</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 mb-8">
                            <FaMapMarkerAlt className="text-secondary text-xl mt-1" />
                            <div>
                                <h4 className="text-text-light text-lg mb-1 font-body">Хаяг</h4>
                                <p className="text-slate-400 text-[0.95rem] m-0">Улаанбаатар, Монгол Улс</p>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-12">
                            <a href="https://www.facebook.com/Maketurlal/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-text-light transition-all duration-300 hover:bg-secondary hover:text-primary">
                                <FaFacebookF className="w-4 h-4 fill-current" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-text-light transition-all duration-300 hover:bg-secondary hover:text-primary">
                                <FaInstagram className="w-4 h-4 fill-current" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-text-light transition-all duration-300 hover:bg-secondary hover:text-primary">
                                <FaLinkedinIn className="w-4 h-4 fill-current" />
                            </a>
                        </div>
                    </div>

                    <div className="p-12">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Таны нэр" required className="input-field" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="И-мэйл хаяг" required className="input-field" />
                            </div>
                            <div className="form-group">
                                <input type="tel" name="phone" placeholder="Утасны дугаар" required className="input-field" />
                            </div>
                            <div className="form-group">
                                <select name="service_type" className="input-field">
                                    <option value="">Сонирхож буй үйлчилгээ</option>
                                    <option value="architectural">Барилгын макет</option>
                                    <option value="industrial">Үйлдвэрийн макет</option>
                                    <option value="interior">Интерьер макет</option>
                                    <option value="other">Бусад</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea name="message" rows="5" placeholder="Нэмэлт тайлбар" required className="input-field"></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full cursor-pointer">
                                {status === 'sending' ? 'Илгээж байна...' : 'Илгээх'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
