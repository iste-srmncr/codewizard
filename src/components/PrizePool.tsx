import React from 'react';

const prizeTiers = [
  {
    place: 'Winner',
    amount: '₹15,000',
    emoji: '🥇',
  },
  {
    place: '1st Runner-Up',
    amount: '₹10,000',
    emoji: '🥈',
  },
  {
    place: '2nd Runner-Up',
    amount: '₹5,000',
    emoji: '🥉',
  },
];

export function PrizePool() {
  return (
    <section className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute top-10 left-10 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Prize Pool</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compete for a chance to win amazing prizes and recognition for your innovative solutions
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          {/* Total Prize Pool card */}
          <div className="w-full max-w-md mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative rounded-xl p-6 backdrop-blur-sm transition-transform duration-300 ease-out group-hover:scale-[1.03]" style={{background: 'rgba(20, 20, 35, 0.85)', border: '2px solid rgba(255, 215, 0, 0.4)', boxShadow: '0 0 20px rgba(255, 215, 0, 0.15)'}}>
                <h3 className="text-xl font-bold mb-2 text-center text-gray-300">Total Prize Pool</h3>
                <div className="text-4xl font-bold mb-3 text-center" style={{color: '#FFD700'}}>
                  ₹30,000+
                </div>
                <p className="text-gray-400 text-center text-sm">
                  Cash Prizes + Certificates + Brand Goodies
                </p>
              </div>
            </div>
          </div>

          {/* Prize tier cards */}
          <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 max-w-screen-md mx-auto">
            {prizeTiers.map((prize, index) => (
              <div key={index} className="w-full md:w-1/3">
                <div className="relative group h-full">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)' }}
                  />
                  <div className="relative rounded-xl p-6 backdrop-blur-sm h-full flex flex-col justify-center transition-transform duration-300 ease-out group-hover:scale-[1.04]" style={{background: 'rgba(20, 20, 35, 0.85)', border: '1px solid rgba(255, 255, 255, 0.1)', transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out'}}>
                    <div className="flex justify-center mb-4" style={{fontSize: '52px', lineHeight: 1}}>
                      {prize.emoji}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center">{prize.place}</h3>
                    <div className="text-3xl font-bold mb-4 text-center" style={{color: '#FFD700'}}>
                      {prize.amount} CASH
                    </div>
                    <p className="text-gray-400 text-center text-sm">
                      + Certificate + Exciting brand goodies
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Participants banner strip */}
          <div className="w-full max-w-screen-md mx-auto mt-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-purple-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative rounded-xl px-6 py-5 backdrop-blur-sm transition-transform duration-300 ease-out group-hover:scale-[1.02]" style={{background: 'rgba(20, 20, 35, 0.85)', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
                <p className="text-center text-lg">
                  <span className="font-bold text-purple-300">All Participants</span>
                  <span className="text-gray-500 mx-3">—</span>
                  <span className="text-gray-300">Participation Certificate + Exclusive Hackathon Goodies</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
