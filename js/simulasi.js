// SIKUBER - Simulasi Komentar
// Daftar kata kasar/intoleran komprehensif (Indonesia + Inggris)

const intolerantWords = [

  // ===== BAHASA INDONESIA - Kata Kasar Umum =====
  'anjing','anjir','anjrit','anying',
  'bangsat','brengsek','bajingan','bejad','bejat',
  'babi','tai','taik','tahi',
  'kontol','memek','ngentot','jancok','jancuk','cok','cuk',
  'goblok','goblog','geblek','goblok',
  'tolol','tolong tolol','tolo',
  'idiot','idot',
  'dungu','budeg',
  'bodoh','bodo','bodo amat',
  'gila','edan','sinting','gendeng','geje',
  'kampret','keparat','celeng',
  'bedebah','biadab','laknat','terkutuk',
  'sialan','sial','mampus','mati lo','mati kau','mati kamu',
  'kurang ajar','kurang asem','kurang apal',
  'jelek','buruk rupa','jelek banget',
  'sampah','tong sampah','buangan',
  'hina','rendah','nista','hina dina',
  'penghina','penista','penistaan',
  'kafir','sesat','murtad','musyrik',
  'musuh','pembenci','pembunuh',
  'penipu','pembohong','tukang tipu','dusta','bohong',
  'munafik','hipokrit',
  'pelacur','sundal','lonte','PSK',
  'iblis','setan','jin','syaitan',
  'celaka','kena batunya','azab','tulah',
  'dasar','dasar bodoh','dasar goblok','dasar tolol',
  'menyebalkan','nyebelin','nyebelin banget',
  'payah','parah','ga berguna','tidak berguna','gak berguna',
  'asu','asuw',
  'jangkrik','jembut',
  'pekok','pekok',
  'semprul','sentolet',
  'keparat',
  'kunyuk','monyet','kera',
  'binatang','hewan','seperti binatang',
  'memalukan','memalukan sekali',
  'teroris','ekstremis','radikalis',
  'rasis','diskriminasi','diskriminatif',
  'primitif','terbelakang','kolot','kuno',
  'pengecut','pecundang','loser',
  'brengsek','bedebah','sialan',
  'sesat','bodoh','kafir','aneh','hina','sampah','brengsek','tolol','dungu',
  'idiot','gila','anjing','bangsat','sialan','goblog','setan','iblis',
  'penghina','terkutuk','laknat','celaka','munafik','penipu','musuh','kontol',
  'memek','pepek','babi','ngentot','ngewe','goblok','bujang','totong','jomok',
  'gay','lesbian','lgbt','sepong','jilmek','bokep','porno','paok','bangke',

  // ===== BAHASA INGGRIS - Kata Kasar Umum =====
  'fuck','fucked','fucker','fucking','fck','f*ck','f**k',
  'shit','bullshit','shitty','shtty','sh*t',
  'bitch','b*tch','btch',
  'asshole','a**hole','ahole',
  'bastard','bas*ard',
  'damn','damnit','goddamn','goddamned',
  'crap','crappy',
  'hell','what the hell','go to hell',
  'stupid','stupidity','stoopid',
  'idiot','idiotic','idiocy',
  'moron','moronic',
  'dumb','dumbass','dumb ass',
  'retard','retarded',
  'loser','you loser',
  'ugly','so ugly',
  'trash','garbage','piece of trash','piece of garbage',
  'die','go die','drop dead','kys','kill yourself',
  'hate you','i hate you','hate this',
  'shut up','stfu','shut the f up',
  'jerk','jackass','jack ass',
  'freak','weirdo',
  'racist','racism',
  'terrorist','extremist','radical',
  'pig','swine','animal','beast',
  'worthless','useless','good for nothing',
  'coward','cowardly',
  'liar','hypocrite','deceiver','cheater',
  'evil','wicked','demonic','satanic',
  'infidel','heretic','blasphemy','blasphemous',
  'curse','cursed','damned',
  'scum','scumbag','lowlife','low life',
  'disgusting','gross','repulsive','revolting',
  'pathetic','pitiful','miserable',
  'burn in hell','rot in hell',
  'cunt','cnt',
  'dick','d*ck',
  'piss','pissed off',
  'wh*re','whore','slut',
  'douchebag','douche',
  'prick','pr*ck',
  'b*stard',
  'a-hole',
  'numbnuts','numbskull',
  'imbecile',

  // ===== KATA INTOLERANSI AGAMA =====
  'agama sesat','agamamu sesat','agama lo sesat','agama kamu sesat',
  'ajaran sesat','aliran sesat',
  'kafir lo','lo kafir','kamu kafir','ente kafir',
  'tuhan palsu','sembah berhala','penyembah berhala',
  'agama palsu','agamamu salah','agamamu hina',
  'penista agama','menista agama','hina agama',
  'non muslim babi','orang kristen babi','orang kafir',
  'bunuh kafir','usir kafir','hancurkan','basmi',
  'toleransi itu salah','jangan berteman beda agama',

  // ===== KATA KASAR GAUL / SLANG =====
  'wkwk jahat','wkwkwk tolol',
  'ga ada otak','gak ada otak','tidak ada otak',
  'otakmu kemana','otak lo kemana',
  'dasar gila','dasar sinting',
  'nggak punya otak','ngga punya malu',
  'muka tembok','tebal muka',
  'ga punya hati','tidak punya hati',
  'lu goblok','lo goblok','lo tolol','lu tolol',
  'emang bego','emang goblok','emang tolol',
  'bego','beg0','begoo',
  'pala lo','pala lu','kepala lo batu',
  'ngaco','ngawur parah','asal ngomong',
  'lebay','sotoy','sotoyyy',
  'kampungan','ndeso','katrok','udik',
  'norak','norak banget',
];

