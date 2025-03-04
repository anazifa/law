import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  accountType?: 'seeker' | 'firm'
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (userData: {
    email: string
    password: string
    firstName: string
    lastName: string
    accountType: 'seeker' | 'firm'
  }) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on mount
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('auth-token')
        if (token) {
          // Validate token with your backend
          const response = await fetch('/api/auth/validate', {
            headers: { Authorization: `Bearer ${token}` }
          })
          if (response.ok) {
            const userData = await response.json()
            setUser(userData)
          } else {
            localStorage.removeItem('auth-token')
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      
      if (!response.ok) {
        throw new Error('Login failed')
      }

      const { user: userData, token } = await response.json()
      localStorage.setItem('auth-token', token)
      setUser(userData)
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  const signup = async (userData: {
    email: string
    password: string
    firstName: string
    lastName: string
    accountType: 'seeker' | 'firm'
  }) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })

      if (!response.ok) {
        throw new Error('Signup failed')
      }

      const { user: newUser, token } = await response.json()
      localStorage.setItem('auth-token', token)
      setUser(newUser)
    } catch (error) {
      console.error('Signup error:', error)
      throw error
    }
  }

  const logout = async () => {
    localStorage.removeItem('auth-token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 