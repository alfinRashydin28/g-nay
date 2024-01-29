function sendMessage(option) {
    // Gantilah 'YOUR_BOT_TOKEN' dan 'YOUR_CHAT_ID' dengan informasi bot Telegram Anda.
    var botToken = '6441266112:AAHLvHHiJcKXrKDsifdyJVVt-RPzYu8asIY';
    var chatId = '903460372';

    // Gantilah 'https://api.telegram.org/bot' dengan URL API bot Telegram.
    var apiUrl = 'https://api.telegram.org/bot' + botToken + '/sendMessage';

    // Kumpulkan data untuk dikirim ke bot Telegram.
    var data = {
        chat_id: chatId,
        text: 'Nayla Memilih : ' + option
    };

    // Kirim permintaan POST ke API bot Telegram.
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sukses:', data);
        alert('Pesan berhasil dikirim ke Telegram!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat mengirim pesan ke Telegram.');
    });
}

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#gomb", {
        strings: ['di jalan ada lampu,','di kerajaan ada ratu,','tapi di hatiku...' ,'cuma ada kamu, hihihihi<<span> 3333 </span>',' ','<span class="t-g"> I LOVEE U NAYLAA <span>','❤️'],
        speed: 50,
        waitUntilVisible: true,
      }).go();

    
});

let currentIndex = 0;
            const textElements = document.querySelectorAll('.l-text p');
            const lTextAwal = document.querySelector('.l-text-awal');
            const gambarElement = document.getElementById('gambar');
            const container = document.querySelector('.container');
            const btn = document.querySelector('.btn1');
            const container1 = document.querySelector('.container1');
            

           

      
            // Fungsi untuk menampilkan elemen berdasarkan index
            function showElement(index) {
                // Semua elemen p di dalam l-text disembunyikan
                textElements.forEach(elem => elem.style.display = 'none');
                
                // Menampilkan p di dalam l-text pada index tertentu
                textElements[index].style.display = 'block';
                // Ganti gambar pada text pertama, elemen ke-3, dan elemen ke-4
                switch(index) {
                case 1:
                    gambarElement.src = 'https://htmlku.com/0/panda/mikir.gif';
                    break;
                case 2:
                    gambarElement.src = 'https://feeldreams.github.io/pusn.gif';
                    break;
                case 3:
                    gambarElement.src = 'https://htmlku.com/0/panda/muah.gif';
                    break;
                case 4:
                    gambarElement.src = 'https://htmlku.com/0/panda/mikir.gif';
                    break;
                case 5:
                    gambarElement.src = 'https://feeldreams.github.io/pandakuning.gif';
                    break;
                case 6:
                    gambarElement.src = 'https://feeldreams.github.io/ngumpet.gif';
                    break;
                default:
                    // Gunakan gambar awal untuk kasus lainnya
                    gambarElement.src = 'https://feeldreams.github.io/pandaputih.gif';
                }

              

          
            }

            // Fungsi untuk menangani klik tombol "Next"
            function handleNextClick() {
                // Menyembunyikan elemen l-text-awal setelah tombol Next diklik
                lTextAwal.style.display = 'none';

                // Jika belum mencapai akhir, tampilkan elemen berdasarkan index
                if (currentIndex < textElements.length - 1) {
                    currentIndex++;
                    showElement(currentIndex);
                } else {
                    // Jika sudah mencapai elemen terakhir
                    btn.classList.add('hidden');
                    container.classList.add('hidden');  // Tambahkan class 'hidden' untuk menyembunyikan container
                    container1.classList.remove('hidden');  // Hapus class 'hidden' untuk menampilkan container1
                }
            }

            // Menambahkan event listener untuk tombol "Next"
            document.getElementById('btnNext').addEventListener('click', handleNextClick);


            function updateClock() {
                var now = new Date();
                var jam = now.getHours();
                var menit = now.getMinutes();
                var detik = now.getSeconds();
    
                // Format waktu agar selalu dua digit
                jam = padZero(jam);
                menit = padZero(menit);
                detik = padZero(detik);
    
                var waktu = jam + ":" + menit + ":" + detik;
                document.getElementById('jam').innerHTML = waktu;
    
                var sapaan = getSapaan(jam);
                document.getElementById('sapaan').innerHTML = sapaan;
    
                setTimeout(updateClock, 1000);
            }
    
            function padZero(value) {
                return value < 10 ? '0' + value : value;
            }
    
            function getSapaan(jam) {
                if (jam >= 4 && jam < 12) {
                    return 'Celamattt Pagiii <br/> cemangatttt yah pklnya';
                } else if (jam >= 12 && jam < 18) {
                    return 'Celamattt Sianggg celamattt istirahattt ';
                } else if (jam >= 18 && jam < 24) {
                    return 'Celamattt Soreee ';
                } else {
                    return 'Celamattt Malameee';
                }
            }
    
            // Panggil fungsi updateClock() untuk pertama kali
            updateClock();  








 