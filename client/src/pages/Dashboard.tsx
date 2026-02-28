import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { supabase } from "@/lib/supabase";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { User, Shield, Zap, TrendingUp, BarChart3 } from "lucide-react";

export default function Dashboard() {
    const [, setLocation] = useLocation();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) {
                setLocation("/login");
            } else {
                setUser(session.user);
            }
            setLoading(false);
        });
    }, [setLocation]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[hsl(var(--blue-tech))]"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-24">
            <Navigation />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Welcome back, {user?.user_metadata?.full_name || user?.email?.split('@')[0]}!
                    </h1>
                    <p className="text-slate-500 text-lg">
                        Your growth engine is running at peak performance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: "Growth Index", value: "92%", icon: TrendingUp, color: "text-emerald-500" },
                        { label: "Action Items", value: "8", icon: Zap, color: "text-amber-500" },
                        { label: "Security Status", value: "Protected", icon: Shield, color: "text-blue-500" },
                        { label: "Analytics", value: "Verified", icon: BarChart3, color: "text-purple-500" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4"
                        >
                            <div className={`p-3 rounded-xl bg-slate-50 ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                                <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--orange-action))]/5 blur-[80px] -mr-32 -mt-32 rounded-full" />

                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                            <User className="mr-3 text-[hsl(var(--blue-tech))]" /> Account Information
                        </h2>

                        <div className="space-y-4 max-w-xl">
                            <div className="flex justify-between py-3 border-b border-slate-50">
                                <span className="text-slate-500">Email</span>
                                <span className="text-slate-900 font-medium">{user?.email}</span>
                            </div>
                            <div className="flex justify-between py-3 border-b border-slate-50">
                                <span className="text-slate-500">Full Name</span>
                                <span className="text-slate-900 font-medium">{user?.user_metadata?.full_name || "Not set"}</span>
                            </div>
                            <div className="flex justify-between py-3 border-b border-slate-50">
                                <span className="text-slate-500">Session ID</span>
                                <span className="text-slate-400 font-mono text-xs truncate ml-4">{user?.id}</span>
                            </div>
                        </div>

                        <Button
                            className="mt-8 bg-[hsl(var(--blue-tech))] text-white px-8"
                            variant="outline"
                            onClick={() => setLocation("/")}
                        >
                            Return Home
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}
