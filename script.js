const missions = [
  {
    title: "The Flame Mystery", subtitle: "Temukan arti simbol pada botol misterius.",
    symbol: "🔥", symbolImage: "assets/flammable.png", label: "", lesson: "Flammable — Mudah Terbakar",
    description: "Simbol api menandakan bahan yang mudah terbakar. Jauhkan bahan dari sumber api dan panas sesuai petunjuk keselamatan.",
    question: "Apa arti simbol api pada botol tersebut?",
    options: ["Bahan mudah terbakar", "Bahan beracun", "Bahan merusak lingkungan"],
    answer: 0, hint: "Pikirkan apa yang bisa terjadi jika bahan bertemu api atau sumber panas.", badge: "🔥"
  },
  {
    title: "The Warning Sign", subtitle: "Cari tahu arti tanda peringatan kesehatan.",
    symbol: "❗", symbolImage: "assets/irritant.png", label: "", lesson: "Harmful / Irritant — Iritan atau Berbahaya",
    description: "Tanda seru GHS dapat menunjukkan iritasi kulit atau mata dan bahaya kesehatan tertentu. Selalu baca label lengkapnya.",
    question: "Simbol tanda seru pada bahan kimia dapat memperingatkan tentang…",
    options: ["Bahaya iritasi atau kesehatan tertentu", "Bahan yang pasti aman", "Bahaya radiasi saja"],
    answer: 0, hint: "Simbol ini merupakan peringatan, bukan tanda bahwa bahan aman.", badge: "❗"
  },
  {
    title: "The Corrosive Clue", subtitle: "Kenali bahan yang dapat merusak kulit atau logam.",
    symbol: "🧪", symbolImage: "assets/corrosive.png", label: "", lesson: "Corrosive — Korosif",
    description: "Simbol korosif menunjukkan bahan yang dapat menyebabkan luka bakar pada kulit, kerusakan mata serius, atau merusak logam.",
    question: "Apa yang dapat dilakukan bahan korosif?",
    options: ["Merusak kulit, mata, atau logam", "Membuat semua benda menjadi dingin", "Menghasilkan cahaya warna-warni saja"],
    answer: 0, hint: "Kata 'korosif' berkaitan dengan kerusakan pada bahan atau jaringan tubuh.", badge: "🧤"
  },
  {
    title: "The Toxic Secret", subtitle: "Temukan tanda bahaya bahan beracun.",
    symbol: "☠️", symbolImage: "assets/poison.png", label: "", lesson: "Poison / Toxic — Beracun",
    description: "Simbol tengkorak dan tulang bersilang memperingatkan bahwa bahan dapat menyebabkan keracunan serius, bahkan dalam jumlah kecil.",
    question: "Apa makna simbol tengkorak dan tulang bersilang?",
    options: ["Bahaya keracunan akut", "Bahan mudah membeku", "Bahan aman untuk disentuh"],
    answer: 0, hint: "Simbol ini adalah peringatan bahaya racun.", badge: "☠️"
  },
  {
    title: "The Explosion Warning", subtitle: "Pahami tanda bahan yang bisa meledak.",
    symbol: "💥", symbolImage: "assets/explosion.png", label: "", lesson: "Explosive — Dapat Meledak",
    description: "Simbol bom meledak memperingatkan bahan yang dapat meledak dalam kondisi tertentu. Jangan mengutak-atik bahan berlabel ini.",
    question: "Apa arti simbol bom yang meledak?",
    options: ["Bahan dapat meledak dalam kondisi tertentu", "Bahan pasti dapat dimakan", "Bahan hanya berbahaya bagi tanaman"],
    answer: 0, hint: "Perhatikan gambar ledakan pada simbolnya.", badge: "💥"
  },
  {
    title: "The Biohazard Room", subtitle: "Kenali peringatan bahaya biologis.",
    symbol: "☣️", symbolImage: "assets/biohazard.png", label: "", lesson: "Biohazard — Bahaya Biologis",
    description: "Simbol biohazard menandakan adanya bahan atau agen biologis yang dapat menimbulkan risiko bagi kesehatan. Ikuti prosedur dan batas akses.",
    question: "Simbol biohazard berkaitan dengan…",
    options: ["Bahaya biologis", "Bahan mudah terbakar saja", "Benda yang selalu aman disentuh"],
    answer: 0, hint: "Awalan 'bio' berkaitan dengan kehidupan atau organisme.", badge: "☣️"
  },
  {
    title: "The Oxidizer Puzzle", subtitle: "Pelajari simbol api di atas lingkaran.",
    symbol: "⭕🔥", symbolImage: "assets/oxidizer.png", label: "", lesson: "Oxidizer — Oksidator",
    description: "Oksidator dapat menyebabkan atau memperparah kebakaran karena mendukung proses pembakaran. Simbol resminya berupa api di atas lingkaran.",
    question: "Apa yang dapat dilakukan bahan pengoksidasi?",
    options: ["Menyebabkan atau memperparah kebakaran", "Selalu memadamkan api", "Menghilangkan semua risiko bahan kimia"],
    answer: 0, hint: "Simbolnya menggabungkan api dan lingkaran.", badge: "⭕"
  },
  {
    title: "The Green Guardian", subtitle: "Jaga lingkungan dengan mengenali simbolnya.",
    symbol: "🌳🐟", symbolImage: "assets/environmental_hazard.png", label: "", lesson: "Environmental Hazard — Bahaya Lingkungan",
    description: "Simbol pohon dan ikan mati menandakan bahaya bagi lingkungan, khususnya organisme perairan. Cegah bahan berbahaya masuk ke saluran air.",
    question: "Simbol pohon dan ikan mati mengingatkan kita untuk…",
    options: ["Melindungi lingkungan dari bahan berbahaya", "Membuang bahan kimia ke sungai", "Mengabaikan petunjuk pada label"],
    answer: 0, hint: "Perhatikan pohon dan ikan pada simbol tersebut.", badge: "🌱"
  },
  {
    title: "The Radiation Mystery", subtitle: "Kenali tanda peringatan radiasi.",
    symbol: "☢️", symbolImage: "assets/radioactive.png", label: "", lesson: "Radioactive — Radioaktif",
    description: "Simbol trefoil radiasi menandakan bahaya radiasi. Jangan memasuki area terbatas atau menangani sumber radiasi tanpa pelatihan dan izin.",
    question: "Apa yang harus dilakukan saat melihat tanda radioaktif di area terbatas?",
    options: ["Tidak masuk tanpa izin dan mengikuti prosedur keselamatan", "Masuk untuk memeriksa sendiri", "Memindahkan tanda agar tidak mengganggu"],
    answer: 0, hint: "Tanda ini berarti ada bahaya yang harus ditangani oleh personel berwenang.", badge: "☢️"
  }
];

