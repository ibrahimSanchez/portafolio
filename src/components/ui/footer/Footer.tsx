import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-background-secondary text-gray-300 py-8">
            <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
                {/* Información de contacto */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-2">Contact Me</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-button-secondary transition-colors"
                            >
                                <FaWhatsapp className="inline-block mr-2" />
                                +53 54644183
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:example@domain.com"
                                className="hover:text-blue-500 transition-colors"
                            >
                                <MdEmail className="inline-block mr-2" />
                                sanchezibrahim296@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Enlaces a redes sociales */}
                <div className="mt-6 md:mt-0 text-center">
                    <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors"
                        >
                            <FaFacebook size={24} />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition-colors"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition-colors"
                        >
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>

                {/* Nota final */}
                <div className="mt-6 md:mt-0 text-center md:text-right">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Ibrahim. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
