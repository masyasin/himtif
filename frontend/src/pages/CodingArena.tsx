import { motion } from 'framer-motion';
import { useState } from 'react';

const CodingArena = () => {
  const [activeChallenge, setActiveChallenge] = useState<number | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-900/200/20 text-green-400 border-green-500/30';
      case 'Medium': return 'bg-yellow-900/200/20 text-yellow-400 border-yellow-500/30';
      case 'Hard': return 'bg-red-900/200/20 text-red-400 border-red-500/30';
      default: return 'bg-slate-9500/20 text-slate-400';
    }
  };

  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!activeChallenge ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Header */}
            <div className="text-center mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-display font-bold mb-4"
              >
                HIMTIF <span className="text-brand-secondary">Coding Arena</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-400 max-w-2xl mx-auto"
              >
                Selesaikan tantangan coding, tingkatkan peringkatmu di leaderboard, dan dapatkan poin *reward*!
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Challenges List */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold font-display">Daftar Tantangan</h2>
                  <div className="flex gap-2">
                    <button className="bg-slate-800 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">Filter</button>
                  </div>
                </div>
                
                {challenges.map((challenge) => (
                  <motion.div
                    key={challenge.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-brand-secondary transition-colors group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-1 rounded border text-xs font-bold ${getDifficultyColor(challenge.difficulty)}`}>
                          {challenge.difficulty}
                        </span>
                        <span className="text-brand-secondary font-bold text-sm bg-brand-secondary/10 px-2 py-1 rounded flex items-center gap-1">
                          ✨ {challenge.points} Points
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-secondary transition-colors">{challenge.title}</h3>
                      <p className="text-slate-400 text-sm line-clamp-1">{challenge.desc}</p>
                    </div>
                    <button 
                      onClick={() => setActiveChallenge(challenge.id)}
                      className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-md shrink-0 flex items-center gap-2"
                    >
                      Kerjakan <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Leaderboard & Stats */}
              <div className="space-y-6">
                {/* User Stats Card */}
                <div className="bg-gradient-to-br from-brand-primary to-slate-800 rounded-3xl p-6 border border-slate-700 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-slate-900/20 rounded-full flex items-center justify-center text-xl font-bold">U</div>
                    <div>
                      <div className="text-slate-300 text-xs font-bold">Status Anda</div>
                      <div className="text-xl font-bold">User Demo</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/20 p-3 rounded-xl">
                      <div className="text-slate-400 text-xs">Poin</div>
                      <div className="text-2xl font-bold text-brand-secondary flex items-center gap-1">✨ 0</div>
                    </div>
                    <div className="bg-black/20 p-3 rounded-xl">
                      <div className="text-slate-400 text-xs">Rank</div>
                      <div className="text-2xl font-bold">Unranked</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-3xl border border-slate-700 p-6 sticky top-28">
                  <h2 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
                    <span className="text-2xl">🏆</span> Global Leaderboard
                  </h2>
                  <div className="space-y-4">
                    {leaderboard.map((user, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-700/50 transition-colors">
                        <div className={`w-8 text-center font-bold ${idx === 0 ? 'text-yellow-400 text-xl' : idx === 1 ? 'text-slate-300 text-lg' : idx === 2 ? 'text-amber-600 text-lg' : 'text-slate-500'}`}>
                          #{idx + 1}
                        </div>
                        <div className="w-10 h-10 bg-slate-600 rounded-full flex-shrink-0 flex items-center justify-center font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <div className="flex-grow">
                          <div className="font-bold text-sm">{user.name}</div>
                          <div className="text-xs text-brand-secondary">✨ {user.score} pts</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 py-3 border border-slate-600 rounded-xl text-slate-300 hover:bg-slate-700 hover:text-white transition-colors text-sm font-bold">
                    Lihat Peringkat Lengkap
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        ) : (
          // WORKSPACE / IDE MODE
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-[80vh] flex flex-col">
            <button onClick={() => setActiveChallenge(null)} className="mb-4 text-slate-400 hover:text-white flex items-center gap-2 font-semibold">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Kembali ke Daftar
            </button>
            
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4">
              
              {/* Problem Description */}
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 overflow-y-auto flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold font-display mb-2">{challenges.find(c => c.id === activeChallenge)?.title}</h2>
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${getDifficultyColor(challenges.find(c => c.id === activeChallenge)?.difficulty || '')}`}>
                        {challenges.find(c => c.id === activeChallenge)?.difficulty}
                      </span>
                      <span className="text-brand-secondary font-bold text-xs bg-brand-secondary/10 px-2 py-1 rounded">
                        ✨ {challenges.find(c => c.id === activeChallenge)?.points} Points
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-slate-300 text-sm leading-relaxed space-y-4">
                  <p>{challenges.find(c => c.id === activeChallenge)?.desc}</p>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 font-mono text-xs">
                    <p className="text-slate-500 mb-1">// Example Input:</p>
                    <p className="mb-3 text-green-400">nums = [2,7,11,15], target = 9</p>
                    <p className="text-slate-500 mb-1">// Expected Output:</p>
                    <p className="text-green-400">[0,1]</p>
                  </div>
                </div>
              </div>

              {/* Code Editor Mock */}
              <div className="bg-slate-950 border border-slate-700 rounded-2xl flex flex-col overflow-hidden">
                <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex justify-between items-center">
                  <select className="bg-slate-900 border border-slate-700 text-slate-300 text-xs px-2 py-1 rounded outline-none">
                    <option>JavaScript (Node.js)</option>
                    <option>Python 3</option>
                    <option>C++</option>
                    <option>Java</option>
                  </select>
                  <div className="flex gap-2">
                    <button className="bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold px-3 py-1.5 rounded transition-colors">Run Code</button>
                    <button className="bg-brand-secondary hover:bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded transition-colors">Submit</button>
                  </div>
                </div>
                <div className="p-4 flex-grow font-mono text-sm text-slate-300 relative">
                  {/* Fake Code Editor Content */}
                  <pre className="text-blue-400">/**</pre>
                  <pre className="text-blue-400"> * @param {`{number[]}`} nums</pre>
                  <pre className="text-blue-400"> * @param {`{number}`} target</pre>
                  <pre className="text-blue-400"> * @return {`{number[]}`}</pre>
                  <pre className="text-blue-400"> */</pre>
                  <pre><span className="text-purple-400">function</span> <span className="text-yellow-200">twoSum</span>(nums, target) {'{'}</pre>
                  <pre className="pl-4 text-slate-500">  // Tuliskan kodemu di sini</pre>
                  <pre className="pl-4">  </pre>
                  <pre>{'}'}</pre>
                  <div className="w-0.5 h-4 bg-slate-900 absolute top-[180px] left-8 animate-pulse"></div>
                </div>
                {/* Console Output */}
                <div className="h-32 bg-black border-t border-slate-700 p-3 font-mono text-xs">
                  <div className="text-slate-500 mb-1">Terminal Output</div>
                  <div className="text-green-500">Ready to compile and run...</div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

const challenges = [
  { id: 1, title: 'Array Manipulation & Two Sum', difficulty: 'Easy', points: 10, desc: 'Diberikan sebuah array integer nums dan sebuah integer target, kembalikan indeks dari dua angka sedemikian rupa sehingga jumlahnya sama dengan target. Anda dapat berasumsi bahwa setiap input akan memiliki tepat satu solusi, dan Anda tidak boleh menggunakan elemen yang sama dua kali.' },
  { id: 2, title: 'Valid Palindrome String', difficulty: 'Easy', points: 15, desc: 'Diberikan sebuah string, tentukan apakah itu adalah palindrom, dengan hanya mempertimbangkan karakter alfanumerik dan mengabaikan huruf besar/kecil.' },
  { id: 3, title: 'Implementasi Binary Search Tree', difficulty: 'Medium', points: 30, desc: 'Buatlah struktur data BST lengkap dengan fungsi insert, delete, dan traversal (inorder, preorder, postorder).' },
  { id: 4, title: 'Dynamic Programming: Knapsack Problem', difficulty: 'Hard', points: 50, desc: 'Optimasi pemilihan barang untuk memaksimalkan total value tanpa melebihi kapasitas (W) dari ransel.' },
];

const leaderboard = [
  { name: 'Alex Christian', score: 1250 },
  { name: 'Siti Rahma', score: 1100 },
  { name: 'Budi Santoso', score: 980 },
  { name: 'David Lee', score: 850 },
  { name: 'Nadia Putri', score: 720 },
];

export default CodingArena;
