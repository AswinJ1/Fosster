'use client';
import React from "react";
import { 
    Lightbulb, 
    Play, 
    Clock, 
    Bug, 
    CheckCircle, 
    RotateCcw, 
    Star, 
    Zap, 
    Brain, 
    Target, 
    Trophy, 
    Mail 
} from "lucide-react";

export default function BugFixingRaces() {
    return (
        <section className="relative w-full min-h-screen bg-white text-black py-16 px-6 sm:px-10 lg:px-20 overflow-hidden">
            {/* Removed Background Video */}
            {/* Removed Neon Overlay */}
            {/* Removed Holographic Circuit Background */}
            <div className="relative z-10 max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-3 drop-shadow-none">
                        Bug Fixing Races – FOSSter 2025
                    </h2>
                    <p className="text-xl text-pink-600 font-medium drop-shadow-none">
                        Diagnose. Debug. Dominate!
                    </p>
                </div>

                <div className="relative z-10">
                    {/* What are Bug Fixing Races? - Professional Style */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mt-16" style={{
                        backgroundImage: "linear-gradient(135deg, rgba(34, 197, 94, 0.02) 0%, rgba(59, 130, 246, 0.02) 100%)",
                    }}>
                        <div className="flex items-center justify-center mb-6">
                            <div className="bg-blue-100 rounded-full p-3 mr-4">
                                <Lightbulb className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-blue-500 text-center">
                                What are Bug Fixing Races?
                            </h3>
                        </div>
                        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
                            The Bug Fixing Races are an electrifying challenge designed to test your debugging skills under pressure! 
                            Participants are presented with open-source code snippets containing hidden bugs. Your mission: identify, 
                            understand, and fix them fast. It's a race against the clock and your fellow developers to submit a perfect solution!
                        </p>
                    </div>

                    {/* Professional Rules & Objectives Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mt-16" style={{
                        backgroundImage: "linear-gradient(135deg, rgba(34, 197, 94, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
                    }}>
                        {/* Title */}
                        <h3 className="text-3xl font-bold text-blue-500 text-center mb-6">
                            How to Play & Rules
                        </h3>
                        
                        {/* Description */}
                        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
                            The Bug Fixing Races are an electrifying challenge designed to test your debugging skills under pressure! 
                            Follow these simple steps to participate and dominate the competition.
                        </p>

                        {/* 5-Step Process */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-blue-100 rounded-full p-3 mb-3 shadow-sm">
                                    <Play className="w-6 h-6 text-blue-600" />
                                </div>
                                <span className="font-semibold text-gray-900 text-sm">1. Select Challenge</span>
                                <span className="text-xs text-gray-600 mt-1">Pick your difficulty</span>
                            </div>
                            
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-blue-100 rounded-full p-3 mb-3 shadow-sm">
                                    <Clock className="w-6 h-6 text-blue-600" />
                                </div>
                                <span className="font-semibold text-gray-900 text-sm">2. Start Timer</span>
                                <span className="text-xs text-gray-600 mt-1">Race begins now</span>
                            </div>
                            
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-purple-100 rounded-full p-3 mb-3 shadow-sm">
                                    <Bug className="w-6 h-6 text-purple-600" />
                                </div>
                                <span className="font-semibold text-gray-900 text-sm">3. Debug Code</span>
                                <span className="text-xs text-gray-600 mt-1">Find & fix bugs</span>
                            </div>
                            
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-yellow-100 rounded-full p-3 mb-3 shadow-sm">
                                    <RotateCcw className="w-6 h-6 text-yellow-600" />
                                </div>
                                <span className="font-semibold text-gray-900 text-sm">4. Test Solution</span>
                                <span className="text-xs text-gray-600 mt-1">Verify it works</span>
                            </div>
                            
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-pink-100 rounded-full p-3 mb-3 shadow-sm">
                                    <CheckCircle className="w-6 h-6 text-pink-600" />
                                </div>
                                <span className="font-semibold text-gray-900 text-sm">5. Submit & Score</span>
                                <span className="text-xs text-gray-600 mt-1">Get your rank</span>
                            </div>
                        </div>

                        {/* Objective Callout Box */}
                        <div className="bg-gradient-to-r from-blue-50 to-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8 shadow-sm">
                            <div className="flex items-center mb-2">
                                <div className="bg-blue-500 rounded-full p-2 mr-3">
                                    <Star className="w-5 h-5 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-blue-500">Objective</h4>
                            </div>
                            <p className="text-gray-700 font-medium">
                                Submit a perfectly debugged code snippet in the shortest time possible. Only the sharpest minds survive!
                            </p>
                        </div>

                        {/* Why Play? Features */}
                        <div>
                            <h4 className="text-xl font-bold text-blue-500 text-center mb-6">Why Play Bug Fixing Races?</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                                        <Zap className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-gray-900 mb-1">Lightning Speed</h5>
                                        <p className="text-sm text-gray-600">Learn to solve issues quickly under pressure</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-purple-100 rounded-full p-2 mt-1">
                                        <Brain className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-gray-900 mb-1">Sharp Logic</h5>
                                        <p className="text-sm text-gray-600">Enhance logical thinking and problem-solving</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                                        <Target className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-gray-900 mb-1">Real-World Skills</h5>
                                        <p className="text-sm text-gray-600">Tackle real bugs and learn industry-relevant debugging</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scoring & Winning - Clean Professional Style */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mt-16" style={{
                        backgroundImage: "linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(147, 197, 253, 0.02) 100%)",
                    }}>
                        <h3 className="text-2xl font-bold text-blue-600 mb-4">
                            Scoring & Winning
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Scores are based on the time taken to submit a valid solution.
                            Penalties may be applied for incorrect attempts or inefficient code.
                            The fastest bug slayers rise to the top of the leaderboard — announced
                            daily!
                        </p>
                    </div>

                    {/* Prizes - Blue Accent with Lucide Icon */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8" style={{
                        backgroundImage: "linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(147, 197, 253, 0.02) 100%)",
                    }}>
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-100 rounded-full p-3 mr-4">
                                <Trophy className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-500">Prizes</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Conquer the bugs and win awesome rewards: FOSSter swag, cool gadgets,
                            or valuable gift vouchers!
                        </p>
                    </div>

                    {/* Call-to-Action - Bold Blue Statement with Blue Button */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl shadow-lg p-12 mt-8 text-center" style={{
                        backgroundImage: "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.05), transparent 70%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.05), transparent 70%)",
                    }}>
                        <h3 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-4">
                            Think You Can Win?
                        </h3>
                        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                            If your debugging skills are legendary, the Bug Fixing Races are
                            calling your name. Don't miss out — join the fun and prove your coding
                            chops!
                        </p>
                        <a
                            href="/register"
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg"
                        >
                            Secure Your FOSSter 2025 Pass
                        </a>
                        {/* Minimal decorative elements */}
                        <div className="flex justify-center space-x-4 mt-6 opacity-30">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                    </div>

                    {/* Sponsor Info - Separate Block with Divider */}
                    <div className="mt-16 pt-8 border-t-2 border-gray-100">
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg p-8" style={{
                            backgroundImage: "linear-gradient(135deg, rgba(147, 51, 234, 0.02) 0%, rgba(196, 181, 253, 0.02) 100%)",
                        }}>
                            <div className="flex items-center mb-4">
                                <Mail className="w-6 h-6 text-purple-500 mr-3" />
                                <h3 className="text-2xl font-bold text-purple-500">
                                    Sponsor Our Game Zone Prizes
                                </h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Are you a company looking to connect with top-tier developer talent?
                                Sponsor Bug Fixing Races prizes to support open source, reward
                                brilliance, and build visibility in the dev community!
                            </p>
                            <p className="text-gray-700">
                                To inquire, email us at:{" "}
                                <a
                                    href="mailto:sponsors@fosster.in"
                                    className="text-blue-500 font-semibold underline hover:text-blue-600 transition-colors"
                                >
                                    sponsors@fosster.in
                                </a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
