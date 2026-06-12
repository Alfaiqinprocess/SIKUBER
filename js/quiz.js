// SIKUBER - Quiz JS

const quizData = [
  {
    question: "Bagaimana etika yang benar saat merespons postingan bernada ujaran agama di media sosial?",
    options: ["Membalas dengan ujaran yang lebih keras", "Mengingatkan dengan sopan dan menyertakan fakta", "Membagikan ulang tanpa komentar", "Mengabaikan sepenuhnya"],
    correct: 1,
    explanation: "Mengingatkan dengan sopan dan menyertakan fakta mencerminkan etika digital yang baik dan nilai-nilai Pancasila."
  },
  {
    question: "Apa makna utama Sila Pertama Pancasila dalam konteks kerukunan beragama?",
    options: ["Hanya satu agama yang benar", "Kepercayaan kepada Tuhan disertai toleransi terhadap semua agama", "Negara mengatur agama warganya", "Agama adalah urusan pribadi yang tidak perlu dibicarakan"],
    correct: 1,
    explanation: "Sila Pertama mengajarkan keyakinan kepada Tuhan sekaligus menghormati kebebasan beragama orang lain."
  },
  {
    question: "Bagaimana etika yang baik saat berkomunikasi tentang agama yang berbeda?",
    options: ["Menghindari topik agama sama sekali", "Menggunakan bahasa yang santun, hormat, dan menghindari ujaran menyakitkan", "Membuktikan agama sendiri lebih baik", "Berdebat hingga ada yang mengalah"],
    correct: 1,
    explanation: "Komunikasi yang santun dan hormat merupakan fondasi etika digital berbasis Pancasila."
  },
  {
    question: "Apa definisi paling tepat cyberbullying berbasis agama?",
    options: ["Diskusi agama yang tidak setuju", "Menghina, mengancam, atau melecehkan seseorang di ruang digital karena agamanya", "Berbagi konten keagamaan yang kontroversial", "Tidak mengikuti postingan agama tertentu"],
    correct: 1,
    explanation: "Cyberbullying berbasis agama adalah tindakan menyakiti orang lain karena agamanya di ruang digital."
  },
  {
    question: "Apa peran utama Pancasila di era digital?",
    options: ["Membatasi kebebasan berekspresi online", "Mengajarkan nilai moral untuk toleransi, kerukunan, dan etika digital", "Menetapkan aturan media sosial resmi", "Hanya relevan di ruang kehidupan nyata"],
    correct: 1,
    explanation: "Pancasila tetap relevan sebagai panduan moral di era digital untuk menciptakan ruang digital yang toleran."
  }
];

let current = 0, score = 0, answers = [], started = false;

function startQuiz() {
  current = 0; score = 0; answers = []; started = true;
  renderQuestion();
}

function renderQuestion() {
  const c = document.getElementById('quizContainer');
  if (current >= quizData.length) { renderResult(); return; }

  const q = quizData[current];
  c.innerHTML = `
    <div class="card fade-in visible">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
        <span class="badge badge-primary">Soal ${current + 1} / ${quizData.length}</span>
        <div style="display:flex;gap:4px;">
          ${quizData.map((_, i) => `<div style="width:28px;height:4px;border-radius:2px;background:${i < current ? 'var(--accent)' : i === current ? 'var(--primary)' : 'var(--light-gray)'}"></div>`).join('')}
        </div>
      </div>
      <h3 style="font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:1.5rem;line-height:1.6;">${q.question}</h3>
      ${q.options.map((opt, i) => `
        <button class="quiz-option" onclick="selectAnswer(${i})">${String.fromCharCode(65+i)}. ${opt}</button>
      `).join('')}
    </div>`;
}

function selectAnswer(idx) {
  const q = quizData[current];
  answers.push(idx);
  const isCorrect = idx === q.correct;
  if (isCorrect) score++;

  const opts = document.querySelectorAll('.quiz-option');
  opts.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
    else if (i === idx && !isCorrect) btn.classList.add('wrong');
  });

  const expl = document.createElement('div');
  expl.className = `info-box ${isCorrect ? 'success' : 'danger'}`;
  expl.style.marginTop = '1rem';
  expl.innerHTML = `<span>${isCorrect ? '✅' : '❌'}</span><div><div class="info-box-title">${isCorrect ? 'Jawaban Benar!' : 'Kurang tepat.'}</div><p>${q.explanation}</p></div>`;
  document.querySelector('#quizContainer .card').appendChild(expl);

  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn btn-primary';
  nextBtn.style.cssText = 'width:100%;margin-top:1.25rem;';
  nextBtn.textContent = current + 1 < quizData.length ? 'Selanjutnya →' : 'Lihat Hasil';
  nextBtn.onclick = () => { current++; renderQuestion(); };
  document.querySelector('#quizContainer .card').appendChild(nextBtn);
}

function renderResult() {
  const pct = (score / quizData.length) * 100;
  let msg, color, icon;
  if (pct >= 80) { msg = "Luar biasa! Pemahaman Anda tentang toleransi beragama sangat baik."; color = "var(--success)"; icon = "🏆"; }
  else if (pct >= 60) { msg = "Cukup baik! Tingkatkan pemahaman Anda tentang Sila Pertama dan etika digital."; color = "var(--warning)"; icon = "📚"; }
  else { msg = "Jangan menyerah! Pelajari kembali materi fenomena dan nilai moral di SIKUBER."; color = "var(--danger)"; icon = "💪"; }

  document.getElementById('quizContainer').innerHTML = `
    <div class="card" style="text-align:center;">
      <div style="font-size:4rem;margin-bottom:1rem;">${icon}</div>
      <h2 style="font-size:2rem;font-weight:800;color:${color};margin-bottom:0.5rem;">${score * 20}/100</h2>
      <p style="font-size:1.1rem;color:var(--text);font-weight:600;margin-bottom:0.75rem;">${score} dari ${quizData.length} soal benar</p>
      <p style="color:var(--text-light);max-width:460px;margin:0 auto 2rem;">${msg}</p>
      <div style="display:grid;grid-template-columns:repeat(${quizData.length},1fr);gap:8px;max-width:320px;margin:0 auto 2rem;">
        ${answers.map((a,i) => `<div style="height:8px;border-radius:4px;background:${a===quizData[i].correct?'var(--success)':'var(--danger)'}"></div>`).join('')}
      </div>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="startQuiz()">🔄 Ulangi Kuis</button>
        <a href="fenomena.html" class="btn btn-outline">📚 Pelajari Lagi</a>
      </div>
    </div>`;
}
