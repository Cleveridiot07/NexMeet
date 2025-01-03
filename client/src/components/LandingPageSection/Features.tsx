import { Video, Mic, MessageSquare, Shield } from 'lucide-react'

const features = [
  {
    icon: <Video className="w-12 h-12" />,
    title: 'HD Video Quality',
    description: 'Crystal clear video quality for immersive conversations.',
  },
  {
    icon: <Mic className="w-12 h-12" />,
    title: 'Noise Cancellation',
    description: 'Advanced audio processing for distraction-free calls.',
  },
  {
    icon: <MessageSquare className="w-12 h-12" />,
    title: 'Live Transcription',
    description: 'Real-time speech-to-text for enhanced accessibility.',
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'End-to-End Encryption',
    description: 'Secure communications with state-of-the-art encryption.',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-sky-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Everything you need for perfect calls
          </h2>
          <p className="text-xl text-gray-400">
            Powerful features designed to make your video calls more productive and enjoyable.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 text-sky-800">{feature.icon}</div>
              <h3 className="text-xl text-sky-800 font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

