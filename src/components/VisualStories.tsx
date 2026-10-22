import React, { useRef, useState } from 'react';
import { Play, ChevronRight, X } from 'lucide-react';
import { VISUAL_STORIES } from '../data/carsData';
import { VisualStory } from '../types';

export const VisualStories: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStory, setActiveStory] = useState<VisualStory | null>(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 240, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs relative">
        <h2 className="text-xl font-black text-gray-900 tracking-tight mb-5">
          Car visual stories
        </h2>

        <div className="relative group/stories">
          <div
            ref={containerRef}
            className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1"
          >
            {VISUAL_STORIES.map((story) => (
              <div
                key={story.id}
                onClick={() => setActiveStory(story)}
                className="flex-shrink-0 w-44 sm:w-48 h-72 rounded-2xl overflow-hidden relative cursor-pointer group shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 bg-gray-900"
              >
                {/* Background Image */}
                <img
                  src={story.thumbnail}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {story.duration}
                </div>

                {/* Play Button Icon in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/60 group-hover:scale-110 group-hover:bg-[#f75d34] group-hover:border-[#f75d34] transition-all shadow-md">
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  </div>
                </div>

                {/* Bottom Title */}
                <div className="absolute bottom-0 inset-x-0 p-3.5 z-10">
                  <h3 className="text-white text-xs font-bold line-clamp-2 leading-tight">
                    {story.title}
                  </h3>
                  <span className="text-[10px] text-gray-300 font-medium mt-1 block">
                    {story.views} views
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-4 z-20 w-10 h-10 bg-white rounded-full border border-gray-200 shadow-float flex items-center justify-center text-gray-700 hover:text-[#f75d34] hover:scale-105 active:scale-95 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-50">
          <button
            onClick={() => setActiveStory(VISUAL_STORIES[0])}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f75d34] hover:text-[#e24c23] transition-colors group"
          >
            <span>View All Car Visual Stories</span>
            <div className="w-4 h-4 rounded-full bg-[#f75d34] text-white flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform">
              ›
            </div>
          </button>
        </div>
      </div>

      {/* Story Video Modal Preview */}
      {activeStory && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setActiveStory(null)}>
          <div className="relative max-w-sm w-full bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-black/50 p-2 rounded-full"
            >
              <X size={20} />
            </button>
            <div className="relative h-[550px] flex items-center justify-center">
              <img src={activeStory.thumbnail} alt={activeStory.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 flex flex-col justify-between p-6">
                <div className="text-white text-xs font-bold bg-[#f75d34] px-3 py-1 rounded-full self-start">
                  JJ Motors Story Reel
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">{activeStory.title}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span>Duration: {activeStory.duration}</span>
                    <span>{activeStory.views} viewers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
