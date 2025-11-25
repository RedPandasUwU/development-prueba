import Link from "next/link";
import { Linkedin, Send, Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
    const socialLinks = [
        { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/appsmartt-com/" },
        { name: "Telegram", icon: Send, url: "https://t.me/Appsmartt_Academy" },
        { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/appsmartt_oficial/" },
        { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/channel/UCX4VYql9lwMwFgmC8NElY1g" },
        { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/Appsmartt/" },
    ];

    return (
        <footer className="bg-[#111] text-white py-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4 px-4">
                {/* Social Media Icons */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00E676] flex items-center justify-center transition-colors group"
                                aria-label={social.name}
                            >
                                <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                            </a>
                        );
                    })}
                    {/* TikTok Icon (custom SVG) */}
                    <a
                        href="https://www.tiktok.com/@appsmartt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00E676] flex items-center justify-center transition-colors group"
                        aria-label="TikTok"
                    >
                        <svg
                            className="w-5 h-5 text-white group-hover:text-black transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                    </a>
                </div>

                {/* Legal Links */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center">
                    <Link href="/terminos-y-condiciones" className="hover:underline text-[#00E676] text-sm sm:text-base">
                        Términos y Condiciones
                    </Link>
                    <Link href="/politica-de-privacidad" className="hover:underline text-[#00E676] text-sm sm:text-base">
                        Política de Privacidad
                    </Link>
                </div>

                {/* Copyright */}
                <p className="text-xs sm:text-sm text-gray-400 text-center">© {new Date().getFullYear()} Appsmartt. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
