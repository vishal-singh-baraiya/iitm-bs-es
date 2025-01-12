import { Circle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const pathSteps = [
  {
    title: 'Foundation',
    duration: '',
    description: 'Build strong fundamentals in mathematics, statistics, and programming',
    pointers: [
      'English I',
      'Math for Electronics I',
      'English II',
      'Electronic Systems Thinking and Circuits',
      'Electronic Systems Thinking and Circuits Lab',
      'Introduction to C Programming',
      'C Programming Laboratory',
      'Introduction to Linux and Programming',
      'Linux Systems Laboratory',
      'Digital Systems',
      'Electrical and Electronic Circuits',
      'Electronics Laboratory',
      'Embedded C Programming',
      'Embedded C Programming Laboratory'
    ],
  },
  {
    title: 'Diploma in Electronics Systems',
    duration: '',
    description:
      'Master advanced electronics, digital systems, and signal processing, with project work.',
    pointers: [
      'Math for Electronics II',
      'Signals and Systems',
      'Analog Electronic Systems',
      'Analog Electronics Laboratory',
      'Python Programming',
      'Digital System Design',
      'Digital System Design Laboratory',
      'Digital Signal Processing',
      'Sensors and Applications',
      'Sensors Laboratory',
      'Control Engineering',
      'Electronics System Project',
    ],
  },
  {
    title: 'BSc in Electronics Systems',
    duration: '',
    description: 'Deep dive into embedded systems, electromagnetic fields, and professional growth.',
    pointers: [
      'Embedded Linux and FPGAs',
      'Embedded Linux and FPGAs Lab',
      'Electromagnetic Fields and Transmission Lines',
      'Electronic Product Design',
      'Strategies for Professional Growth',
    ],
  },
  {
    title: 'BS in Electronics Systems and Applications',
    duration: '',
    description: 'Master advanced topics like IoT, VLSI, and specialized electives.',
    pointers: [
      'Probability and Statistics',
      'Communication Systems',
      'Internet of Things (IoT)',
      'Semiconductor Devices and VLSI Technology',
      'Analog Circuits',
      'Digital IC Design',
      'Power Management for Electronic Systems',
      'Biomedical Electronic Systems',
    ],
  },
];

export default function LearningPath() {
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleStep = (index: any) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <section className="mt-16">
      <h3 className="text-2xl font-bold text-white mb-8">Learning Path</h3>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#FF4B4B]/20" />
        <div className="space-y-8">
          {pathSteps.map((step, index) => (
            <div key={index} className="relative pl-12">
              <Circle
                className="absolute left-2 -translate-x-1/2 w-5 h-5 text-[#4b84ff]"
                fill="#1A1A1A"
              />
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-white">{step.title}</h4>
                  <span className="text-sm text-[#4b7eff] bg-[#FF4B4B]/10 px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                <p className="text-gray-300">{step.description}</p>
                <button
                  onClick={() => toggleStep(index)}
                  className="flex items-center text-sm text-[#4b87ff] mt-4"
                >
                  {expandedStep === index ? (
                    <>
                      Hide Courses <ChevronUp className="ml-1 w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Show Courses <ChevronDown className="ml-1 w-4 h-4" />
                    </>
                  )}
                </button>
                {expandedStep === index && (
                  <ul className="mt-4 pl-6 list-disc text-gray-300">
                    {step.pointers.map((pointer, i) => (
                      <li key={i}>{pointer}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
