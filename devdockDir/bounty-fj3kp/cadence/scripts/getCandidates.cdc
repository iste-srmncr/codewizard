import Voting from 0xVoting

pub fun main(): {UInt64: Voting.Candidate} {
    return Voting.getCandidates()
}