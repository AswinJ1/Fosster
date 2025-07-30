'use client';
import Link from 'next/link';
import { Bug, TerminalSquare, BookOpen, Regex, Keyboard } from 'lucide-react';

const games = [
	{
		title: 'Bug Fixing',
		description: 'Debug challenges to test your problem-solving skills.',
		icon: <Bug className="w-8 h-8 text-red-500" />,
		href: '/events/gamezones/bug-fixing',
	},
	{
		title: 'CLI Tasks',
		description: 'Compete in command-line mastery with fun challenges.',
		icon: <TerminalSquare className="w-8 h-8 text-purple-500" />,
		href: '/events/gamezones/commandline-tasks',
	},
	{
		title: 'Open Source Quiz',
		description: 'Knowledge quiz to test your open-source awareness.',
		icon: <BookOpen className="w-8 h-8 text-green-500" />,
		href: '/events/gamezones/opensource-quiz',
	},
	{
		title: 'Regex Writing',
		description: 'Pattern-matching puzzles using regular expressions.',
		icon: <Regex className="w-8 h-8 text-purple-500" />,
		href: '/events/gamezones/regex-writing',
	},
	{
		title: 'Typing Challenge',
		description: 'Speed typing contest to show off your skills.',
		icon: <Keyboard className="w-8 h-8 text-orange-500" />,
		href: '/events/gamezones/typing-challenge',
	},
];

export default function GameZonesPage() {
	return (
		<section className="max-w-6xl mx-auto px-4 py-12">
			{/* Heading */}
			<div className="text-center mb-10">
				<h1 className="text-4xl md:text-5xl font-bold text-blue-700">
					Game Zones at FOSSter 2025
				</h1>
				<p className="text-lg font-semibold text-black mt-3">
					Fun coding activities, quizzes, and challenges to test your skills!
				</p>
			</div>

			{/* Game Zones Intro */}
			<div className="max-w-3xl mx-auto mb-8 text-center">
				<p className="text-base md:text-lg text-gray-700">
					The Game Zones at FOSSter are designed to bring out the best in every
					coder, whether you love debugging, mastering the command line, solving
					quizzes, writing regex, or showing off your typing speed. Participate in
					these interactive challenges to win prizes, learn new tricks, and connect
					with fellow open-source enthusiasts. Each zone offers a unique experience
					and a chance to test your skills in a friendly, competitive environment.
				</p>
			</div>

			{/* Cards Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{games.map((game, index) => (
					<Link
						key={index}
						href={game.href}
						className="block border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-lg hover:scale-105 transition transform duration-300"
					>
						<div className="flex items-center gap-4 mb-4">
							{game.icon}
							<h3 className="text-xl font-semibold text-blue-600">
								{game.title}
							</h3>
						</div>
						<p className="text-gray-600 text-sm">{game.description}</p>
					</Link>
				))}
			</div>
		</section>
	);
}
