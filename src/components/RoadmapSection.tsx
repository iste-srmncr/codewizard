import React, { useState } from 'react';
import { Section } from './Section';
import { Coffee, Code2, Award, Pizza, Users, FileCode2, SquarePen, MonitorCheck, Flame, Clapperboard, Utensils, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const timelineData = {
  registration: [
    {
      // time: 'N/A',
      title: 'Registration Open',
      icon: <SquarePen className="w-6 h-6" />,
      description: 'Kickstart your journey by registering for the event.'
    },
    {
      // time: 'N/A',
      title: 'Team Formation',
      icon: <Users className="w-6 h-6" />,
      description: 'Find your teammates and form a strong team.'
    },
    {
      time: 'Wednesday, 4:00 PM',
      title: 'Problem Statement Release',
      icon: <FileCode2 className="w-6 h-6" />,
      description: 'Understand the challenge you will tackle.'
    },
    {
      // time: 'N/A',
      title: 'Hack Begins Date',
      icon: <Code2 className="w-6 h-6" />,
      description: 'Start your hackathon journey.'
    }
  ],
  day1: [
    {
      time: '10:00 AM - 11:00 AM',
      title: 'Registration',
      icon: <MonitorCheck className="w-6 h-6" />,
      description: 'Complete your registration and settle in.'
    },
    {
      time: '12:00 PM - 01:00 PM',
      title: 'Inauguration',
      icon: <Flame className="w-6 h-6" />,
      description: 'Kick-off the event with an inspiring opening ceremony.'
    },
    {
      time: '02:00 PM - 03:00 PM',
      title: 'Lunch',
      icon: <Pizza className="w-6 h-6" />,
      description: 'Refuel yourself for the rest of the day.'
    },
    {
      time: '04:00 PM',
      title: 'Mentoring Session 1',
      icon: <Users className="w-6 h-6" />,
      description: 'Get guidance from industry experts.'
    },
    {
      time: '08:00 PM - 09:00 PM',
      title: 'Dinner',
      icon: <Utensils className="w-6 h-6" />,
      description: 'Enjoy a delicious meal.'
    },
    {
      time: '11:00 PM',
      title: 'Mentoring Session 2',
      icon: <Users className="w-6 h-6" />,
      description: 'Late-night mentoring to refine your projects.'
    }
  ],
  day2: [
    {
      time: '07:30 AM',
      title: 'Mentoring Session 3 (Final)',
      icon: <Users className="w-6 h-6" />,
      description: 'Final round of mentoring before submissions.'
    },
    {
      time: '08:30 AM - 10:00 AM',
      title: 'Breakfast',
      icon: <Coffee className="w-6 h-6" />,
      description: 'Start your day with a hearty meal.'
    },
    {
      time: '10:30 AM',
      title: 'Finalist Announcement',
      icon: <Award className="w-6 h-6" />,
      description: 'Top 10 teams announced for the final round.'
    },
    {
      time: '10:45 AM - 01:30 PM',
      title: 'Presentations',
      icon: <Clapperboard className="w-6 h-6" />,
      description: '10 minutes PPT + 5 minutes Q&A per team.'
    },
    {
      time: '01:40 PM',
      title: 'Final Announcement & Valedictory',
      icon: <Trophy className="w-6 h-6" />,
      description: 'Top 3 teams announced and valedictory ceremony.'
    },
    {
      time: '02:30 PM - 03:30 PM',
      title: 'Lunch',
      icon: <Pizza className="w-6 h-6" />,
      description: 'Closing lunch for all participants, mentors, and judges.'
    }
  ]
};

export function RoadmapSection() {
  const [activeDay, setActiveDay] = useState('registration');

  return (
    <Section id="roadmap" title="Event Timeline">
      <div className="flex justify-center space-x-4 mb-12">
        <motion.button
          onClick={() => setActiveDay('registration')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 ${
            activeDay === 'registration'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
          }`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Registration
        </motion.button>
        <motion.button
          onClick={() => setActiveDay('day1')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 ${
            activeDay === 'day1'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
          }`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Day 1
        </motion.button>
        <motion.button
          onClick={() => setActiveDay('day2')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 ${
            activeDay === 'day2'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
          }`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Day 2
        </motion.button>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-purple-600/30 transform md:-translate-x-0.5" />

        <AnimatePresence mode="wait">
          <div key={activeDay} className="space-y-8">
            {timelineData[activeDay].map((event, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-purple-600 transform -translate-x-2 mt-6">
                  <div className="absolute w-8 h-8 rounded-full bg-purple-600/20 transform -translate-x-2 -translate-y-2 animate-pulse" />
                </div>

                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-[50%] md:pr-8' : 'md:ml-[50%] md:pl-8'
                }`}>
                  <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3 text-purple-500">
                        {event.icon}
                        <h3 className="text-lg font-bold text-white">{event.title}</h3>
                      </div>
                      <span className="text-sm font-semibold text-purple-400">{event.time}</span>
                    </div>
                    <p className="text-sm text-gray-400">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
