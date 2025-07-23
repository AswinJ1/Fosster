'use client';
import React from "react";
import { 
    Lightbulb, 
    Play, 
    Clock, 
    CheckCircle, 
    ListChecks, 
    BarChart3, 
    Star, 
    BookOpen, 
    Brain, 
    Users, 
    Timer, 
    Trophy, 
    Mail 
} from "lucide-react";

export default function OpenSourceQuizzes() {
    return (
        <section className="relative w-full min-h-screen bg-white text-black py-16 px-6 sm:px-10 lg:px-20 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto space-y-12">
                
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-3">
                        Open-Source Quizzes – FOSSter 2025
                    </h2>
                    <p className="text-xl text-blue-600 font-medium">
                        Test Your Knowledge. Prove Your FOSS IQ!
                    </p>
                </div>

                {/* What are Open-Source Quizzes? */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mt-16" style={{
                    backgroundImage: "linear-gradient(135deg, rgba(34, 197, 94, 0.02) 0%, rgba(59, 130, 246, 0.02) 100%)",
                }}>
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-blue-100 rounded-full p-3 mr-4">
                            <Lightbulb className="w-7 h-7 text-blue-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-blue-500 text-center">
                            What are Open-Source Quizzes?
                        </h3>
                    </div>
                    <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
                        The Open-Source Quizzes challenge is your opportunity to flex your knowledge of the vast FOSS universe. 
                        From GNU/Linux origins and licensing trivia to major community figures and project histories—this quiz 
                        covers it all. It's engaging, educational, and a fun way to see how deep your open-source roots go!
                    </p>
                </div>

                {/* How to Play & Rules */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mt-16" style={{
                    backgroundImage: "linear-gradient(135deg, rgba(34, 197, 94, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
                }}>
                    <h3 className="text-3xl font-bold text-blue-500 text-center mb-6">
                        How to Play & Rules
                    </h3>
                    <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
                        These quizzes are designed to challenge your memory and quick thinking! Follow the steps and climb to the top of the leaderboard.
                    </p>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
                        {[
                            { icon: Play, color: "bg-blue-100", title: "Select Quiz", subtitle: "Pick your theme" },
                            { icon: Clock, color: "bg-blue-100", title: "Answer Against Time", subtitle: "Beat the clock" },
                            { icon: CheckCircle, color: "bg-yellow-100", title: "Accuracy Matters", subtitle: "Earn points for correct answers" },
                            { icon: ListChecks, color: "bg-purple-100", title: "Instant Feedback", subtitle: "See results instantly" },
                            { icon: BarChart3, color: "bg-pink-100", title: "Climb Leaderboard", subtitle: "Compete with others" }
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className={`${step.color} rounded-full p-3 mb-3 shadow-sm`}>
                                    <step.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <span className="font-semibold text-gray-900 text-sm">{i + 1}. {step.title}</span>
                                <span className="text-xs text-gray-600 mt-1">{step.subtitle}</span>
                            </div>
                        ))}
                    </div>

                    {/* Objective */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8 shadow-sm">
                        <div className="flex items-center mb-2">
                            <div className="bg-blue-500 rounded-full p-2 mr-3">
                                <Star className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-blue-500">Objective</h4>
                        </div>
                        <p className="text-gray-700 font-medium">
                            Answer as many questions correctly as possible—faster than anyone else—to prove your command of open-source knowledge.
                        </p>
                    </div>

                    {/* Why Play */}
                    <div>
                        <h4 className="text-xl font-bold text-blue-500 text-center mb-6">Why Play Open-Source Quizzes?</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: BookOpen, color: "bg-blue-100", title: "Expand Knowledge", desc: "Reinforce your FOSS fundamentals." },
                                { icon: Brain, color: "bg-blue-100", title: "Test Memory", desc: "Recall what you've learned & used." },
                                { icon: Users, color: "bg-yellow-100", title: "Friendly Competition", desc: "Challenge friends & earn bragging rights." }
                            ].map((feature, i) => (
                                <div key={i} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                    <div className={`${feature.color} rounded-full p-2 mt-1`}>
                                        <feature.icon className="w-5 h-5 text-blue-600" />
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
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">
                        Scoring & Winning
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Scores are based on the number of correct answers and the speed of completion.
                        Top scorers make the daily leaderboard, and winners are announced throughout the event!
                    </p>
                </div>

                {/* Prizes */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                    <div className="flex items-center mb-4">
                        <div className="bg-blue-100 rounded-full p-3 mr-4">
                            <Trophy className="w-7 h-7 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-500">Prizes</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Top quizmasters will win amazing rewards like FOSSter swag, cool tech gear, and gift vouchers!
                    </p>
                </div>

                {/* Call-to-Action */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl shadow-lg p-12 mt-8 text-center">
                    <h3 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-4">
                        Think You Can Win?
                    </h3>
                    <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                        If your brain is a database of open-source facts and trivia, step up and prove your FOSS IQ at FOSSter 2025!
                    </p>
                    <a
                        href="/register"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg"
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
                            Want to connect with passionate open-source minds? Sponsor prizes for the Game Zone’s Open-Source Quizzes and gain visibility among engaged developers.
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Showcase your brand to a tech-savvy, curious crowd.</li>
                            <li>Support continuous learning in the open-source space.</li>
                            <li>Meet developers with a strong grasp of software freedom and collaboration.</li>
                        </ul>
                        <p className="text-gray-700">
                            Contact us at: <a href="mailto:sponsors@fosster.in" className="text-green-500 font-semibold">sponsors@fosster.in</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
