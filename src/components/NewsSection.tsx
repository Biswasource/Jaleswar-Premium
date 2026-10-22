import React from 'react';
import { Clock, BookOpen, ChevronRight } from 'lucide-react';
import { NEWS_ARTICLES } from '../data/carsData';
import { NewsArticle } from '../types';

export const NewsSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
          <h2 className="text-xl font-black text-gray-900 tracking-tight">
            News to help choose your car
          </h2>
          <button className="text-xs font-bold text-[#f75d34] hover:text-[#e24c23] flex items-center gap-1">
            <span>More News</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between cursor-pointer border border-transparent hover:border-gray-100 rounded-xl p-2 transition-all hover:shadow-sm"
            >
              <div>
                <div className="relative h-40 rounded-xl overflow-hidden mb-3 bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/75 text-white text-[10px] font-bold rounded-sm uppercase tracking-wider backdrop-blur-xs">
                    {article.tag}
                  </span>
                </div>

                <h3 className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#f75d34] transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </h3>

                <p className="text-[11px] text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] font-medium text-gray-400">
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {article.date}
                </span>
                <span>{article.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CommercialBanner: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-[#0d342b] via-[#104a3e] to-[#0a2720] text-white p-5 sm:p-7 relative border border-emerald-900 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          <div className="md:col-span-7">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-emerald-400 text-xs font-black tracking-wider uppercase">Mahindra VEERO</span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                Commercial Powerhouse
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              Large Deck Length 2700 mm | Payload 1600 kg
            </h3>
            <p className="text-xs text-emerald-100/80 mt-1 max-w-lg">
              India's first multi-energy commercial vehicle with best-in-class mileage, certified 450+ km range, and certified safety.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Range 450+ KM</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Power 48.5 kW & 110 Nm</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Starting at ₹8.25 Lakh*</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col sm:flex-row items-center justify-end gap-3 mt-2 md:mt-0">
            <button
              onClick={() => alert('Brochure and dealership locator sent!')}
              className="w-full sm:w-auto px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-black text-xs rounded-xl shadow-lg transition-colors text-center"
            >
              Book Test Drive Now
            </button>
            <span className="text-[9px] text-gray-400">Sponsored Ad</span>
          </div>

        </div>
      </div>
    </div>
  );
};
