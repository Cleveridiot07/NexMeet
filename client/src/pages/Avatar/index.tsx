'use client'

import { useState } from 'react'
import { Upload, Check } from 'lucide-react'

export default function AvatarSelection() {
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null)
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null)

  const presetAvatars = [
    './avatar1.jpeg',
    './avatar2.jpeg',
    './avatar3.png',
    './avatar4.jpeg',
    './avatar5.jpeg',
    './avatar6.jpeg',
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        setUploadedAvatar(result)
        setSelectedAvatar(result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-sky-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Choose Your Avatar</h1>
        <p className="text-lg text-gray-300 mb-12">
          Select from our collection or upload your own to personalize your profile
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {presetAvatars.map((avatar, index) => (
            <button
              key={index}
              onClick={() => setSelectedAvatar(avatar)}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all transform ${
                selectedAvatar === avatar
                  ? 'border-blue-400 scale-110'
                  : 'border-transparent hover:border-blue-400/50 hover:scale-125'
              }`}
            >
              <img
                src={avatar}
                alt={`Avatar option ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {selectedAvatar === avatar && (
                <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                  <Check className="w-8 h-8 text-blue-400" />
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center p-8 border-2 border-dashed border-gray-500 rounded-xl hover:border-gray-400 transition-colors">
          <input
            type="file"
            id="avatar-upload"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          <label
            htmlFor="avatar-upload"
            className="cursor-pointer flex flex-col items-center gap-4"
          >
            <div className="w-20 h-20 rounded-full bg-blue-900/50 flex items-center justify-center">
              <Upload className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Upload your own</p>
              <p className="text-sm text-gray-400">PNG, JPG up to 2MB</p>
            </div>
          </label>
          {uploadedAvatar && (
            <div className="mt-4">
              <img
                src={uploadedAvatar}
                alt="Uploaded avatar"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            disabled={!selectedAvatar}
            className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

