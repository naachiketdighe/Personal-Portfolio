"use client"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lock, LogOut } from "lucide-react"

export function AdminLogin() {
  const { isAdmin, login, logout } = useAuth()
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showLogin, setShowLogin] = useState(false)

  const handleLogin = () => {
    const success = login(password)
    if (!success) {
      setError("Invalid password")
    } else {
      setPassword("")
      setError("")
      setShowLogin(false)
    }
  }

  if (isAdmin) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="ghost"
          size="sm"
          className="bg-teal-900/70 text-amber-200 hover:bg-teal-800/70"
          onClick={logout}
        >
          <LogOut className="h-4 w-4 mr-2" /> Admin Logout
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {showLogin ? (
        <Card className="bg-teal-900/90 border-cyan-700/50 w-64">
          <CardContent className="p-4">
            <div className="space-y-3">
              <h3 className="text-amber-200 font-medium text-sm">Admin Login</h3>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-teal-800/70 border border-cyan-700/50 rounded p-2 text-sm text-cyan-100"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleLogin()
                  }
                }}
              />
              {error && <p className="text-red-400 text-xs">{error}</p>}
              <div className="flex justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-cyan-300 hover:text-cyan-200"
                  onClick={() => setShowLogin(false)}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-amber-400 to-yellow-300 text-teal-900 hover:from-amber-300 hover:to-yellow-200 border-none"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          variant="ghost"
          size="sm"
          className="bg-teal-900/70 text-amber-200 hover:bg-teal-800/70"
          onClick={() => setShowLogin(true)}
        >
          <Lock className="h-4 w-4 mr-2" /> Admin
        </Button>
      )}
    </div>
  )
}
