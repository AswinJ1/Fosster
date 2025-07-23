'use client';
import React from "react";
import {
    Keyboard,
    Clock,
    CheckCircle,
    BarChart3,
    Target,
    Zap,
    Edit,
    Trophy,
    Mail
} from "lucide-react";

export default function TypingChallenge() {
    return (
        <section className="relative w-full min-h-screen bg-white text-black py-16 px-6 sm:px-10 lg:px-20 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-3">
                        Typing Challenge – FOSSter 2025
                    </h2>
                    <p className="text-xl text-indigo-600 font-medium">
                        How Fast Can You Code?
                    </p>
                </div>

                {/* What is Typing Challenge */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mt-16" style={{
                    backgroundImage: "linear-gradient(135deg, rgba(236, 72, 153, 0.02) 0%, rgba(59, 130, 246, 0.02) 100%)",
                }}>
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-pink-100 rounded-full p-3 mr-4">
                            <Keyboard className="w-7 h-7 text-pink-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-pink-500 text-center">
                            What is the Typing Challenge?
                        </h3>
                    </div>
                    <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
                        The Typing Challenge tests your speed and accuracy with code snippets. 
                        Type programming lines as quickly and precisely as possible. Speed and precision 
                        together determine your leaderboard rank!
                    </p>
                </div>

                {/* How to Play & Rules */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mt-16" style={{
                    backgroundImage: "linear-gradient(135deg, rgba(236, 72, 153, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
                }}>
                    <h3 className="text-3xl font-bold text-pink-500 text-center mb-6">
                        How to Play & Rules
                    </h3>
                    <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
                        Type fast, type accurately, and climb the leaderboard! Here’s how to play:
                    </p>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
                        {[
                            { icon: Keyboard, color: "bg-pink-100", title: "Access Station", subtitle: "Find a Game Zone station" },
                            { icon: Clock, color: "bg-indigo-100", title: "Start Timer", subtitle: "Your race begins now" },
                            { icon: CheckCircle, color: "bg-yellow-100", title: "Type Precisely", subtitle: "Errors cost time" },
                            { icon: Edit, color: "bg-pink-100", title: "Complete Snippet", subtitle: "Finish the passage" },
                            { icon: BarChart3, color: "bg-blue-100", title: "Leaderboard", subtitle: "See your rank instantly" }
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className={`${step.color} rounded-full p-3 mb-3 shadow-sm`}>
                                    <step.icon className="w-6 h-6 text-pink-600" />
                                </div>
                                <span className="font-semibold text-gray-900 text-sm">{i + 1}. {step.title}</span>
                                <span className="text-xs text-gray-600 mt-1">{step.subtitle}</span>
                            </div>
                        ))}
                    </div>

                    {/* Objective */}
                    <div className="bg-gradient-to-r from-pink-50 to-pink-50 border-l-4 border-pink-500 rounded-lg p-6 mb-8 shadow-sm">
                        <div className="flex items-center mb-2">
                            <div className="bg-pink-500 rounded-full p-2 mr-3">
                                <Target className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-pink-500">Objective</h4>
                        </div>
                        <p className="text-gray-700 font-medium">
                            Type the given code snippet with maximum accuracy and minimum time to win!
                        </p>
                    </div>

                    {/* Why Play */}
                    <div>
                        <h4 className="text-xl font-bold text-pink-500 text-center mb-6">Why Play the Typing Challenge?</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: Zap, color: "bg-pink-100", title: "Boost Speed", desc: "Improve typing speed, essential for devs." },
                                { icon: CheckCircle, color: "bg-indigo-100", title: "Enhance Accuracy", desc: "Reduce mistakes, save debugging time." },
                                { icon: Edit, color: "bg-pink-100", title: "Fun & Competitive", desc: "Quick, engaging challenge for bragging rights." }
                            ].map((feature, i) => (
                                <div key={i} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                    <div className={`${feature.color} rounded-full p-2 mt-1`}>
                                        <feature.icon className="w-5 h-5 text-pink-600" />
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
                    <h3 className="text-2xl font-bold text-pink-600 mb-4">
                        Scoring & Winning
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Scores are based on completion time and accuracy. Penalties apply for typos. 
                        The fastest and most accurate typists will lead the board. Winners announced daily!
                    </p>
                </div>

                {/* Prizes */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                    <div className="flex items-center mb-4">
                        <div className="bg-pink-100 rounded-full p-3 mr-4">
                            <Trophy className="w-7 h-7 text-pink-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-pink-500">Prizes</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Top performers will win exclusive FOSSter swag, gadgets, or gift vouchers!
                    </p>
                </div>

                {/* Call-to-Action */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-50 rounded-2xl shadow-lg p-12 mt-8 text-center">
                    <h3 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-4">
                        Think You Can Win?
                    </h3>
                    <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                        Test your typing skills at FOSSter 2025 and claim the crown of the fastest coder!
                    </p>
                    <a
                        href="/register"
                        className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg"
                    >
                        Secure Your FOSSter 2025 Pass
                    </a>
                </div>

                {/* Sponsor Section */}
                <div className="mt-16 pt-8 border-t-2 border-gray-100">
                    <div className="bg-gradient-to-br from-pink-50 to-indigo-50 rounded-2xl shadow-lg p-8">
                        <div className="flex items-center mb-4">
                            <Mail className="w-6 h-6 text-pink-500 mr-3" />
                            <h3 className="text-2xl font-bold text-pink-500">
                                Sponsor Our Game Zone Prizes
                            </h3>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Partner with us to reward the fastest coders and showcase your brand at FOSSter 2025!
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Reach an audience of tech enthusiasts and developers.</li>
                            <li>Support an engaging, skill-building competition.</li>
                            <li>Boost your visibility in the developer community.</li>
                        </ul>
                        <p className="text-gray-700">
                            Contact us at: <a href="mailto:sponsors@fosster.in" className="text-pink-500 font-semibold">sponsors@fosster.in</a>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
