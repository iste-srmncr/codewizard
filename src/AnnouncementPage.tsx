import React, { useState, useEffect } from 'react';
import { Calendar, User, Link as LinkIcon, ExternalLink, Clock, Info } from 'lucide-react';
import announcementsData from './components/data/announcements.json';
import backgroundSvg from './assets/bgsvg.webp';

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  time: string;
  sender: string;
  url?: string;
  isLatest?: boolean;
}

// Simple component to render HTML content
const RichContent = ({ content }: { content: string }) => (
  <div 
    dangerouslySetInnerHTML={{ __html: content }}
    className="rich-content"
  />
);

export function AnnouncementsPage() {
  const [announcements] = useState<Announcement[]>(announcementsData.announcements);
  const [fixedAnnouncement, setFixedAnnouncement] = useState<Announcement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const latest = announcements.find(a => a.isLatest);
    if (latest) {
      setFixedAnnouncement(latest);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [announcements]);

  return (
    <div
      className="min-h-screen bg-black-dark text-white bg-grain-texture bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${backgroundSvg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', 
        backgroundColor: '#010409'
      }}
    >
      {/* Fixed Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-gray-900/95 backdrop-blur-sm shadow-lg'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Latest Update label with icon */}
              <span className="flex items-center gap-2 px-3 py-1 bg-purple-500/20 rounded-full text-xs md:text-sm font-semibold">
                <Info className="w-4 h-4 text-purple-400" />
                Latest Update
              </span>
              {/* Announcement Title */}
              <h2 className="text-xs md:text-sm lg:text-lg font-semibold">
                {fixedAnnouncement?.title || 'Loading...'}
              </h2>
            </div>
            {fixedAnnouncement?.url && (
              <a
                href={fixedAnnouncement.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors"
              >
                <span className="text-xs md:text-sm lg:text-base">View Details</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Announcements
        </h1>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-16 top-0 bottom-0 w-0.5 bg-purple-500/30" />

          <div className="space-y-8">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="relative">
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-16 -translate-x-1/2 top-8 ${
                  announcement.isLatest 
                    ? 'w-6 h-6 border-4 -translate-x-3'
                    : 'w-4 h-4 border-2'
                } rounded-full border-purple-500 bg-gray-900`} />
                <div className="ml-16 md:ml-24">
                  <AnnouncementCard announcement={announcement} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles for rich content */}
      <style jsx global>{`
        .rich-content {
          color: white;
        }
        
        .rich-content strong,
        .rich-content b {
          font-weight: 600;
          color: white;
        }
        
        .rich-content a {
          color: #a78bfa;
          text-decoration: underline;
          cursor: pointer;
        }
        
        .rich-content a:hover {
          color: #c4b5fd;
        }
        
        .rich-content ul,
        .rich-content ol {
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .rich-content li {
          margin-top: 0.5rem;
        }
        
        .rich-content ul {
          list-style-type: disc;
        }
        
        .rich-content ol {
          list-style-type: decimal;
        }
        
        .rich-content p {
          margin-bottom: 1rem;
        }
        
        .rich-content blockquote {
          border-left: 3px solid #a78bfa;
          padding-left: 1rem;
          margin-bottom: 1rem;
          font-style: italic;
          color: #9ca3af;
        }
        
        .rich-content code {
          background-color: rgba(124, 58, 237, 0.1);
          color: #a78bfa;
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
          font-size: 0.875em;
        }
        
        .rich-content pre {
          background-color: #1f2937;
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          overflow-x: auto;
        }
        
        .rich-content pre code {
          background-color: transparent;
          padding: 0;
          color: inherit;
        }
      `}</style>
    </div>
  );
}

function AnnouncementCard({ announcement }: { announcement: Announcement }) {
  return (
    <div
      className={`bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:scale-[1.01] transition-all duration-300 border ${
        announcement.isLatest ? 'border-purple-500/50' : 'border-purple-500/20'
      }`}
    >
      <div className="p-6">
        <div className="flex flex-col gap-1 text-purple-400 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <time>{announcement.date}</time>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400 ml-7">
            {/* <Clock className="w-4 h-4" /> */}
            <time>{announcement.time}</time>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
          {announcement.title}
        </h3>

        <div className="prose prose-invert max-w-none mb-6">
          <RichContent content={announcement.content} />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-purple-500/20 pt-4">
          <div className="flex items-center gap-2 text-gray-400">
            <User className="w-4 h-4" />
            <span>{announcement.sender}</span>
          </div>

          {announcement.url && (
            <a
              href={announcement.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <LinkIcon className="w-4 h-4" />
              <span className="text-sm md:text-base">Read More</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
