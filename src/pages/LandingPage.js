javascript
function LandingPage() {
  const [showAgeVerification, setShowAgeVerification] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioStarted && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current
        .play()
        .catch((error) => console.error("Audio playback failed:", error));
    }
  }, [audioStarted]);

  const handlePartyClick = (e) => {
    e.preventDefault();
    setShowAgeVerification(true);
  };

  const handleAgeVerification = (isOldEnough) => {
    if (isOldEnough) {
      window.location.href = "/party";
    }
    setShowAgeVerification(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden font-inter">
      <audio ref={audioRef} src="/mysterious-background.mp3" loop />

      <div className="absolute inset-0 flex">
        <div
          onClick={() => !audioStarted && setAudioStarted(true)}
          className="relative w-1/2 bg-[#121212] hover:w-[55%] transition-all duration-500 ease-in-out flex items-center justify-center cursor-pointer group"
        >
          <div className="absolute inset-0 bg-[url('/dark-fog.png')] opacity-50 animate-fog pointer-events-none" />
          <a
            href="/party"
            onClick={handlePartyClick}
            className="text-white text-4xl md:text-6xl font-bold transform group-hover:scale-110 transition-transform duration-500 hover:text-red-500"
          >
            ENTER IF YOU DARE
          </a>
        </div>

        <div
          onClick={() => !audioStarted && setAudioStarted(true)}
          className="relative w-1/2 bg-white dark:bg-gray-900 hover:w-[55%] transition-all duration-500 ease-in-out flex items-center justify-center cursor-pointer group"
        >
          <div className="absolute inset-0 bg-[url('/light-fog.png')] opacity-30 animate-fog pointer-events-none" />
          <a
            href="/parents"
            className="text-gray-900 dark:text-white text-4xl md:text-6xl font-bold transform group-hover:scale-110 transition-transform duration-500"
          >
            PARENT INFORMATION
          </a>
        </div>
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          PROM 2024
        </h1>
      </div>

      {showAgeVerification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Age Verification
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Are you a student attending prom?
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleAgeVerification(true)}
                className="w-full bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                Yes, I am
              </button>
              <button
                onClick={() => handleAgeVerification(false)}
                className="w-full border border-gray-200 text-gray-900 dark:text-white px-4 py-2 rounded hover:bg-gray-900 hover:text-white transition-colors"
              >
                No, I'm not
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fog {
          0% { transform: translateX(-10%) translateY(0); }
          100% { transform: translateX(10%) translateY(-10%); }
        }
        .animate-fog {
          animation: fog 10s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default LandingPage