import { motion } from "framer-motion";
import { Link } from "wouter";
import logoPng from "@/assets/logo.png";

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[hsl(var(--blue-tech))]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[hsl(var(--orange-action))]/5 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md z-10"
            >
                <div className="text-center mb-8">
                    <Link href="/">
                        <img src={logoPng} alt="10xGrowth" className="h-12 w-auto mx-auto mb-6 cursor-pointer hover:opacity-80 transition-opacity" />
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">{title}</h1>
                    <p className="text-slate-500">{subtitle}</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
                    {/* Accent line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--blue-tech))] to-[hsl(var(--orange-action))]" />

                    {children}
                </div>

                <p className="mt-8 text-center text-sm text-slate-400">
                    © {new Date().getFullYear()} 10xGrowth. All rights reserved.
                </p>
            </motion.div>
        </div>
    );
}
