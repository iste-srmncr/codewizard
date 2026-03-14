import Voting from 0xVoting

transaction(name: String) {
    prepare(signer: AuthAccount) {}

    execute {
        Voting.addCandidate(name: name)
    }
}