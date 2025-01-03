"use client";

import { Lock, Mail, User, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Button } from "../../components/Common Components/Button";
import { Input } from "../../components/Common Components/Input";
import { Label } from "../../components/Common Components/Label";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="flex h-screen justify-center items-center bg-sky-950">
      <div className="min-h-[90vh] w-[80vw] grid lg:grid-cols-2">
        {/* Left Section */}
        <div className="relative hidden lg:block bg-[#051b2c]">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Abstract Decoration"
              className="object-cover opacity-20"
            />
          </div>
        </div>

        {/* Right Section - Sign Up Form */}
        <div className="flex bg-gray-200 items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-3xl text-gray-50 font-bold">Create your account</h2>
              <p className="mt-2 text-muted-foreground">
                Get started with VideoCall today
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                      <User className="h-5 w-5" />
                    </div>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="pl-10"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email address</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                      <Mail className="h-5 w-5" />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="pl-10"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                      <Lock className="h-5 w-5" />
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      className="pl-10 pr-10"
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                      <Lock className="h-5 w-5" />
                    </div>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      className="pl-10 pr-10"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0a5a8a] hover:bg-[#074a73]"
              >
                Create Account
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-[#0a5a8a] hover:underline">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
