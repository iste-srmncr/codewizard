import Voting from 0xVoting

pub fun main(candidateId: UInt64): UInt64? {
    return Voting.getVotes(candidateId: candidateId)
}