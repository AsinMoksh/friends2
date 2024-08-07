function calculateScore() {
    const answers = {
        q1: "blue", // replace with your actual answer
        q2: "New York" // replace with your actual answer
    };
    let score = 0;
    for (let question in answers) {
        const userAnswer = document.getElementById(question).value.toLowerCase();
        if (userAnswer === answers[question].toLowerCase()) {
            score++;
        }
    }
    document.getElementById('result').innerText = `You got ${score} out of ${Object.keys(answers).length} correct!`;
}
