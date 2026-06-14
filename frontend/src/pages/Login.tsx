import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Captcha state
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setCaptchaAnswer('');
  };
  
  // Validation Rules
  const hasStartedTypingNim = nim.length > 0;
  const hasStartedTypingPassword = password.length > 0;
  const hasStartedTypingCaptcha = captchaAnswer.length > 0;

  const isNimValid = nim.length >= 8 && /^\d+$/.test(nim); // NIM usually numbers
  const isPasswordValid = password.length >= 6;
  const isCaptchaValid = parseInt(captchaAnswer) === (num1 + num2);
  
  const isFormValid = isNimValid && isPasswordValid && isCaptchaValid;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-slate-950 pt-32 pb-12">
      {/* Background Animated Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-secondary/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="w-full max-w-[1000px] mx-4 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 items-center">
        
        {/* Left Side: Branding / Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex flex-col justify-center text-left pl-8"
        >
          {/* Logo HIMTIF text */}
          <div className="mb-8">
            <h1 className="text-6xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-2">
              HIMTIF
            </h1>
            <p className="text-xl text-brand-secondary font-bold tracking-widest uppercase">
              Universitas Raharja
            </p>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-sm">
            Portal resmi mahasiswa Teknik Informatika. Masuk untuk mengakses fitur Digital Library, Tech Community, E-Certificate, dan layanan lainnya.
          </p>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-brand-secondary shadow-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-emerald-400 shadow-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Login Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            {/* Glossy overlay */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

            <div className="md:hidden mb-8 text-center">
              <h1 className="text-4xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
                HIMTIF
              </h1>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Selamat Datang Kembali</h2>
            <p className="text-slate-400 mb-8 text-sm">Silakan masukkan kredensial Anda untuk melanjutkan</p>

            <form onSubmit={handleLogin} className="space-y-5">
              
              {/* NIM Input */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">NIM Mahasiswa</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <input 
                    type="text" 
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                    placeholder="Masukkan NIM..."
                    className={`w-full pl-11 pr-12 py-3.5 bg-slate-950/50 border rounded-2xl outline-none text-white transition-all ${
                      hasStartedTypingNim 
                        ? isNimValid ? 'border-emerald-500/50 focus:border-emerald-500' : 'border-red-500/50 focus:border-red-500' 
                        : 'border-slate-700 focus:border-brand-secondary/70'
                    }`}
                  />
                  {/* Inline Validation Icon */}
                  {hasStartedTypingNim && (
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      {isNimValid ? (
                        <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      )}
                    </div>
                  )}
                </div>
                {hasStartedTypingNim && !isNimValid && (
                  <p className="text-red-400 text-xs mt-1.5 ml-1 animate-pulse">NIM harus berupa angka minimal 8 digit</p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password..."
                    className={`w-full pl-11 pr-12 py-3.5 bg-slate-950/50 border rounded-2xl outline-none text-white transition-all ${
                      hasStartedTypingPassword 
                        ? isPasswordValid ? 'border-emerald-500/50 focus:border-emerald-500' : 'border-red-500/50 focus:border-red-500' 
                        : 'border-slate-700 focus:border-brand-secondary/70'
                    }`}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    )}
                  </button>
                </div>
                {hasStartedTypingPassword && !isPasswordValid && (
                  <p className="text-red-400 text-xs mt-1.5 ml-1 animate-pulse">Password minimal 6 karakter</p>
                )}
                <div className="flex justify-end mt-2">
                  <a href="#" className="text-xs text-brand-secondary hover:text-white transition-colors">Lupa Password?</a>
                </div>
              </div>

              {/* Captcha Angka */}
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Verifikasi Keamanan</label>
                <div className="flex gap-4 items-center">
                  <div className="bg-slate-950/50 border border-slate-700 px-6 py-3.5 rounded-2xl flex items-center justify-center font-display font-bold text-xl text-white tracking-widest relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-secondary/10 group-hover:bg-brand-secondary/20 transition-colors"></div>
                    <span className="relative z-10">{num1} + {num2} = ?</span>
                  </div>
                  <button 
                    type="button" 
                    onClick={generateCaptcha}
                    className="p-3.5 bg-slate-800 hover:bg-slate-700 rounded-2xl border border-slate-700 transition-colors text-slate-400 hover:text-white"
                    title="Muat ulang Captcha"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                  </button>
                </div>
                
                <div className="mt-4 relative">
                  <input 
                    type="text" 
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    placeholder="Masukkan hasil perhitungan di atas..."
                    className={`w-full px-5 py-3.5 bg-slate-950/50 border rounded-2xl outline-none text-white transition-all ${
                      hasStartedTypingCaptcha 
                        ? isCaptchaValid ? 'border-emerald-500/50 focus:border-emerald-500' : 'border-red-500/50 focus:border-red-500' 
                        : 'border-slate-700 focus:border-brand-secondary/70'
                    }`}
                  />
                  {hasStartedTypingCaptcha && (
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      {isCaptchaValid ? (
                        <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      )}
                    </div>
                  )}
                </div>
                {hasStartedTypingCaptcha && !isCaptchaValid && (
                  <p className="text-red-400 text-xs mt-1.5 ml-1 animate-pulse">Jawaban perhitungan salah</p>
                )}
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 rounded-2xl font-bold text-white shadow-lg transition-all relative overflow-hidden flex justify-center items-center gap-2 ${
                  isFormValid 
                    ? 'bg-brand-secondary hover:bg-blue-500 shadow-brand-secondary/30 hover:shadow-brand-secondary/50 transform hover:-translate-y-0.5' 
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Memproses...
                  </>
                ) : (
                  <>
                    Masuk ke Sistem
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </>
                )}
              </button>

              <p className="text-center text-sm text-slate-400 mt-6">
                Belum punya akun? <Link to="#" className="text-brand-secondary hover:text-white font-bold transition-colors">Hubungi Admin HIMTIF</Link>
              </p>
            </form>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Login;
