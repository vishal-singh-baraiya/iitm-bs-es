import Card from '../ui/Card';
import { Quote } from 'lucide-react';

export default function DirectorsMessage() {
  return (
    <div className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Director's Message</h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-[#4b63ff] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <img
              src="https://heritage.iitm.ac.in/sites/default/files/2022-03/prof-kamakoti.png"
              alt="Director"
              className="rounded-lg w-full max-w-md mx-auto border-4 border-white/10"
            />
          </div>
          <Card className="lg:col-span-2 bg-white/5 backdrop-blur-lg border border-white/10 relative">
            <Quote className="absolute top-4 left-4 h-8 w-8 text-[#4b66ff] opacity-50" />
            <div className="pl-12 pt-4">
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              IIT Madras offers a BS program designed to make quality education accessible to all, aligned with the National Educational Policy. With the growing importance of electronics, this program aims to meet industry demands and foster research and development. IIT Madras strives to become a 'Vishwa-guru' (Global Teacher) through innovative approaches to education. Scholarships are available to support students from financially disadvantaged backgrounds.
              </p>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Through this online degree program, we're democratizing access to quality education, enabling students from across India to benefit from IIT Madras' excellence in teaching and research.
              </p>
              <div className="mt-8">
                <h3 className="text-white font-semibold text-xl">Prof. V. Kamakoti</h3>
                <p className="text-[#874bff]">Director, IIT Madras</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}