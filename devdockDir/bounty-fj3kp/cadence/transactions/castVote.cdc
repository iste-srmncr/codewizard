import Voting from 0xVoting

transaction(candidateId: UInt64) {
    prepare(signer: AuthAccount) {}

    execute {
        Voting.castVote(candidateId: candidateId)
    }
}