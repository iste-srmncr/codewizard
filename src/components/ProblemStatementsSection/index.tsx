import React, { useState, useEffect } from 'react';
import { Section } from '../Section';
import { ProblemBox } from './ProblemBox';
import './ProblemStatementsSection.css';  // Custom CSS file for the modal styling

const problems = [
  {
    title: 'Decentralized Job Marketplace',
    description: 'Build a blockchain-based decentralized job marketplace that revolutionizes how freelancers and employers connect. This platform ensures security and transparency through smart contracts, allowing users to establish tamper-proof agreements without intermediaries.Payments are made in cryptocurrency, offering fast, borderless transactions. The decentralized nature of the platform eliminates middlemen fees, reducing costs for both employers and freelancers. Users can verify work histories and ratings using blockchain, ensuring trust and reliability in the system. Additional features like escrow services, dispute resolution, and skill assessments create a robust ecosystem for efficient talent acquisition. By leveraging blockchain, this platform fosters inclusivity by enabling global access to job opportunities.',
    tracks: ['Web3', 'Fintech']
  },
  {
    title: 'Personalized AI Fitness Coach',
    description: 'Create an AI-powered virtual fitness coach designed to revolutionize personal health management. The application generates personalized workout plans tailored to individual fitness goals, activity levels, and medical history. Leveraging real-time feedback, the coach ensures proper exercise form and intensity, reducing injury risk and enhancing results. Users can track progress through wearable integrations and detailed analytics. With adaptive learning capabilities, the AI evolves recommendations based on user performance, preferences, and goals. The platform can also offer diet suggestions and integrate with telehealth services for holistic health guidance.',
    tracks: ['AI', 'Healthcare']
  },
  {
    title: 'Real-Time Fake News Detection and Reporting',
    description: 'Develop an AI-powered browser plugin or mobile app to combat the spread of misinformation. Using natural language processing and machine learning, the tool analyzes article content, cross-references it with verified sources, and evaluates source credibility. It flags potentially fake news in real-time, empowering users to make informed decisions. The platform includes a reporting mechanism where users can highlight suspicious content for further AI analysis. With interactive features like credibility scoring and educational insights, this tool fosters media literacy while mitigating the societal impact of fake news.',
    tracks: ['AI']
  },
  {
    title: 'QuizPlay Learn',
    description: 'Create an engaging learning platform where users access curated YouTube playlists on various topics and participate in quizzes tied to the content. The platform uses gamification to enhance learning by rewarding users with tokens for correct answers and consistent engagement. These tokens can be redeemed for rewards, encouraging consistent participation. AI-generated quizzes ensure a focus on key concepts while tracking progress. With additional features like content recommendations, leaderboards, and social challenges, QuizPlay Learn fosters an interactive and rewarding learning environment.',
    tracks: ['Learn', 'FinTech']
  },
  {
    title: 'MemeTrend Prediction Platform',
    description: 'Develop a social platform where users predict the next trending meme, viral challenge, or social movement by betting tokens. Participants contribute insights and engage in gamified trend forecasting, with rewards for accurate predictions. The platform uses AI to analyze patterns in social media behavior, sentiment, and trending content, offering insights into potential virality.Blockchain ensures secure token transactions and transparent reward distribution. This platform combines entertainment and community engagement while leveraging predictive analytics for trend discovery.',
    tracks: ['AI', 'Web3']
  },
  {
    title: 'Predictive Supply Chain for Climate Adaptation',
    description: 'Build a predictive supply chain platform that leverages AI to integrate climate data, enabling businesses to adapt logistics and inventory management to changing weather patterns. By analyzing historical and real-time climate data, the tool identifies potential disruptions and recommends strategies to mitigate risks. Industries can optimize transportation routes, inventory storage, and delivery schedules based on environmental factors. This platform helps reduce wastage, improve sustainability, and support industries in achieving climate resilience.',
    tracks: ['AI', 'Sustainable Development']
  },
  {
    title: 'Predictive Analytics for Sustainable Agriculture',
    description: 'Develop an AI-based platform that empowers farmers with predictive analytics for crop yields, weather patterns, and pest outbreaks. Using satellite imagery, IoT devices, and climate data, the tool provides actionable insights to optimize resource use and improve productivity. Farmers receive real-time recommendations on planting, irrigation, and fertilization, promoting sustainable practices. The platform also supports market predictions, enabling farmers to make informed decisions on crop pricing and sales.',
    tracks: ['AI', 'Sustainable Development']
  },
  {
    title: 'AI-Powered Customer Sentiment Analysis Tool',
    description: 'Create an AI tool that analyzes customer feedback, reviews, and social media interactions to determine sentiment toward products or services. The platform employs natural language processing to extract actionable insights from unstructured data, highlighting trends and areas for improvement. Businesses can use the tool to monitor brand reputation, identify pain points, and refine customer experiences. With real-time analytics dashboards, this solution ensures businesses stay ahead in understanding customer needs.',
    tracks: ['AI']
  },
  {
    title: 'Team Collaboration Hub',
    description: 'Develop a secure, decentralized platform for remote teams that includes encrypted real-time messaging, task management, and video conferencing. Blockchain integration ensures secure file sharing and tamper-proof task tracking. This hub supports integrations with productivity tools, AI-powered scheduling, and language translation features, fostering seamless collaboration across global teams.',
    tracks: ['Web3', 'Learn']
  },
  {
    title: 'AI-Based Fraud Detection in Online Transactions',
    description: 'Design an AI-powered fraud detection system to secure online transactions. By analyzing user behavior, transaction patterns, and device data, the tool detects anomalies in real-time, flagging suspicious activities. Advanced algorithms enable proactive measures against fraud attempts, ensuring customer trust.',
    tracks: ['AI', 'FinTech']
  },
  {
    title: 'InsightPod: Interactive Podcast Platform',
    description: 'Create an AI-powered podcast platform where users can explore topic-specific podcasts tailored to their interests. The platform enhances engagement by enabling users to earn rewards for gaining insights and completing quizzes related to the podcast content. It also includes an interactive fact-checking feature, where users can verify claims made during episodes in real time, promoting credible content. With AI-driven recommendations, community discussions, and gamified elements, InsightPod offers an immersive and educational podcast experience.',
    tracks: ['AI', 'Learn', 'FinTech']
  },
  {
    title: 'AI-Driven Mental Wellness Companion',
    description: 'Develop an AI-powered mental wellness app designed to support emotional well-being. The app offers personalized mindfulness exercises, guided meditations, and mental health resources based on user preferences and interactions. By analyzing mood patterns through daily check-ins and activity tracking, the AI provides early intervention suggestions to address potential issues. Integration with wearables enables real-time stress monitoring, while AI-powered chatbots offer empathetic and confidential support. The platform emphasizes proactive mental health management with a user-friendly interface.',
    tracks: [ 'AI', 'Healthcare']
  },
];

export function ProblemStatementsSection() {
  const [selectedProblem, setSelectedProblem] = useState<{ title: string, description: string, tracks: string[] } | null>(null);

  useEffect(() => {
    if (selectedProblem) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [selectedProblem]);

  const handleProblemClick = (problem: { title: string, description: string, tracks: string[] }) => {
    setSelectedProblem(problem);
  };

  const closeModal = () => {
    setSelectedProblem(null);
  };

  return (
    <Section id="problems" title="Problem Statements">
      <div className="grid gap-4 max-w-3xl mx-auto">
        {problems.map((problem, index) => (
          <ProblemBox
            key={index}
            title={problem.title}
            description={problem.description}
            tracks={problem.tracks}
            onViewMore={() => handleProblemClick(problem)}
          />
        ))}
      </div>
      {selectedProblem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2 className="modal-title">{selectedProblem.title}</h2>
            <p className="modal-description">{selectedProblem.description}</p>
            <div className="modal-tracks">
              <h3>Tracks</h3>
              <p>{selectedProblem.tracks.join(', ')}</p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}