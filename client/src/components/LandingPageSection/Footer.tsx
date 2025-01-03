'use client'

import { Button } from '../Common Components/Button'
import { Input } from '../Common Components/Input'
import { Textarea } from '../Common Components/Textarea'
import { Label } from '../Common Components/Label'

export default function Footer() {
  return (
    <footer className="bg-sky-900 py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Created By Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Created By</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
                Designed and developed with ❤️ by Your Name
              </p>
              <p className="text-gray-300">
                Building the future of video communication
              </p>
              <div className="pt-4">
                <div className="text-sm text-gray-200">
                  © {new Date().getFullYear()} VideoCall. All rights reserved.
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label className='text-gray-200' htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="rounded-lg"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label className='text-gray-200' htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-lg"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label className='text-gray-200' htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="rounded-lg"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label className='text-gray-200' htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here"
                  className="rounded-lg min-h-[120px]"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 rounded-full bg-sky-700 hover:bg-sky-600 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

