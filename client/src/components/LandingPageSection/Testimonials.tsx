'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../Common Components/Button'

const testimonials = [
  {
    quote: "This video call app has revolutionized our remote team's communication!",
    author: "Sarah J.",
    role: "Tech Startup CEO",
  },
  {
    quote: "The audio transcription feature is a game-changer for our global meetings.",
    author: "Michael L.",
    role: "Project Manager",
  },
  {
    quote: "Crisp video and clear audio make every call feel like we're in the same room.",
    author: "Emily R.",
    role: "Remote Work Consultant",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-16">
            Loved by teams worldwide
          </h2>
          <div className="relative">
            <div className="mb-8">
              <p className="text-2xl italic mb-6">"{testimonials[currentIndex].quote}"</p>
              <div>
                <p className="font-semibold">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                className="p-2 rounded-full"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="p-2 rounded-full"
                onClick={nextTestimonial}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

