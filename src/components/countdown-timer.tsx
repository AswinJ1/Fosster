'use client';


import { useState, useEffect } from "react";

interface TimeLeft {
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to a future date (example: 3 months from now)
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 3);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ weeks, days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.weeks, label: "Weeks" },
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex justify-center items-center space-x-4 md:space-x-8 py-8">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center">
          <div className="bg-gradient-to-br from-[hsl(235,85%,64%)] to-[hsl(300,85%,70%)] text-white rounded-lg p-4 md:p-6 shadow-lg">
            <div className="text-2xl md:text-4xl font-bold">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm font-medium opacity-90 mt-1">
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}