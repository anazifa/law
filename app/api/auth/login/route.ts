import { NextResponse } from 'next/server'
import { z } from 'zod'
import jwt from 'jsonwebtoken'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

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

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key' // In production, use a proper secret key

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = loginSchema.parse(body)

    // In a real app, you would:
    // 1. Check the email exists in the database
    // 2. Compare the password hash
    // 3. Generate a JWT token with proper expiration
    const user = MOCK_USERS.find(u => u.email === validatedData.email)

    if (!user || user.password !== validatedData.password) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    const { password, ...userWithoutPassword } = user

    return NextResponse.json({
      user: userWithoutPassword,
      token,
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 