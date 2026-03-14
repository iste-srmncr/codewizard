"use client"
import { VotingInterface } from '../components/VotingInterface'

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl font-bold mb-8">Flow Voting System</h1>
      <VotingInterface />
    </main>
  )
}