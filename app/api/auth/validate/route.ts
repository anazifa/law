import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key' // In production, use a proper secret key

// This is a mock user database - in a real application, you would use a proper database
const MOCK_USERS = [
  {
    id: '1',
    email: 'test@example.com',
    password: 'password123', // In a real app, this would be hashed
    firstName: 'Test',
    lastName: 'User',
    accountType: 'seeker',
  },
]

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('Authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Missing or invalid authorization header' },
        { status: 401 }
      )
    }

    const token = authHeader.split(' ')[1]

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; email: string }
      const user = MOCK_USERS.find(u => u.id === decoded.userId)

      if (!user) {
        return NextResponse.json(
          { error: 'User not found' },
          { status: 404 }
        )
      }

      const { password, ...userWithoutPassword } = user
      return NextResponse.json(userWithoutPassword)
    } catch (jwtError) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Token validation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 