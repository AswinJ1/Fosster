'use client';
import React from "react";
import { 
    Zap, 
    Monitor, 
    Wrench, 
    FileText, 
    Target, 
    Trophy, 
    Mail 
} from "lucide-react";

export default function CommandLineTasks() {
    return (
        <section className="relative w-full min-h-screen bg-white text-black py-16 px-6 sm:px-10 lg:px-20 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto space-y-12">
                
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-3">
                        Command-Line Tasks – FOSSter 2025
                    </h2>
                    <p className="text-xl text-green-600 font-medium">
                        Master the Terminal. Conquer the Challenge.
                    </p>
                </div>

                {/* What are Command-Line Tasks? */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-3xl font-bold text-blue-500 mb-4">What are Command-Line Tasks?</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        The Command-Line Tasks challenge puts your terminal proficiency to the test! Solve real-world scenarios
                        using core Unix tools — navigate directories, manipulate files, manage processes, and script your way
                        through technical puzzles. Fast thinking and shell mastery are key!
                    </p>
                </div>

                {/* How to Play & Rules */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-3xl font-bold text-blue-500 mb-6">How to Play & Rules</h3>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                        <li><strong>Access the Terminal:</strong> Visit a Command-Line Tasks station at the Game Zone.</li>
                        <li><strong>Receive Your Scenario:</strong> You'll get a real-world challenge in a simulated shell environment.</li>
                        <li><strong>Execute Commands:</strong> Use tools like <code>ls</code>, <code>grep</code>, <code>awk</code>, <code>sed</code>, <code>find</code>, and <code>ssh</code>.</li>
                        <li><strong>Automated Validation:</strong> Your solution will be checked automatically for correctness.</li>
                        <li><strong>Time Your Performance:</strong> Your score is based on speed and accuracy.</li>
                    </ul>
                </div>

                {/* Objective */}
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-blue-500 mb-2">Objective</h4>
                    <p className="text-gray-700">
                        Solve the provided command-line puzzle with precision and speed. Accuracy, efficiency, and correct output determine your rank.
                    </p>
                </div>

                {/* Why Play - With Lucide Icons */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-blue-500 mb-6 text-center">Why Play Command-Line Tasks?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                            <div className="bg-blue-100 rounded-full p-3">
                                <Zap className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-900 mb-1">Boost Productivity</h5>
                                <p className="text-sm text-gray-600">Command-line skills drastically improve daily dev workflows.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                            <div className="bg-green-100 rounded-full p-3">
                                <Monitor className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-900 mb-1">Deepen System Understanding</h5>
                                <p className="text-sm text-gray-600">Learn how your OS behaves under the hood.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                            <div className="bg-yellow-100 rounded-full p-3">
                                <Wrench className="w-6 h-6 text-yellow-600" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-900 mb-1">Problem-Solving Agility</h5>
                                <p className="text-sm text-gray-600">Break down complex issues into efficient terminal operations.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                            <div className="bg-purple-100 rounded-full p-3">
                                <FileText className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-900 mb-1">Essential for Devs</h5>
                                <p className="text-sm text-gray-600">A must-have skill for DevOps, scripting, and backend workflows.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                            <div className="bg-pink-100 rounded-full p-3">
                                <Target className="w-6 h-6 text-pink-600" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-gray-900 mb-1">Engaging & Practical</h5>
                                <p className="text-sm text-gray-600">A fun way to level up an often overlooked but powerful skill.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Prizes - Styled Box */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex items-center mb-4">
                        <div className="bg-blue-100 rounded-full p-3 mr-4">
                            <Trophy className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-500">Prizes</h3>
                    </div>
                    <p className="text-gray-700">
                        Conquer the command line and win exclusive rewards — from cool FOSSter gear to gadgets and gift vouchers!
                    </p>
                </div>

                {/* Call-to-Action */}
                <div className="bg-blue-50 rounded-2xl shadow-lg p-12 text-center">
                    <h3 className="text-3xl font-bold text-blue-500 mb-4">Think You Can Win?</h3>
                    <p className="text-gray-700 mb-6">
                        If the terminal is your playground and you pride yourself on shell mastery, the Command-Line Tasks challenge is for you.
                    </p>
                    <a href="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-transform hover:scale-105">
                        Secure Your FOSSter 2025 Pass
                    </a>
                </div>

                {/* Sponsor Section */}
                <div className="border-t-2 border-gray-100 pt-8">
                    <div className="flex items-center mb-4">
                        <Mail className="w-6 h-6 text-purple-500 mr-2" />
                        <h3 className="text-2xl font-bold text-purple-500">Sponsor Our Game Zone Prizes</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                        Are you a company looking to support the open-source community and gain visibility among developers?
                        FOSSter 2025 seeks prize sponsors for our Game Zone challenges, including the Command-Line Tasks.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>Showcase your brand to an engaged, tech-savvy audience.</li>
                        <li>Support real-world developer skills and reward excellence.</li>
                        <li>Connect with top problem-solvers and future contributors.</li>
                    </ul>
                    <p className="text-gray-700">
                        Contact us at: <a href="mailto:sponsors@fosster.in" className="text-blue-500 font-semibold">sponsors@fosster.in</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
