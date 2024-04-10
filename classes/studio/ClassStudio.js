//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name,
        this.mass = mass,
        this.scores = scores
    }
    addScore(newScore) {
        this.scores.push(newScore)
    }
    average() {
        let scoreTotal = 0
        for (let i = 0; i < this.scores.length; i++){
            scoreTotal += this.scores[i]
        }
        let average = Math.round((scoreTotal/this.scores.length) * 10) / 10
        return average
    }
    status() {
        let status = ''
        if (this.average() < 70) {
            status = 'Rejected'
        } else if (this.average() >= 70 && this.average() < 80) {
            status = 'Probationary'
        } else if (this.average() >= 80 && this.average() < 90) {
            status = 'Reserve'
        } else status = 'Accepted'
        return `${this.name} earned an average test score of ${this.average()} and has a status of ${status}.`
    }
}

let candidate1 = new CrewCandidate('Bubba Bear', 135, [88,85,90])
let candidate2 = new CrewCandidate('Merry Maltese', 1.5, [93,88,97])
let candidate3 = new CrewCandidate('Glad Gator', 225, [75,78,62])

// console.log(candidate1.name, candidate2.name, candidate3.name)


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

candidate1.addScore(83)
console.log(candidate1.scores)
console.log(candidate1.average())
console.log(candidate2.average())
console.log(candidate3.average())

console.log(candidate1.status())
console.log(candidate2.status())
console.log(candidate3.status())


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let testsTaken = 0
while (candidate3.average() < 80) {
    candidate3.addScore(90)
    testsTaken++
}
console.log(candidate3.status(), `It only took ${testsTaken} additional tests.`)

while (candidate3.average() < 90) {
    candidate3.addScore(90)
    testsTaken++
}
console.log(candidate3.status(), `It only took ${testsTaken} additional tests.`)
