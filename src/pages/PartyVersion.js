javascript
function PartyVersion() {
  const [verified, setVerified] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-05-24T23:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!verified) {
    return (
      <div className="min-h-screen bg-[#121212] text-white font-inter p-4 flex items-center justify-center">
        <div className="max

-w-md w-full text-center">
          <h2 className="text-2xl mb-4 text-[#ff00ff] animate-pulse">
            Age Verification Required
          </h2>
          <p className="mb-6">You must be 18 or older to view this content</p>
          <button
            onClick={() => setVerified(true)}
            className="bg-[#ff00ff] hover:bg-[#ff40ff] text-white px-6 py-2 rounded transition-all duration-300"
          >
            I am 18 or older
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white font-inter p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl mb-4 text-[#00ffff] animate-pulse">
            AFTER PROM 2024
          </h1>
          <p className="text-xl text-[#ff00ff]">
            What happens at after prom stays at after prom
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-12">
          <div className="bg-[#1a1a1a] p-4 rounded">
            <span className="text-3xl text-[#00ffff]">{countdown.days}</span>
            <p>Days</p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded">
            <span className="text-3xl text-[#00ffff]">{countdown.hours}</span>
            <p>Hours</p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded">
            <span className="text-3xl text-[#00ffff]">{countdown.minutes}</span>
            <p>Minutes</p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded">
            <span className="text-3xl text-[#00ffff]">{countdown.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div
            className="bg-[#1a1a1a] p-6 rounded cursor-pointer hover:bg-[#2a2a2a] transition-all duration-300"
            onClick={() => setShowSecret(!showSecret)}
          >
            <h3 className="text-[#ff00ff] mb-4">
              Mysterious Performances Await
            </h3>
            <p className="text-gray-400">
              Whispers speak of unexpected guests and mind-bending shows...
            </p>
            {showSecret && (
              <p className="mt-4 text-[#00ffff]">
                First hint: Watch for the neon butterfly...
              </p>
            )}
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded relative overflow-hidden">
            <h3 className="text-[#ff00ff] mb-4">Dress Code Enigma</h3>
            <p className="text-gray-400">
              When darkness falls, let your true colors glow...
            </p>
            <div className="absolute -bottom-2 -right-2 text-6xl opacity-10">
              🦋
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[#00ffff] mb-4">
            More secrets will be revealed as time draws near...
          </p>
          <div className="text-sm text-gray-500">
            Coordinates will be disclosed to ticket holders
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes smoke {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: translateY(-50px) scale(1.5); opacity: 0; }
        }

        .bg-[#121212]::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
          animation: smoke 8s infinite;
        }
      `}</style>
    </div>
  );
}

export default PartyVersion;
```
6. Create a `tailwind.config.js` file:
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}