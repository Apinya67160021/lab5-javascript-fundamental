// ============================================
// Activity 4: Loops & Array Methods
// ============================================
console.log("=== Loops & Array Methods Practice ===\n");

// ─────────────────────────────────
// 1. Traditional for loop
// ─────────────────────────────────
console.log("For loop (0-4):");
// for loop แบบดั้งเดิม ใช้สำหรับวนซ้ำเมื่อรู้จำนวนครั้งแน่นอน
for (let i = 0; i < 5; i++) {
  console.log(` i = ${i}`); // แสดงค่าของ i ในแต่ละรอบ
}

// ─────────────────────────────────
// 2. while loop
// ─────────────────────────────────
console.log("\nWhile loop (count down):");
// while loop ใช้เมื่อไม่รู้จำนวนรอบแน่นอน แต่มีเงื่อนไขเป็นตัวกำหนด
let count = 5;
while (count > 0) {
  console.log(` ${count}...`); // แสดงค่าลดลงจาก 5
  count--; // ลดค่าทีละ 1
}
console.log(" Blastoff! 🚀🚀"); // แสดงข้อความเมื่อวนครบ

// ─────────────────────────────────
// 3. for...of loop (values)
// ─────────────────────────────────
const fruits = ["apple", "banana", "orange"];
console.log("\nFor...of loop (fruits):");
// for...of ใช้วนซ้ำกับค่าของ array
for (const fruit of fruits) {
  console.log(` - ${fruit}`); // แสดงผลแต่ละค่าของ array
}

// ─────────────────────────────────
// 4. for...in loop (keys - for objects)
// ─────────────────────────────────
const person = { name: "John", age: 25, city: "Bangkok" };
console.log("\nFor...in loop (person properties):");
// for...in ใช้วนซ้ำ key ของ object
for (const key in person) {
  console.log(` ${key}: ${person[key]}`); // แสดง key และ value
}

// ─────────────────────────────────
// 5. forEach (side effects)
// ─────────────────────────────────
console.log("\nforEach (with index):");
// forEach ใช้วนซ้ำ array ทำงานแต่ละค่า ไม่คืนค่าใหม่
fruits.forEach((fruit, index) => {
  console.log(` ${index}: ${fruit}`); // แสดง index และค่า
});

// ─────────────────────────────────
// 6. map (transform to new array) -- สําคัญมาก;
// ─────────────────────────────────
const numbers = [1, 2, 3, 4, 5];
console.log("\nmap - transform elements:");
console.log("Original:", numbers);

// map ใช้สร้าง array ใหม่จาก array เดิม โดยไม่แก้ไข array เดิม
const doubled = numbers.map((n) => n * 2); // คูณ 2
console.log("Doubled:", doubled);

const squared = numbers.map((n) => n * n); // ยกกำลังสอง
console.log("Squared:", squared);

const asStrings = numbers.map((n) => `Number: ${n}`); // แปลงเป็น string
console.log("As strings:", asStrings);

// ─────────────────────────────────
// 7. filter (select matching elements) -- สําคัญมาก;
// ─────────────────────────────────
console.log("\nfilter - select elements:");
// filter ใช้กรอง element ที่ตรงตามเงื่อนไข
const evens = numbers.filter((n) => n % 2 === 0); // เลขคู่
console.log("Even numbers:", evens);

const odds = numbers.filter((n) => n % 2 !== 0); // เลขคี่
console.log("Odd numbers:", odds);

const greaterThan2 = numbers.filter((n) => n > 2); // มากกว่า 2
console.log("Numbers > 2:", greaterThan2);

// ─────────────────────────────────
// 8. reduce (accumulate to single value) -- สําคัญมาก;
// ─────────────────────────────────
console.log("\nreduce - accumulate:");
// reduce ใช้รวมค่าของ array ให้เหลือค่าเดียว
const sum = numbers.reduce((total, n) => total + n, 0); // บวกทุกค่า
console.log("Sum:", sum);

const product = numbers.reduce((total, n) => total * n, 1); // คูณทุกค่า
console.log("Product:", product);

const concatenated = numbers.reduce((str, n) => str + n, ""); // รวมเป็น string
console.log("Concatenated:", concatenated);

// นับจำนวนคำใน array
const words = ["apple", "banana", "apple", "orange", "apple"];
const wordCount = words.reduce((counts, word) => {
  counts[word] = (counts[word] || 0) + 1; // ถ้ายังไม่มีค่าเริ่มที่ 0 แล้ว +1
  return counts;
}, {});
console.log("Word count:", wordCount); // แสดงผลลัพธ์เป็น object {apple:3, banana:1, orange:1}

// ─────────────────────────────────
// 9. Chaining methods -- สําคัญมาก;
// ─────────────────────────────────
console.log("\nMethod chaining:");
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter → map → join เป็น chain
const evenStrings = data
  .filter((n) => n % 2 === 0) // เลือกเลขคู่ [2,4,6,8,10]
  .map((n) => `${n}²=${n * n}`) // แปลงเป็น string ["2²=4", "4²=16", ...]
  .join(", "); // รวมเป็น string เดียว
console.log("Even numbers squared:", evenStrings);

// คำนวณค่าเฉลี่ย
const numbers2 = [10, 20, 30, 40, 50];
const average = numbers2.reduce((sum, n) => sum + n, 0) / numbers2.length;
console.log("Average:", average); // 30

// ─────────────────────────────────
// 10. Challenge: Student Grades
// ─────────────────────────────────
const students = [
  { name: "Alice", score: 95 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 85 },
  { name: "Diana", score: 92 },
  { name: "Eve", score: 88 },
];

console.log("\nChallenge: Student Analysis");
console.log("Students:", students);

// 1. ดึงชื่อทุกคน
const names = students.map((s) => s.name); // map คืน array ของชื่อ
console.log("Names:", names.join(", ")); // join เป็น string

// 2. เลือกคนที่คะแนนสูง >=85
const highScorers = students.filter((s) => s.score >= 85); // filter เงื่อนไข >=85
console.log(
  "High scorers:",
  highScorers.map((s) => `${s.name} (${s.score})`).join(", ")
); // แสดงชื่อ+คะแนน

// 3. คำนวณค่าเฉลี่ยของชั้นเรียน
const classAverage =
  students.reduce((sum, s) => sum + s.score, 0) / students.length;
console.log("Class average:", classAverage.toFixed(2)); // .toFixed(2) 2 ตำแหน่งทศนิยม

// 4. หาคนที่คะแนนสูงสุด
const topScorer = students.reduce((top, s) => (s.score > top.score ? s : top));
console.log("Top scorer:", `${topScorer.name} (${topScorer.score})`);

// 5. สร้าง summary + grade + เรียงลำดับ
const summary = students
  .map((s) => ({
    ...s, // คัดลอก property เดิม
    grade: s.score >= 90 ? "A" : s.score >= 80 ? "B" : "C", // กำหนด grade
  }))
  .sort((a, b) => b.score - a.score); // เรียงจากคะแนนสูงไปต่ำ

console.log("Summary (sorted):");
summary.forEach((s) => console.log(` ${s.name}: ${s.score} (${s.grade})`));

console.log("\n✅ Activity 4 completed!");
