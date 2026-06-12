// SIKUBER - Simulasi Komentar

const intolerantWords = [
  'sesat','bodoh','kafir','aneh','hina','sampah','brengsek','tolol','dungu',
  'idiot','gila','anjing','bangsat','sialan','goblog','setan','iblis',
  'penghina','terkutuk','laknat','celaka','munafik','penipu','musuh'
];

const tolerantTips = [
  'Gunakan kalimat yang mengedepankan penghargaan dan sopan santun.',
  'Fokus pada ide, bukan menyerang individu atau agama.',
  'Mulailah dengan memahami sudut pandang orang lain sebelum merespons.',
  'Hindari generalisasi seperti "semua orang agama X adalah...".',
  'Tunjukkan empati dalam setiap interaksi digital Anda.',
];

function checkComment() {
  const input = document.getElementById('commentInput');
  const container = document.getElementById('resultContainer');
  const text = input.value.trim();

  if (!text) {
    container.innerHTML = `
      <div class="info-box warning">
        <span style="font-size:1.5rem;">⚠️</span>
        <div><div class="info-box-title">Komentar kosong</div>
        <p>Silakan ketik komentar terlebih dahulu sebelum menganalisis.</p></div>
      </div>`;
    return;
  }

  const lower = text.toLowerCase();
  const found = intolerantWords.filter(w => lower.includes(w));
  const tip = tolerantTips[Math.floor(Math.random() * tolerantTips.length)];

  if (found.length > 0) {
    container.innerHTML = `
      <div class="card" style="border-left: 4px solid var(--danger);">
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.25rem;">
          <div style="width:52px;height:52px;background:#FEF2F2;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.75rem;flex-shrink:0;">❌</div>
          <div>
            <h3 style="color:var(--danger);font-size:1.2rem;font-weight:700;">Komentar Tidak Toleran</h3>
            <p style="color:var(--text-light);font-size:0.875rem;">Komentar ini mengandung kata-kata yang dapat menyakiti orang lain</p>
          </div>
        </div>
        <div class="info-box danger" style="margin-bottom:1rem;">
          <span>🚩</span>
          <div><div class="info-box-title">Kata tidak toleran ditemukan:</div>
          <p>${found.map(w=>`<span class="badge badge-danger">${w}</span>`).join(' ')}</p></div>
        </div>
        <div class="info-box info">
          <span>💡</span>
          <div><div class="info-box-title">Saran untuk Anda:</div>
          <p>${tip}</p></div>
        </div>
        <p style="color:var(--text-light);font-size:0.85rem;margin-top:1rem;">
          Ingat: Sila Pertama Pancasila mengajarkan kita untuk saling menghormati dalam perbedaan agama dan keyakinan.
        </p>
      </div>`;
  } else {
    container.innerHTML = `
      <div class="card" style="border-left: 4px solid var(--success);">
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.25rem;">
          <div style="width:52px;height:52px;background:#F0FDF4;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.75rem;flex-shrink:0;">✅</div>
          <div>
            <h3 style="color:var(--success);font-size:1.2rem;font-weight:700;">Komentar Toleran</h3>
            <p style="color:var(--text-light);font-size:0.875rem;">Komentar ini mencerminkan nilai-nilai toleransi Pancasila</p>
          </div>
        </div>
        <div class="info-box success" style="margin-bottom:1rem;">
          <span>🌟</span>
          <div><div class="info-box-title">Komentar Anda terdeteksi sebagai TOLERAN!</div>
          <p>Tidak ditemukan kata-kata intoleran. Komentar Anda sudah mencerminkan semangat Bhinneka Tunggal Ika.</p></div>
        </div>
        <div class="info-box info">
          <span>💡</span>
          <div><div class="info-box-title">Tetap pertahankan:</div>
          <p>${tip}</p></div>
        </div>
      </div>`;
  }

  container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetCommentForm() {
  document.getElementById('commentInput').value = '';
  document.getElementById('charCount').textContent = '0';
  document.getElementById('resultContainer').innerHTML = '';
}

document.getElementById('commentInput')?.addEventListener('input', function() {
  document.getElementById('charCount').textContent = this.value.length;
});
