document.getElementById('selesai').addEventListener('click', function() {
    // Jawaban benar untuk semua soal
    const jawabanBenar = {
        soal1: 'c',  // Menyebutkan sikap sesuai sila 1–5
        soal2: 'b',  // Memberi pendapat atau alasan pentingnya menghargai perbedaan
        soal3: 'd',  // Menceritakan budaya atau permainan tradisional
        soal4: 'a',  // Menghormati teman yang berbeda agama
        soal5: 'a',  // Soekarno
        soal6: 'b',  // Kemanusiaan yang Adil dan Beradab
        soal7: 'c',  // Pohon Beringin
        soal8: 'b',  // Tari Kecak
        soal9: 'c',  // Bahasa Indonesia
        soal10: 'b', // Menghormati pendapat teman saat musyawarah
        soal11: 'a', // Keadilan Sosial bagi Seluruh Rakyat Indonesia
        soal12: 'b', // Kepala Banteng
        soal13: 'b', // Congklak
        soal14: 'b', // Menjaga persatuan dengan teman meskipun berbeda suku
        soal15: 'b', // Mohammad Hatta
        soal16: 'b', // Tari Tor-Tor
        soal17: 'c', // Ketuhanan Yang Maha Esa
        soal18: 'b', // Membantu teman yang kesusahan tanpa membeda-bedakan
        soal19: 'a', // Padi dan Kapas
        soal20: 'b', // Mengikuti budaya daerah lain dengan ikhlas
        soal21: 'b', // Membantu teman yang kesusahan tanpa membeda-bedakan
        soal22: 'b', // Congklak
        soal23: 'b', // Bahasa Jawa
        soal24: 'c', // Pohon Beringin
        soal25: 'b', // Tari Jaipong
        soal26: 'Persatuan Indonesia',
        soal27: 'Kepala Banteng',
        soal28: 'Soekarno', // atau Mohammad Hatta, Soepomo, dll.
        soal29: 'Congklak', // atau permainan lain seperti Engklek, Gobak Sodor, dll.
        soal30: 'Membantu teman yang kesusahan tanpa membeda-bedakan' // atau sikap lain yang sesuai
    };

    let skor = 0;
    const totalSoal = 30;

    // Cek jawaban soal pilihan ganda (soal 1-25)
    for (let i = 1; i <= 25; i++) {
        const jawaban = document.querySelector(`input[name="soal${i}"]:checked`);
        if (jawaban && jawaban.value === jawabanBenar[`soal${i}`]) {
            skor++;
        }
    }

    // Cek jawaban soal isian (soal 26-30)
    for (let i = 26; i <= 30; i++) {
        const jawaban = document.getElementById(`soal${i}`).value.trim().toLowerCase();
        const jawabanBenarLower = jawabanBenar[`soal${i}`].toLowerCase();
        if (jawaban === jawabanBenarLower) {
            skor++;
        }
    }

    // Hitung jumlah jawaban salah
    const salah = totalSoal - skor;

    // Tampilkan hasil
    const hasil = `Anda menjawab benar ${skor} dari ${totalSoal} soal.<br>Jawaban salah: ${salah}`;
    document.getElementById('hasil').innerHTML = hasil;

    // Buat link WhatsApp
    const pesan = encodeURIComponent(`Lapor,Saya mendapatkan Nilai ${skor} dari ${totalSoal} Soal. Benar : ${skor}, Salah : ${salah}`);
    const linkWa = `https://wa.me/6282350265164?text=${pesan}`;
    document.getElementById('hasil').innerHTML += `<br><a href="${linkWa}" target="_blank">Kirim Hasil Jawaban</a>`;
});