import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Users, Globe, Award, Briefcase } from "lucide-react";
import ceoImage from "@/assets/ceo.png";

export default function About() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-background overflow-x-hidden selection:bg-[hsl(var(--green-growth))/20]">
            <Navigation />

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative pt-32 pb-20 overflow-hidden"
            >
                {/* Background blobs similar to Home */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
                    <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-[hsl(var(--blue-tech))/10] rounded-full blur-[100px]" />
                    <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] bg-[hsl(var(--green-growth))/10] rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                            Welcome to <span className="text-gradient">10xGrowth</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Discover Why We Are Passionate About Helping Businesses Grow.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Introduction & Mission */}
            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(var(--blue-tech))] to-[hsl(var(--green-growth))] opacity-20 blur-xl rounded-2xl" />
                                <div className="relative bg-white p-8 rounded-2xl border border-border shadow-md">
                                    <p className="text-lg text-muted-foreground leading-loose">
                                        At <span className="font-semibold text-foreground">10xGrowth</span>, we are driven by a singular vision to empower businesses with innovative solutions that unlock their true potential. Established with a passion for problem-solving and a commitment to excellence, we have been serving businesses of all sizes, industries, and aspirations for over a decade.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Team collaboration"
                                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <p className="text-white font-display text-2xl font-bold">Driven by Excellence</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Mission */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                alt="Mission meeting"
                                className="rounded-3xl shadow-2xl w-full object-cover h-[400px] hover:shadow-[hsl(var(--orange-action))/30] transition-shadow duration-300"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-4xl font-display font-bold mb-6">Our <span className="text-[hsl(var(--orange-action))]">Mission</span></h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Our mission is simple yet profound—to be the trusted partner that propels your business forward.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-border hover:border-[hsl(var(--orange-action))] transition-colors">
                                    <div className="mt-1 bg-[hsl(var(--orange-action))] rounded-full p-2 h-fit text-white">
                                        <ArrowRight size={20} />
                                    </div>
                                    <p className="text-muted-foreground">We strive to understand the unique challenges and opportunities that your organization faces.</p>
                                </div>
                                <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-border hover:border-[hsl(var(--orange-action))] transition-colors">
                                    <div className="mt-1 bg-[hsl(var(--orange-action))] rounded-full p-2 h-fit text-white">
                                        <ArrowRight size={20} />
                                    </div>
                                    <p className="text-muted-foreground">Craft tailored solutions that not only address immediate needs but also lay the groundwork for sustained growth.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-[hsl(var(--blue-tech))] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grid-pattern)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
                    >
                        {[
                            { count: "50+", label: "Experts", icon: Users },
                            { count: "200+", label: "Clients", icon: CheckCircle2 },
                            { count: "15+", label: "Years of Experience", icon: Briefcase },
                            { count: "10+", label: "Countries", icon: Globe },
                        ].map((stat, i) => (
                            <motion.div key={i} variants={item} className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
                                <stat.icon className="w-10 h-10 mx-auto mb-4 opacity-80" />
                                <h3 className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.count}</h3>
                                <p className="text-white/80 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CEO Section */}
            <section className="py-32 bg-slate-50 relative z-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative w-64 h-64 mx-auto mb-8">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--blue-tech))] to-[hsl(var(--green-growth))] rounded-full blur-2xl opacity-30 transform translate-y-4" />
                            <img
                                src={ceoImage}
                                alt="Ajay Sanghani"
                                className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10"
                            />
                        </div>
                        <h3 className="text-3xl font-display font-bold text-foreground">AJAY SANGHANI</h3>
                        <p className="text-[hsl(var(--blue-tech))] font-semibold tracking-widest uppercase mt-2">CEO</p>

                        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[hsl(var(--blue-tech))] to-[hsl(var(--green-growth))] mx-auto rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* Career Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-foreground text-white z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[hsl(var(--orange-action))] opacity-5 skew-x-12" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Award className="w-16 h-16 text-[hsl(var(--orange-action))] mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                            Explore Exciting And <br /> Rewarding <span className="text-[hsl(var(--orange-action))]">Career Opportunities</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            To be the part of our team just click on this link
                        </p>
                        <Button
                            size="lg"
                            className="bg-[hsl(var(--orange-action))] hover:bg-[hsl(var(--orange-action))/90] text-white rounded-full px-10 h-16 text-lg shadow-lg hover:shadow-[hsl(var(--orange-action))/40] transition-all hover:scale-105"
                        >
                            View Open Positions <ArrowRight className="ml-2" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