// Hapus duplikat dan ubah ke lowercase
const uniqueIntolerantWords = [...new Set(intolerantWords.map(w => w.toLowerCase()))];

const tolerantTips = [
  'Gunakan kalimat yang mengedepankan penghargaan dan sopan santun.',
  'Fokus pada ide, bukan menyerang individu atau agama.',
  'Mulailah dengan memahami sudut pandang orang lain sebelum merespons.',
  'Hindari generalisasi seperti "semua orang agama X adalah...".',
  'Tunjukkan empati dalam setiap interaksi digital Anda.',
  'Pikirkan dua kali sebelum mengirim komentar — apakah ini menyakiti orang lain?',
  'Hormati perbedaan sebagai kekayaan bangsa, bukan ancaman.',
  'Jadilah duta toleransi di media sosial dengan komentar yang membangun.',
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

  // Deteksi kata kasar — cek apakah kata/frasa ada dalam teks
  const found = uniqueIntolerantWords.filter(w => {
    // Untuk kata pendek (< 4 huruf), cek sebagai kata utuh agar tidak false positive
    if (w.length <= 3) {
      const regex = new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      return regex.test(lower);
    }
    return lower.includes(w);
  });

  const tip = tolerantTips[Math.floor(Math.random() * tolerantTips.length)];

  if (found.length > 0) {
    // Tampilkan maks 6 kata yang ditemukan agar tidak terlalu panjang
    const displayFound = found.slice(0, 6);
    const more = found.length > 6 ? ` <span style="color:var(--danger);font-size:0.8rem;">+${found.length - 6} lainnya</span>` : '';

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
          <div>
            <div class="info-box-title">Kata tidak pantas ditemukan (${found.length} kata):</div>
            <p style="margin-top:0.35rem;">${displayFound.map(w=>`<span class="badge badge-danger">${w}</span>`).join(' ')}${more}</p>
          </div>
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
          <p>Tidak ditemukan kata-kata tidak pantas. Komentar Anda sudah mencerminkan semangat Bhinneka Tunggal Ika.</p></div>
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