let currentMission = 0;
let xp = 0;
let completed = new Set();
let selectedAnswer = null;
let answeredCorrectly = false;
let hintUsed = false;

const $ = (id) => document.getElementById(id);
const missionList = $("mission-list");

function renderMissionList() {
  missionList.innerHTML = "";
  missions.forEach((mission, index) => {
    const button = document.createElement("button");
    const isDone = completed.has(index);
    const isLocked = index > 0 && !completed.has(index - 1) && index > currentMission;
    button.className = `mission-item ${index === currentMission ? "active" : ""} ${isDone ? "done" : ""} ${isLocked ? "locked" : ""}`;
    button.innerHTML = `<span class="mission-num">${isDone ? "✓" : index + 1}</span><span class="mission-name">${mission.title}</span><span class="mission-status">${isDone ? "🏅" : isLocked ? "🔒" : "›"}</span>`;
    button.disabled = isLocked;
    button.addEventListener("click", () => {
      if (index <= currentMission || completed.has(index - 1)) loadMission(index);
    });
    missionList.appendChild(button);
  });
}

function setSymbolDisplay(element, emoji, imagePath, altText) {
  if (imagePath) {
    element.innerHTML = `<img src="${imagePath}" alt="${altText}" />`;
  } else {
    element.textContent = emoji;
  }
}

