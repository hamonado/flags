// =========================
// Flags.js for Challenges 1–5
// =========================

// Challenge answers (obfuscated to some extent)
const flags = [
  "CTF{encoding_flags}",  // Challenge 1
  "CTF{second_flag}",     // Challenge 2
  "CTF{third_flag}",      // Challenge 3
  "CTF{hidden_text}",     // Challenge 4
  "cwsmnl"                // Challenge 5
];

// Challenge 1: Double-encoded string (Base64 twice)
// Correct decoding -> "CTF{encoding_flags}"
const challenge1DoubleEncoded = "UTFSR2UyVnVZMjlrYVc1blgyWnNZV2R6ZlE9PQ==";

// Display Challenge 1’s encoded string in the console automatically
console.log("Challenge 1 encoded string:", challenge1DoubleEncoded);

// =========================
// Flag Checking Logic
// =========================
function checkFlag(challenge, input) {
  if (input === flags[challenge - 1]) {
    alert("✅ Correct! Proceed to the next challenge.");
    showNextChallenge(challenge);
  } else {
    alert("❌ Incorrect flag. Try again!");
  }
}

// =========================
// UI Control
// =========================
function showNextChallenge(current) {
  const next = current + 1;
  const currentEl = document.getElementById("challenge" + current);
  const nextEl = document.getElementById("challenge" + next);

  if (currentEl) currentEl.style.display = "none";
  if (nextEl) nextEl.style.display = "block";
}

// =========================
// Init: Show only Challenge 1
// =========================
window.onload = function () {
  for (let i = 2; i <= 5; i++) {
    const el = document.getElementById("challenge" + i);
    if (el) el.style.display = "none";
  }
};
