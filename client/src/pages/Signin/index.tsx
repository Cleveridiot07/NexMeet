"use client";

import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Button } from "../../components/Common Components/Button";
import { Input } from "../../components/Common Components/Input";
import { Label } from "../../components/Common Components/Label";
import { Link } from "react-router-dom";

export default function SigninPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen justify-center items-center bg-sky-950">
      <div className="min-h-[90vh] w-[80vw] grid lg:grid-cols-1">
        {/* Right Section - Login Form */}
        <div className="flex bg-gray-200 items-center rounded-3xl justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-3xl text-gray-950 font-bold">Welcome Back</h2>
              <p className="mt-2 text-muted-foreground">
                Sign in to your VideoCall account
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="mb-1" htmlFor="email">Email address</Label>
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
                  <Label className="mb-1" htmlFor="password">Password</Label>
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
                      placeholder="Enter your password"
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
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0a5a8a] hover:bg-[#074a73]"
              >
                Sign In
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Don’t have an account?{" "}
                <Link href="/signup" className="text-sky-700 hover:underline">
                  Create one
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
