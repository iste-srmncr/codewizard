"use client"
import { useState, useEffect } from 'react'
import * as fcl from '@onflow/fcl'

export function VotingInterface() {
  const [candidates, setCandidates] = useState([])
  const [newCandidateName, setNewCandidateName] = useState('')

  useEffect(() => {
    fetchCandidates()
  }, [])

  const fetchCandidates = async () => {
    try {
      const result = await fcl.query({
        cadence: `import Voting from 0xVoting
                  pub fun main(): {UInt64: Voting.Candidate} {
                    return Voting.getCandidates()
                  }`
      })
      setCandidates(Object.values(result))
    } catch (error) {
      console.error('Error fetching candidates:', error)
    }
  }

  const addCandidate = async () => {
    try {
      const transactionId = await fcl.mutate({
        cadence: `import Voting from 0xVoting
                  transaction(name: String) {
                    prepare(signer: AuthAccount) {}
                    execute {
                      Voting.addCandidate(name: name)
                    }
                  }`,
        args: (arg: any, t: any) => [arg(newCandidateName, t.String)],
        limit: 999
      })
      await fcl.tx(transactionId).onceSealed()
      fetchCandidates()
      setNewCandidateName('')
    } catch (error) {
      console.error('Error adding candidate:', error)
    }
  }

  const castVote = async (candidateId: number) => {
    try {
      const transactionId = await fcl.mutate({
        cadence: `import Voting from 0xVoting
                  transaction(candidateId: UInt64) {
                    prepare(signer: AuthAccount) {}
                    execute {
                      Voting.castVote(candidateId: candidateId)
                    }
                  }`,
        args: (arg: any, t: any) => [arg(candidateId, t.UInt64)],
        limit: 999
      })
      await fcl.tx(transactionId).onceSealed()
      fetchCandidates()
    } catch (error) {
      console.error('Error casting vote:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <input
          type="text"
          value={newCandidateName}
          onChange={(e) => setNewCandidateName(e.target.value)}
          placeholder="Enter candidate name"
          className="p-2 border rounded"
        />
        <button
          onClick={addCandidate}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Candidate
        </button>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Candidates</h2>
        {candidates.map((candidate: any) => (
          <div key={candidate.id} className="p-4 border rounded">
            <p>Name: {candidate.name}</p>
            <p>Votes: {candidate.voteCount}</p>
            <button
              onClick={() => castVote(candidate.id)}
              className="px-4 py-2 bg-green-500 text-white rounded mt-2"
            >
              Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}