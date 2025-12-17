import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-text-gray py-8 text-sm">
            <div className="container px-8 mx-auto max-w-[1200px]">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2024 Maket Urlal. Бүх эрх хуулиар хамгаалагдсан.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="transition-all duration-300 hover:text-text-light">Нууцлалын бодлого</a>
                        <a href="#" className="transition-all duration-300 hover:text-text-light">Үйлчилгээний нөхцөл</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
