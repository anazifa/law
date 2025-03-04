import { NextResponse } from 'next/server'
import { z } from 'zod'
import jwt from 'jsonwebtoken'

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  accountType: z.enum(['seeker', 'firm']),
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
    const validatedData = signupSchema.parse(body)

    // Check if user already exists
    if (MOCK_USERS.some(u => u.email === validatedData.email)) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      )
    }

    // In a real app, you would:
    // 1. Hash the password
    // 2. Store the user in a database
    // 3. Generate a JWT token with proper expiration
    const newUser = {
      id: String(MOCK_USERS.length + 1),
      ...validatedData,
    }

    MOCK_USERS.push(newUser)

    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    const { password, ...userWithoutPassword } = newUser

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

    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 