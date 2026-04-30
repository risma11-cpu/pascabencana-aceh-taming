/* ═══════════ MOBILE MENU ═══════════ */
document.getElementById('mobBtn').addEventListener('click', () => {
    document.getElementById('mobMenu').classList.toggle('open');
});
document.querySelectorAll('#mobMenu a').forEach(a => {
    a.addEventListener('click', () => {
        document.getElementById('mobMenu').classList.remove('open');
    });
});

/* ═══════════ SCROLL REVEAL ═══════════ */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObs.unobserve(e.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObs.observe(el));

/* ═══════════ COUNTER ANIMATION ═══════════ */
function animate(el, target) {
    let c = 0;
    const inc = Math.max(1, Math.ceil(target / 120));
    const t = setInterval(() => {
        c += inc;
        if (c >= target) { c = target; clearInterval(t); }
        el.textContent = c.toLocaleString('id-ID');
    }, 30);
}
const cObs = new IntersectionObserver(e => {
    e.forEach(en => {
        if (en.isIntersecting) {
            animate(document.getElementById('qs1'), 12);
            animate(document.getElementById('qs2'), 291925);
            animate(document.getElementById('qs3'), 262087);
            animate(document.getElementById('qs4'), 2262);
            animate(document.getElementById('qs5'), 101);
            animate(document.getElementById('qs6'), 439);
            cObs.unobserve(en.target);
        }
    });
}, { threshold: 0.3 });
cObs.observe(document.getElementById('qs1').closest('section'));

/* ═══════════ CHARTS ═══════════ */
Chart.defaults.color = '#3d5278';
Chart.defaults.borderColor = 'rgba(0,229,255,0.06)';
Chart.defaults.font.family = "'Crimson Pro', serif";
Chart.defaults.font.size = 10;

new Chart(document.getElementById('chartWater'), {
    type: 'line',
    data: {
        labels: ['24 Des','25 Des','26 Des','27 Des','28 Des','29 Des','30 Des','01 Jan','05 Jan','10 Jan'],
        datasets: [
            { label: 'Hulu (m)', data: [0.5, 2.0, 2.5, 2.5, 1.8, 1.0, 0.5, 0.2, 0, 0], borderColor: '#ff6b6b', backgroundColor: 'rgba(255,107,107,0.08)', borderWidth: 2, fill: true, tension: 0.4, pointRadius: 3, pointBackgroundColor: '#ff6b6b', pointHoverRadius: 5 },
            { label: 'Perkotaan (m)', data: [0, 0.3, 0.7, 1.2, 1.0, 0.8, 0.5, 0.3, 0.1, 0], borderColor: '#f7c948', backgroundColor: 'rgba(247,201,72,0.06)', borderWidth: 2, fill: true, tension: 0.4, pointRadius: 3, pointBackgroundColor: '#f7c948', pointHoverRadius: 5 },
            { label: 'Siaga 1.5m', data: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5], borderColor: '#3d5278', borderWidth: 1, borderDash: [4, 4], pointRadius: 0, fill: false }
        ]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'top', align: 'end', labels: { boxWidth: 10, padding: 10, font: { size: 9 }, color: '#8fa3c8' } } },
        scales: {
            y: { beginAtZero: true, max: 3, grid: { color: 'rgba(0,229,255,0.04)' }, ticks: { color: '#3d5278', callback: v => v + 'm' } },
            x: { grid: { display: false }, ticks: { color: '#3d5278' } }
        }
    }
});

new Chart(document.getElementById('chartEvac'), {
    type: 'bar',
    data: {
        labels: ['24 Des','25 Des','26 Des','27 Des','28 Des','30 Des','02 Jan','05 Jan','10 Jan','15 Jan'],
        datasets: [{ label: 'Pengungsi', data: [5000, 45000, 120000, 262087, 250000, 200000, 150000, 80000, 30000, 6052], backgroundColor: 'rgba(0,229,255,0.5)', borderColor: '#00e5ff', borderWidth: 1, borderRadius: 4, hoverBackgroundColor: 'rgba(0,229,255,0.7)' }]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(0,229,255,0.04)' }, ticks: { color: '#3d5278', callback: v => (v / 1000) + 'rb' } },
            x: { grid: { display: false }, ticks: { color: '#3d5278' } }
        }
    }
});

new Chart(document.getElementById('chartKec'), {
    type: 'bar',
    data: {
        labels: ['Kl. Sinpang','Manyak Payed','Bandar Pusaka','Bendahara','Karang Baru','Seruway','Tenggulun','Kej. Muda','Sekerak','Rantau','Banda Mulia','T. Hulu'],
        datasets: [{ data: [38500, 35200, 32000, 28800, 26500, 24100, 22300, 20700, 18500, 16200, 15800, 13325], backgroundColor: ['rgba(255,107,107,0.6)','rgba(255,107,107,0.5)','rgba(255,92,26,0.6)','rgba(255,92,26,0.5)','rgba(247,201,72,0.6)','rgba(247,201,72,0.5)','rgba(0,229,255,0.5)','rgba(0,229,255,0.4)','rgba(155,93,229,0.5)','rgba(155,93,229,0.4)','rgba(0,245,196,0.4)','rgba(0,245,196,0.3)'], borderWidth: 1, borderRadius: 4 }]
    },
    options: {
        indexAxis: 'y', responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { beginAtZero: true, grid: { color: 'rgba(0,229,255,0.04)' }, ticks: { color: '#3d5278', callback: v => (v / 1000) + 'rb' } },
            y: { grid: { display: false }, ticks: { font: { size: 8 }, color: '#8fa3c8' } }
        }
    }
});

new Chart(document.getElementById('chartNeed'), {
    type: 'doughnut',
    data: {
        labels: ['Air Bersih','Susu Bayi','Popok','Alat Bersih','Sekolah','Obat Kulit'],
        datasets: [{ data: [30, 22, 18, 12, 10, 8], backgroundColor: ['#00e5ff','#ff6b6b','#ff6b6b','#f7c948','#9b5de5','#00f5c4'], borderColor: '#0d1428', borderWidth: 3 }]
    },
    options: {
        responsive: true, maintainAspectRatio: false, cutout: '60%',
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 8, padding: 8, font: { size: 9 }, color: '#8fa3c8', usePointStyle: true, pointStyle: 'circle' } } }
    }
});

/* ═══════════ ORG FILTER + HOVER ICON ═══════════ */
const tabs = document.querySelectorAll('.tab-btn');
const cards = document.querySelectorAll('#orgGrid > div');
tabs.forEach(t => {
    t.addEventListener('click', () => {
        tabs.forEach(b => b.classList.remove('active'));
        t.classList.add('active');
        const f = t.dataset.filter;
        cards.forEach(c => { c.style.display = (f === 'all' || c.dataset.category === f) ? '' : 'none'; });
    });
});
document.querySelectorAll('.org-card').forEach(c => {
    c.addEventListener('mouseenter', () => {
        const icon = c.querySelector('.org-icon');
        if (icon) { icon.style.color = '#00e5ff'; icon.style.transform = 'scale(1.15)'; }
    });
    c.addEventListener('mouseleave', () => {
        const icon = c.querySelector('.org-icon');
        if (icon) { icon.style.color = '#3d5278'; icon.style.transform = 'scale(1)'; }
    });
});
