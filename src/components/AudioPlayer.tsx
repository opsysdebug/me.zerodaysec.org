import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, SkipForward, SkipBack, Play, Pause } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // List of music tracks with correct filenames
  const playlist = [
    '/music/1.mp3',
    '/music/2.mp3',
    '/music/3.mp3',
    '/music/4.mp3',
    '/music/5.mp3',
    '/music/6.mp3',
    '/music/7.mp3',
    '/music/8.mp3',
    '/music/9.mp3',
    '/music/10.mp3',
    '/music/11.mp3',
    '/music/12.mp3',
    '/music/13.mp3',
    '/music/14.mp3',
    '/music/15.mp3',
    '/music/16.mp3',
    '/music/17.mp3',
    '/music/18.mp3',
    '/music/19.mp3',
    '/music/20.mp3',
    '/music/21.mp3',
    '/music/background.mp3'
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay prevented, waiting for user interaction");
        setIsPlaying(false);
      }
    };

    // Try to play immediately
    playAudio();

    // Add event listeners for the audio element
    const handleEnded = () => {
      playNextTrack();
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Cleanup
    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [currentTrackIndex]); // Re-run when track changes

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      setIsMuted(!isMuted);
      audioRef.current.muted = !isMuted;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
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
          onClick={togglePlay}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <Play className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          )}
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
        preload="auto"
        autoPlay
      />

      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 truncate text-center">
        {playlist[currentTrackIndex].split('/').pop()?.replace('.mp3', '')}
      </div>
    </div>
  );
};

export default AudioPlayer;