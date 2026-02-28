import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    Lightbulb,
    Target,
    Users,
    ArrowRight,
    CheckCircle2,
    Brain,
    TrendingUp,
    Zap,
    Briefcase,
    Award
} from "lucide-react";
import DavidVideo from "@/assets/DavidVideo.mp4";

export default function ContinuousInnovationFramework() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20"
            >
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                            Insight Wins. <br />
                            <span className="text-[hsl(var(--orange-action))]">Ideas Don't.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl font-light">
                            I help leaders turn insight into innovation, strategy into action, and leadership into measurable results.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10 text-sm md:text-base font-semibold text-[hsl(var(--orange-action))]">
                            <span className="flex items-center gap-2"><Award size={20} /> 50 years of experience</span>
                            <span className="hidden md:inline text-gray-500">|</span>
                            <span>Worked with Reliance, Tata Group, Aditya Birla, Nestlé, SAP, Accenture & more</span>
                        </div>

                    </motion.div>
                </div>
            </motion.section>

            {/* The Challenge */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-xl text-[hsl(var(--orange-action))] font-bold uppercase tracking-wider mb-3">The Challenge</h2>
                            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">Why Smart Organizations Still Struggle to Execute</h3>
                            <p className="text-lg text-muted-foreground mb-6">
                                Most organizations don't fail due to lack of ideas. They fail because:
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Innovation is treated as brainstorming, not disciplined problem-solving",
                                    "Strategy stops at vision statements and decks",
                                    "Leadership development focuses on inspiration, not behavior",
                                    "Teams are aligned on goals—but misaligned on action"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 bg-red-100 p-1 rounded-full">
                                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
                                <p className="text-xl font-semibold text-slate-800 italic">
                                    "The cost isn't confusion. It's missed growth, slow execution, and unrealized potential."
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-[hsl(var(--orange-action))] rounded-3xl rotate-3 opacity-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                alt="Team Meeting"
                                className="relative rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Shift */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[hsl(var(--orange-action))] opacity-5 skew-x-12"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-xl text-[hsl(var(--orange-action))] font-bold uppercase tracking-wider mb-3">The Shift</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">The Real Advantage Is Insight</h3>
                        <p className="text-xl text-gray-300">
                            My work focuses on one thing: Helping leaders make better decisions—and act on them.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Innovation",
                                desc: "Innovation that succeeds is built on deep insight.",
                                icon: Lightbulb
                            },
                            {
                                title: "Strategy",
                                desc: "Strategy that works is built on clear choices.",
                                icon: Target
                            },
                            {
                                title: "Leadership",
                                desc: "Leadership that delivers is built on aligned behavior.",
                                icon: Users
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                            >
                                <div className="w-16 h-16 bg-[hsl(var(--orange-action))] rounded-2xl flex items-center justify-center mb-6 text-white text-3xl shadow-lg shadow-orange-500/20">
                                    <item.icon size={32} />
                                </div>
                                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                                <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why David */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative order-2 lg:order-1 max-w-sm mx-auto"
                        >
                            <div className="absolute -inset-4 bg-[hsl(var(--orange-action))] rounded-full opacity-5 blur-3xl"></div>
                            <video
                                src={DavidVideo}
                                controls
                                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5] mb-6"
                            />
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center relative z-10">
                                <p className="font-display font-bold text-2xl text-slate-900">David Wittenberg</p>
                                <p className="text-[hsl(var(--orange-action))] font-medium">Chief Innovation Officer at 10xGrowth</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-xl text-[hsl(var(--orange-action))] font-bold uppercase tracking-wider mb-3">Why David</h2>
                            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">Not Theory. Not Templates. <br />Real-World Results.</h3>

                            <div className="space-y-6">
                                {[
                                    "50 years of hands-on consulting, training, and executive coaching",
                                    "Former CEO of an innovation consultancy and professor of innovation",
                                    "Author of The Executive's Guide to Innovation",
                                    "Applied Design Thinking to challenges worth hundreds to thousands of crores",
                                    "Built and scaled multiple $1M+ solutions"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <CheckCircle2 className="text-[hsl(var(--orange-action))] shrink-0 mt-1" size={24} />
                                        <p className="text-lg text-slate-700">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-200">
                                <p className="text-2xl font-display font-bold text-slate-900 text-center">
                                    "I don't sell frameworks. I help organizations win."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Offerings */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-xl text-[hsl(var(--orange-action))] font-bold uppercase tracking-wider mb-3">Core Offerings</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Three Ways I Help Organizations Win</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Offering 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="h-2 bg-[hsl(var(--orange-action))]"></div>
                            <div className="p-8">
                                <div className="text-6xl font-display font-bold text-slate-100 mb-4 group-hover:text-[hsl(var(--orange-action))/10] transition-colors">01</div>
                                <h4 className="text-2xl font-bold mb-4 text-slate-900">Design Thinking & Innovation</h4>
                                <p className="text-slate-600 mb-6 font-medium">Innovation that people actually adopt.</p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 size={16} className="text-[hsl(var(--orange-action))]" /> Human-centered, fact-based, repeatable</li>
                                    <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 size={16} className="text-[hsl(var(--orange-action))]" /> Focus on uncovering high-value insights</li>
                                    <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 size={16} className="text-[hsl(var(--orange-action))]" /> Solutions that are meaningful, viable, and accepted</li>
                                </ul>
                                <div className="pt-6 border-t border-slate-100">
                                    <p className="italic text-slate-800 font-medium">"Innovation succeeds when insight comes before ideas."</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Offering 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="h-2 bg-[hsl(var(--blue-tech))]"></div>
                            <div className="p-8">
                                <div className="text-6xl font-display font-bold text-slate-100 mb-4 group-hover:text-[hsl(var(--blue-tech))/10] transition-colors">02</div>
                                <h4 className="text-2xl font-bold mb-4 text-slate-900">Strategy</h4>
                                <p className="text-slate-600 mb-6 font-medium">A plan to win—not a plan to explain.</p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 size={16} className="text-[hsl(var(--blue-tech))]" /> Clear, data-driven, execution-ready strategy</li>
                                    <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 size={16} className="text-[hsl(var(--blue-tech))]" /> Integrates internal realities with market insight</li>
                                    <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 size={16} className="text-[hsl(var(--blue-tech))]" /> Produces real choices, priorities, and initiatives</li>
                                </ul>
                                <div className="pt-6 border-t border-slate-100">
                                    <p className="italic text-slate-800 font-medium">"Strategy is not vision. It's decision."</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Offering 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="h-2 bg-[hsl(var(--green-growth))]"></div>
                            <div className="p-8">
                                <div className="text-6xl font-display font-bold text-slate-100 mb-4 group-hover:text-[hsl(var(--green-growth))/10] transition-colors">03</div>
                                <h4 className="text-2xl font-bold mb-4 text-slate-900">Leadership</h4>
                                <p className="text-slate-600 mb-6 font-medium">Leadership that changes behavior—and outcomes.</p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 size={16} className="text-[hsl(var(--green-growth))]" /> Alignment between goals and actions</li>
                                    <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 size={16} className="text-[hsl(var(--green-growth))]" /> Proven leadership frameworks</li>
                                    <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 size={16} className="text-[hsl(var(--green-growth))]" /> Includes advanced Leadership Action Logics</li>
                                </ul>
                                <div className="pt-6 border-t border-slate-100">
                                    <p className="italic text-slate-800 font-medium">"Leadership matters only when it produces results."</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How I Work */}
            <section id="how-i-work" className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-xl text-[hsl(var(--orange-action))] font-bold uppercase tracking-wider mb-3">How I Work</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Flexible Engagements. Tangible Outcomes.</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Executive Coaching",
                                sub: "One-on-one with senior leaders and boards",
                                items: ["Deep reflection, structured questioning", "Sustainable, self-driven change"],
                                icon: Users
                            },
                            {
                                title: "Training",
                                sub: "High-impact, interactive workshops",
                                items: ["Half-day to multi-day formats", "Customized for your organization"],
                                icon: Brain
                            },
                            {
                                title: "Projects",
                                sub: "Hands-on innovation, strategy, & leadership initiatives",
                                items: ["Build internal capability while delivering outcomes", "Option for guided teams or full execution"],
                                icon: Briefcase
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-slate-200 rounded-xl flex items-center justify-center mb-6 text-slate-700">
                                    <item.icon size={28} />
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h4>
                                <p className="text-sm font-semibold text-[hsl(var(--orange-action))] mb-4">{item.sub}</p>
                                <div className="space-y-2">
                                    {item.items.map((subItem, j) => (
                                        <p key={j} className="text-slate-600 text-sm">{subItem}</p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Is This For You? */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--orange-action))] rounded-bl-full opacity-10"></div>

                        <h2 className="text-3xl font-display font-bold mb-8 text-center">Is This For You?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="font-bold text-green-600 mb-4 flex items-center gap-2">
                                    <CheckCircle2 size={20} /> This Is For You If...
                                </h4>
                                <ul className="space-y-3">
                                    {["You're a CXO, founder, or senior leader", "You're tired of ideas that don't scale or stick", "You want clarity, not complexity", "You value execution as much as thinking"].map((item, i) => (
                                        <li key={i} className="text-slate-700 text-sm flex gap-2">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-red-500 mb-4 flex items-center gap-2">
                                    <TrendingUp size={20} className="rotate-180" /> This Is NOT For You If...
                                </h4>
                                <p className="text-slate-700 italic">
                                    This is not for organizations looking for motivation without change.
                                </p>
                            </div>
                        </div>

                        <div className="text-center pt-8 border-t border-slate-200">
                            <h3 className="text-2xl font-bold mb-2">If Insight Drives Decisions, Results Follow.</h3>
                            <p className="text-muted-foreground mb-8">
                                Whether you need sharper innovation, a strategy that executes, or leadership that aligns action with intent—let's talk.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-[hsl(var(--orange-action))] hover:bg-[hsl(var(--orange-action))/90] text-white h-12 px-8 rounded-full shadow-lg"
                                >
                                    Book a Strategic Conversation
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="h-12 px-8 rounded-full"
                                >
                                    Discuss a Specific Challenge
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Contact Section ID target (hidden) */}
            <div id="contact" className="h-0"></div>
        </div>
    );
}