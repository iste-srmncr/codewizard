import React, { useState } from 'react';
import { Section } from './Section';
import { Coffee, Code2, Award, Upload, Pizza, Users,FileCode2,SquarePen,MonitorCheck, Flame, Drum, Speech,Clapperboard } from 'lucide-react';
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
      // time: 'N/A',
      title: 'Problem Statement Release Date',
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
      time: '09:00 AM',
      title: 'In-Campus Registration Desk',
      icon: <MonitorCheck className="w-6 h-6" />,
      description: 'Complete your registration and settle in.'
    },
    {
      time: '10:00 AM',
      title: 'Opening Ceremony',
      icon: <Flame className="w-6 h-6" />,
      description: 'Kick-off the event with an inspiring opening.'
    },
    {
      time: '10:30 AM',
      title: 'Hack Starts',
      icon: <Code2 className="w-6 h-6" />,
      description: 'Begin building your projects.'
    },
    {
      time: '02:00 PM',
      title: 'Lunch',
      icon: <Pizza className="w-6 h-6" />,
      description: 'Refuel yourself for the rest of the day.'
    },
    {
      time: '04:00 PM - 06:00 PM',
      title: 'Mentorship Sessions',
      icon: <Users className="w-6 h-6" />,
      description: 'Get guidance from industry experts.'
    },
    {
      time: '07:00 PM - 08:00 PM',
      title: 'Concode',
      icon: <Code2 className="w-6 h-6" />,
      description: 'Engage in fun coding challenges.'
    },
    {
      time: '08:00 PM',
      title: 'Dinner',
      icon: <Pizza className="w-6 h-6" />,
      description: 'Enjoy a delicious meal.'
    },
    {
      time: '08:30 PM',
      title: 'Fun Activities',
      icon: <Drum className="w-6 h-6" />,
      description: 'Relax and bond with other participants.'
    }
  ],
  day2: [
    {
      time: '08:00 AM - 09:00 AM',
      title: 'Submission',
      icon: <Upload className="w-6 h-6" />,
      description: 'Submit your final projects.'
    },
    {
      time: '10:00 AM',
      title: 'Breakfast',
      icon: <Pizza className="w-6 h-6" />,
      description: 'Start your day with a hearty meal.'
    },
    {
      time: '12:00 PM',
      title: 'Shortlisting Team Declared',
      icon: <Users className="w-6 h-6" />,
      description: 'Announcement of shortlisted teams.'
    },
    {
      time: '01:00 PM',
      title: 'Final Pitches to Judges',
      icon: <Clapperboard className="w-6 h-6" />,
      description: 'Present your project to the judges.'
    },
    {
      time: '02:30 PM',
      title: 'Speaker Sessions',
      icon: <Speech className="w-6 h-6" />,
      description: 'Get inspired by keynote speakers.'
    },
    {
      time: '04:00 PM',
      title: 'Result Declaration',
      icon: <Award className="w-6 h-6" />,
      description: 'Celebrate the winners.'
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
