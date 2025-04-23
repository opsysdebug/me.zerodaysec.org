import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, SkipForward, SkipBack } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // List of music tracks
  const playlist = [
    '/music/Ghost Group - #Cyberattack.mp3',
    '/music/Ghost Group - #springbackup3',
    '/music/Ghost Group - Carding Talk BertuahJet.mp3',
    '/music/Ghost Group - Teaser Hacker.mp3',
    '/music/Ghost Group - Terputuk.mp3',
    '/music/Hackerone Spider - Hacker Tragedy 0x3b.mp3',
    '/music/Hackerone Spider - crawl.mp3',
    '/music/Hackerone Spider - nobacktrack.mp3',
    '/music/Hackerone Spider - volatility.mp3',
    '/music/HipHop Group - Defacer Malingsia.mp3',
    '/music/ONE Khalifa - Hacker DPR.mp3',
    '/music/Offensive Group - #errlsec.mp3',
    '/music/Offensive Group - SG Hackers.mp3',
    '/music/Offensive Group - I Am a Problem.mp3',
    '/music/Offensive Group - Im still invisible.mp3',
    '/music/Offensive Group - Master ADB Shell.mp3',
    '/music/Offensive Group - Master Reverse Shell.mp3',
    '/music/Offensive Group - PwnYsec Hacker War (Original Mix).mp3',
    '/music/Offensive Group - Still Spam.mp3',
    '/music/Offensive Group - Wireshark Packet.mp3',
    '/music/Offensive Group - subnet mask off.mp3'
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    // Start playing when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      setIsMuted(!isMuted);
      audioRef.current.muted = !isMuted;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => 
      prevIndex === playlist.length - 1 ? 0 : prevIndex + 1
    );
  };

  const playPreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) => 
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
  };

  const handleTrackEnd = () => {
    playNextTrack();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4">
        <button
          onClick={playPreviousTrack}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          aria-label="Previous track"
        >
          <SkipBack className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>

        <button
          onClick={toggleMute}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <Volume2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          )}
        </button>

        <div className="flex-1">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <button
          onClick={playNextTrack}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          aria-label="Next track"
        >
          <SkipForward className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>
      </div>

      <audio
        ref={audioRef}
        src={playlist[currentTrackIndex]}
        onEnded={handleTrackEnd}
        autoPlay
      />

      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 truncate text-center">
        {playlist[currentTrackIndex].split('/').pop()?.replace('.mp3', '')}
      </div>
    </div>
  );
};

export default AudioPlayer;