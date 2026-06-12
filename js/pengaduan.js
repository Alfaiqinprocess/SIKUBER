// SIKUBER - Pengaduan JS

function submitPengaduan(e) {
  if (e) e.preventDefault();
  const nama = document.getElementById('namaInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const judul = document.getElementById('judulInput').value.trim();
  const deskripsi = document.getElementById('deskripsiInput').value.trim();

  if (!nama || !email || !judul || !deskripsi) {
    showModal('error', 'Mohon lengkapi semua field yang wajib diisi (*).');
    return;
  }

  const report = {
    id: 'LP' + Date.now(),
    nama, email, judul, deskripsi,
    tanggal: new Date().toLocaleDateString('id-ID', { day:'2-digit', month:'long', year:'numeric' }),
    status: 'Menunggu Verifikasi'
  };

  const existing = JSON.parse(localStorage.getItem('sikuber_reports') || '[]');
  existing.unshift(report);
  localStorage.setItem('sikuber_reports', JSON.stringify(existing));

  showModal('success', `Pengaduan Anda dengan nomor <strong>${report.id}</strong> berhasil dikirim. Tim kami akan menindaklanjuti dalam 1-3 hari kerja.`);
  document.getElementById('pengaduanForm').reset();
  loadHistory();
}

function showModal(type, msg) {
  const overlay = document.getElementById('modalOverlay');
  const icon = document.getElementById('modalIcon');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  if (!overlay) return;

  if (type === 'success') {
    icon.textContent = '✅'; title.textContent = 'Pengaduan Berhasil Dikirim!';
    icon.style.background = '#F0FDF4'; title.style.color = 'var(--success)';
  } else {
    icon.textContent = '⚠️'; title.textContent = 'Harap Lengkapi Form';
    icon.style.background = '#FFFBEB'; title.style.color = 'var(--warning)';
  }
  body.innerHTML = msg;
  overlay.classList.add('show');
}

function closeModal() {
  document.getElementById('modalOverlay')?.classList.remove('show');
}

function loadHistory() {
  const container = document.getElementById('historyContainer');
  if (!container) return;
  const reports = JSON.parse(localStorage.getItem('sikuber_reports') || '[]');
  if (!reports.length) {
    container.innerHTML = '<p style="color:var(--text-light);text-align:center;padding:2rem;">Belum ada riwayat pengaduan.</p>';
    return;
  }
  container.innerHTML = reports.map(r => `
    <div class="report-item fade-in visible">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.5rem;">
        <div>
          <div style="font-weight:700;color:var(--text);">${r.judul}</div>
          <div class="report-date">${r.id} · ${r.tanggal}</div>
        </div>
        <span class="badge badge-primary">${r.status}</span>
      </div>
      <p style="color:var(--text-light);font-size:0.875rem;margin-top:0.5rem;line-height:1.5;">${r.deskripsi.substring(0,120)}${r.deskripsi.length>120?'...':''}</p>
    </div>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  loadHistory();
  document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') closeModal();
  });
});
