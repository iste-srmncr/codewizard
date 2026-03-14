pub contract Voting {

    pub struct Candidate {
        pub let id: UInt64
        pub let name: String
        pub var voteCount: UInt64

        init(id: UInt64, name: String) {
            self.id = id
            self.name = name
            self.voteCount = 0
        }
    }

    pub var candidates: {UInt64: Candidate}
    pub var hasVoted: {Address: Bool}
    pub var totalVotes: UInt64
    pub var nextCandidateId: UInt64

    init() {
        self.candidates = {}
        self.hasVoted = {}
        self.totalVotes = 0
        self.nextCandidateId = 1
    }

    pub fun addCandidate(name: String) {
        let newCandidate = Candidate(id: self.nextCandidateId, name: name)
        self.candidates[self.nextCandidateId] = newCandidate
        self.nextCandidateId = self.nextCandidateId + 1
    }

    pub fun castVote(candidateId: UInt64) {
        pre {
            self.candidates[candidateId] != nil: "Candidate does not exist"
            !self.hasVoted[self.account.address]!: "Address has already voted"
        }

        self.candidates[candidateId]?.voteCount = self.candidates[candidateId]?.voteCount! + 1
        self.hasVoted[self.account.address] = true
        self.totalVotes = self.totalVotes + 1
    }

    pub fun getCandidates(): {UInt64: Candidate} {
        return self.candidates
    }

    pub fun getVotes(candidateId: UInt64): UInt64? {
        return self.candidates[candidateId]?.voteCount
    }
}