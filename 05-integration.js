// ============================================
// Activity 5: Integration - Quiz Application
// ============================================
console.log("🎯🎯 === QUIZ APPLICATION === 🎯🎯\n");

// Quiz data
// สร้าง array ของ object แต่ละ object เป็นคำถาม quiz
const quizzes = [
  {
    question: "What is 5 + 3?",
    options: ["8", "7", "6", "9"], // ตัวเลือก
    correctAnswer: 0, // index ของคำตอบที่ถูก
  },
  {
    question: "What is the capital of Thailand?",
    options: ["Phuket", "Bangkok", "Chiang Mai", "Pattaya"],
    correctAnswer: 1,
  },
  {
    question: "What is the largest planet?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    correctAnswer: 2,
  },
  {
    question: "What is 2^8?",
    options: ["128", "256", "64", "512"],
    correctAnswer: 1,
  },
  {
    question: "Which is NOT a JavaScript data type?",
    options: ["string", "class", "symbol", "boolean"],
    correctAnswer: 1,
  },
];

// Quiz results
let results = []; // เก็บผลลัพธ์การทำ quiz แต่ละข้อ

// Process each quiz
quizzes.forEach((quiz, index) => {
  // จำลองผู้ใช้ตอบ quiz แบบสุ่ม 0-3
  const userAnswer = Math.floor(Math.random() * 4);

  // ตรวจสอบว่าตอบถูกหรือไม่
  const isCorrect = userAnswer === quiz.correctAnswer;

  // เก็บผลลัพธ์ลง array results
  results.push({
    questionNum: index + 1, // ลำดับคำถาม
    question: quiz.question,
    userAnswer: quiz.options[userAnswer], // ตัวเลือกที่ผู้ใช้ตอบ
    correctAnswer: quiz.options[quiz.correctAnswer], // คำตอบที่ถูกต้อง
    isCorrect: isCorrect, // true/false
  });
});

// Display results
console.log("QUIZ RESULTS:");
console.log("─".repeat(60)); // เส้นแบ่งสวยๆ
results.forEach((result) => {
  const status = result.isCorrect ? "✅ CORRECT" : "❌ WRONG";
  console.log(`Q${result.questionNum}: ${result.question}`); // แสดงคำถาม
  console.log(` Your answer: ${result.userAnswer}`); // แสดงคำตอบของผู้ใช้
  if (!result.isCorrect) {
    console.log(` Correct answer: ${result.correctAnswer}`); // แสดงคำตอบถูกถ้าผิด
  }
  console.log(` ${status}`); // แสดง ✅ หรือ ❌
  console.log(); // เว้นบรรทัด
});

// Calculate score
const correctCount = results.filter((r) => r.isCorrect).length; // นับจำนวนถูก
const score = (correctCount / results.length) * 100; // คำนวณ % ถูก
console.log("─".repeat(60));
console.log(
  `FINAL SCORE: ${correctCount}/${results.length} (${score.toFixed(1)}%)`
);

// Grade assignment
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log(`GRADE: ${grade}`); // แสดงเกรด

// Feedback
console.log("\nFEEDBACK:");
if (score === 100) {
  console.log("🌟🌟 Perfect score! Excellent work!"); // คะแนนเต็ม
} else if (score >= 80) {
  console.log("👍👍 Great job! Keep practicing."); // ดีมาก
} else if (score >= 60) {
  console.log("📚📚 Good effort. Review the material and try again."); // พยายามดี
} else {
  console.log("💪💪 Keep practicing. You'll improve!"); // คะแนนต่ำ
}

// Statistics
console.log("\n📊📊 STATISTICS:");
console.log(`Total questions: ${results.length}`); // จำนวนคำถามทั้งหมด
console.log(`Correct: ${correctCount}`); // จำนวนถูก
console.log(`Incorrect: ${results.length - correctCount}`); // จำนวนผิด
console.log(`Success rate: ${score.toFixed(1)}%`); // เปอร์เซ็นต์ถูก

// Category breakdown (if applicable)
// ใช้ reduce นับจำนวนถูก/ผิด
const byCorrectness = results.reduce(
  (acc, r) => {
    acc[r.isCorrect ? "correct" : "incorrect"]++;
    return acc;
  },
  { correct: 0, incorrect: 0 }
);
console.log("\nAnswer breakdown:");
console.log(` ✅ Correct: ${byCorrectness.correct}`);
console.log(` ❌ Incorrect: ${byCorrectness.incorrect}`);

console.log("\n✅ All activities completed!");
console.log("━".repeat(60));
