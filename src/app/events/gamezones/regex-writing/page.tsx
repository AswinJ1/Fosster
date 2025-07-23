'use client';
import React from "react";
import {
    Lightbulb,
    PenTool,
    FileEdit,
    CheckCircle,
    BarChart3,
    Star,
    Puzzle,
    Code,
    Target,
    Trophy,
    Mail
} from "lucide-react";

export default function RegexWriting() {
    return (
        <section className="relative w-full min-h-screen bg-white text-black py-16 px-6 sm:px-10 lg:px-20 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-purple-600 mb-3">
                        Regex Writing – FOSSter 2025
                    </h2>
                    <p className="text-xl text-indigo-600 font-medium">
                        Pattern Power! Master Regular Expressions.
                    </p>
                </div>

                {/* What is Regex Writing */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mt-16" style={{
                    backgroundImage: "linear-gradient(135deg, rgba(168, 85, 247, 0.02) 0%, rgba(59, 130, 246, 0.02) 100%)",
                }}>
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-purple-100 rounded-full p-3 mr-4">
                            <Lightbulb className="w-7 h-7 text-purple-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-purple-500 text-center">
                            What is Regex Writing?
                        </h3>
                    </div>
                    <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
                        The Regex Writing challenge puts your pattern-matching prowess to the test! 
                        From simple strings to advanced lookaheads — craft efficient and accurate 
                        regular expressions. Think of it as brain training for text parsing!
                    </p>
                </div>

                {/* How to Play & Rules */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mt-16" style={{
                    backgroundImage: "linear-gradient(135deg, rgba(147, 51, 234, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
                }}>
                    <h3 className="text-3xl font-bold text-purple-500 text-center mb-6">
                        How to Play & Rules
                    </h3>
                    <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
                        Test your ability to write accurate and efficient regular expressions with these simple steps:
                    </p>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
                        {[
                            { icon: PenTool, color: "bg-purple-100", title: "Receive Challenge", subtitle: "Get your pattern task" },
                            { icon: FileEdit, color: "bg-indigo-100", title: "Write Regex", subtitle: "Create a precise pattern" },
                            { icon: CheckCircle, color: "bg-yellow-100", title: "Test & Refine", subtitle: "Ensure perfect matching" },
                            { icon: Code, color: "bg-pink-100", title: "Submit Solution", subtitle: "Accuracy matters" },
                            { icon: BarChart3, color: "bg-blue-100", title: "Leaderboard", subtitle: "Climb the ranks" }
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className={`${step.color} rounded-full p-3 mb-3 shadow-sm`}>
                                    <step.icon className="w-6 h-6 text-purple-600" />
                                </div>
                                <span className="font-semibold text-gray-900 text-sm">{i + 1}. {step.title}</span>
                                <span className="text-xs text-gray-600 mt-1">{step.subtitle}</span>
                            </div>
                        ))}
                    </div>

                    {/* Objective */}
                    <div className="bg-gradient-to-r from-purple-50 to-purple-50 border-l-4 border-purple-500 rounded-lg p-6 mb-8 shadow-sm">
                        <div className="flex items-center mb-2">
                            <div className="bg-purple-500 rounded-full p-2 mr-3">
                                <Star className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-purple-500">Objective</h4>
                        </div>
                        <p className="text-gray-700 font-medium">
                            Write the most accurate and concise regex to solve pattern-matching problems. 
                            The top regexers rise to the leaderboard!
                        </p>
                    </div>

                    {/* Why Play */}
                    <div>
                        <h4 className="text-xl font-bold text-purple-500 text-center mb-6">Why Play Regex Writing?</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: Target, color: "bg-purple-100", title: "Master a Crucial Skill", desc: "Regex is core to validation & parsing." },
                                { icon: Puzzle, color: "bg-indigo-100", title: "Problem-Solving Fun", desc: "Regex is like a puzzle for coders." },
                                { icon: Code, color: "bg-pink-100", title: "Practical Application", desc: "Used everywhere from web dev to data science." }
                            ].map((feature, i) => (
                                <div key={i} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                    <div className={`${feature.color} rounded-full p-2 mt-1`}>
                                        <feature.icon className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-gray-900 mb-1">{feature.title}</h5>
                                        <p className="text-sm text-gray-600">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scoring */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mt-16">
                    <h3 className="text-2xl font-bold text-purple-600 mb-4">
                        Scoring & Winning
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Scores are based on accuracy and may factor in regex conciseness or efficiency. 
                        The best-crafted patterns climb the leaderboard. Winners will be announced daily!
                    </p>
                </div>

                {/* Prizes */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                    <div className="flex items-center mb-4">
                        <div className="bg-purple-100 rounded-full p-3 mr-4">
                            <Trophy className="w-7 h-7 text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-purple-500">Prizes</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Precision pays off — top performers will win exclusive FOSSter swag, gadgets, or gift vouchers!
                    </p>
                </div>

                {/* Call-to-Action */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-50 rounded-2xl shadow-lg p-12 mt-8 text-center">
                    <h3 className="text-3xl sm:text-4xl font-bold text-purple-500 mb-4">
                        Think You Can Win?
                    </h3>
                    <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                        If crafting precise patterns excites you, the Regex Writing challenge at FOSSter 2025 is where you belong.
                    </p>
                    <a
                        href="/register"
                        className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg"
                    >
                        Secure Your FOSSter 2025 Pass
                    </a>
                </div>

                {/* Sponsor Section */}
                <div className="mt-16 pt-8 border-t-2 border-gray-100">
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg p-8">
                        <div className="flex items-center mb-4">
                            <Mail className="w-6 h-6 text-purple-500 mr-3" />
                            <h3 className="text-2xl font-bold text-purple-500">
                                Sponsor Our Game Zone Prizes
                            </h3>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Looking to connect with skilled developers? Sponsor prizes for Regex Writing at FOSSter 2025 and boost your brand among tech-savvy problem solvers.
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Get visibility with highly analytical, precision-oriented devs.</li>
                            <li>Support a fun, educational competition that sharpens essential skills.</li>
                            <li>Build community goodwill and connect with standout talent.</li>
                        </ul>
                        <p className="text-gray-700">
                            Contact us at: <a href="mailto:sponsors@fosster.in" className="text-purple-500 font-semibold">sponsors@fosster.in</a>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