function loadMission(index) {
  currentMission = index;
  selectedAnswer = null;
  answeredCorrectly = completed.has(index);
  hintUsed = false;
  const mission = missions[index];
  $("mission-number").textContent = `MISI ${index + 1} DARI 9`;
  $("mission-title").textContent = mission.title;
  $("mission-subtitle").textContent = mission.subtitle;
  setSymbolDisplay($("hazard-symbol"), mission.symbol, mission.symbolImage, mission.lesson);
  $("bottle-label").textContent = mission.label;
  setSymbolDisplay($("lesson-icon"), mission.symbol, mission.symbolImage, mission.lesson);
  $("lesson-heading").textContent = mission.lesson;
  $("lesson-description").textContent = mission.description;
  $("question-text").textContent = mission.question;
  $("question-progress").textContent = `Misi ${index + 1} · 1 pertanyaan`;
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("hint-text").textContent = "";
  $("hint-text").classList.add("hidden");
  $("check-button").classList.toggle("hidden", completed.has(index));
  $("next-button").classList.toggle("hidden", !completed.has(index) || index === missions.length - 1);
  $("answer-options").innerHTML = "";
  mission.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span><span>${option}</span>`;
    button.addEventListener("click", () => {
      if (answeredCorrectly) return;
      selectedAnswer = optionIndex;
      document.querySelectorAll(".answer-option").forEach((el, i) => el.classList.toggle("selected", i === optionIndex));
      $("feedback").textContent = "";
      $("feedback").className = "feedback";
    });
    $("answer-options").appendChild(button);
  });
  if (completed.has(index)) {
    $("feedback").textContent = "Misi sudah selesai! Kamu bisa lanjut ke misi berikutnya.";
    $("feedback").className = "feedback good";
    document.querySelectorAll(".answer-option").forEach((el, i) => {
      if (i === mission.answer) el.classList.add("selected");
    });
  }
  $("xp").textContent = xp;
  $("badge-count").textContent = completed.size;
  renderMissionList();
}

function checkAnswer() {
  if (selectedAnswer === null) {
    $("feedback").textContent = "Pilih salah satu jawaban dulu, ya!";
    $("feedback").className = "feedback bad";
    return;
  }
  const mission = missions[currentMission];
  if (selectedAnswer === mission.answer) {
    if (!completed.has(currentMission)) {
      completed.add(currentMission);
      xp += hintUsed ? 5 : 10;
    }
    answeredCorrectly = true;
    $("feedback").textContent = `Benar! ${hintUsed ? "+5" : "+10"} XP. Kamu mendapatkan badge ${mission.badge}`;
    $("feedback").className = "feedback good";
    $("check-button").classList.add("hidden");
    $("next-button").classList.toggle("hidden", currentMission === missions.length - 1);
    $("xp").textContent = xp;
    $("badge-count").textContent = completed.size;
    renderMissionList();
    if (completed.size === missions.length) {
      $("next-button").textContent = "Lihat Hasil Akhir 🏆";
      $("next-button").classList.remove("hidden");
    }
  } else {
    $("feedback").textContent = "Belum tepat. Baca lagi penjelasannya atau gunakan petunjuk, lalu coba lagi!";
    $("feedback").className = "feedback bad";
  }
}

function nextMission() {
  if (completed.size === missions.length) {
    showCompletion();
    return;
  }
  if (currentMission < missions.length - 1) loadMission(currentMission + 1);
}

function showCompletion() {
  $("final-badges").innerHTML = missions.map(m => `<span title="${m.lesson}">${m.badge}</span>`).join("");
  $("completion-modal").classList.remove("hidden");
}

$("check-button").addEventListener("click", checkAnswer);
$("next-button").addEventListener("click", nextMission);
$("hint-button").addEventListener("click", () => {
  const mission = missions[currentMission];
  $("hint-text").textContent = `💡 Petunjuk: ${mission.hint}`;
  $("hint-text").classList.remove("hidden");
  hintUsed = true;
});
$("restart-button").addEventListener("click", () => {
  currentMission = 0;
  xp = 0;
  completed = new Set();
  $("completion-modal").classList.add("hidden");
  $("next-button").textContent = "Misi Berikutnya →";
  loadMission(0);
});

loadMission(0);
