AOS.init();
const bars = document.querySelector('#bars');
const close = document.querySelector('#close');
const aside = document.querySelector('aside');

const slideContent = document.querySelector('#slideContent');
const project = document.querySelector('#project')

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const message = document.querySelector('#message');
const send = document.querySelector('#send');

const skill = document.querySelector('#skill');
const modal = document.querySelector('#modal');

const dataPortofolio = [
    {
        id: 1,
        title: "CASHIER",
        category: 'React & ExpressJS',
        img: 'img/kasir.png',
        explain: "Aplikasi cashier berbasis web yang Anda buat adalah sistem untuk mengelola transaksi penjualan di kasir, biasanya digunakan di toko, restoran, atau bisnis lain yang membutuhkan pencatatan transaksi secara efisien. Di sisi frontend, aplikasi ini dibangun menggunakan React untuk memberikan antarmuka pengguna yang responsif dan dinamis. Dengan React, aplikasi ini bisa menampilkan produk, mengelola keranjang belanja, serta memproses transaksi secara real-time.Sisi backend-nya menggunakan Express.js untuk menangani logika bisnis, seperti pemrosesan data transaksi, validasi, serta komunikasi dengan basis data untuk menyimpan catatan penjualan dan inventaris barang. Kombinasi React dan Express.js membuat aplikasi ini ringan, cepat, dan mudah diakses melalui peramban, sehingga membantu kasir dalam memproses transaksi dengan lebih efisien."
    },
    {
        id: 2,
        title: "REEBLOG",
        category: 'Laravel 10',
        img: 'img/reeblog-homepage.png',
        explain: "App blog ini merupakan aplikasi berbasis web yang dibangun menggunakan Laravel sebagai kerangka kerja backend, memanfaatkan kekuatannya dalam pengelolaan data dan routing. Untuk tampilan dan gaya visual, digunakan Tailwind CSS yang memungkinkan pembuatan antarmuka responsif dan modern dengan efisiensi. App ini memungkinkan pengguna untuk membuat, mengelola, dan menampilkan postingan blog secara dinamis dengan desain yang sederhana namun menarik."
    },
    {
        id: 3,
        title: "The Big News",
        category: "HTML CCS JS",
        img: "img/thebignews.png",
        explain: "The Big News adalah sebuah website berita yang menyajikan informasi terkini, terpercaya, dan relevan. Dibangun menggunakan teknologi static website, situs ini dirancang untuk memberikan akses informasi yang cepat, ringan, dan mudah diakses di berbagai perangkat tanpa memerlukan backend server atau database. <a href=\"https://nsrddn.github.io/thebignews\" class=\"text-blue-500\">Kunjungi Website</a>"
    }
] 

dataPortofolio.forEach(data => {
    const el = `<div class="relative overflow-hidden w-80 h-48 cursor-pointer" alt="">
					<div data-id="${data.id}" class="absolute w-full flex items-center justify-center h-full">
						<img data-id="${data.id}" src="svg/search.svg" class="w-10" alt="">
						<p class="bg-blue-500 text-center bottom-0 text-white py-2 text-sm absolute w-full">
							${data.title}
						</p>
					</div>
					<img src="${data.img}" class="w-full h-full" alt="">
				</div>`;
    project.innerHTML += el;
})

document.addEventListener('click', function(e) {
    console.log(e.target)
    if(e.target.dataset.id) {
        const data = dataPortofolio.find(data => data.id == e.target.dataset.id);
        const el = `<div class="bg-gray-800 w-1/2 max-[768px]:w-full h-max rounded-sm">
			<header class="w-full bg-gray-700 text-white flex items-center justify-between p-4">
				<div class="w-full font-normal flex flex-col items-center justify-center">
					<h2 class="text-xl">${data.title}</h2>
					<p class="text-gray-500">${data.category}</p>
				</div>
				<img width="30" onclick="closeModal()" class="cursor-pointer hover:opacity-80" src="svg/x.svg" alt="">
			</header>
			<div class="p-4 w-full flex flex-col gap-4">
				<img src="${data.img}" alt="">
				<p class="text-sm text-gray-500" >${data.explain}</p>
			</div>
			<footer class="border-t w-full p-4 border-gray-700 flex justify-end items-center">
				<button onclick="closeModal()" class="bg-gray-700 px-4 py-2 text-white hover:opacity-80">Close</button>
			</footer>
		</div>`;
        modal.innerHTML = el;
        modal.classList.remove('hidden');
    }
})

window.onscroll = () => {
    const top = window.scrollY;
    const offset = skill.offsetTop - 150;
    const height = skill.offsetHeight;

    if (top >= offset && top < offset + height) {
        skill.classList.add('bars-animate')
    } else {
        skill.classList.remove('bars-animate')
    }
}

send.addEventListener('click', function () {
    const tel = "6282228263933";
    const text = `
			Name: ${name.value}
			Email: ${email.value}
			Phone: ${phone.value}
			Message: ${message.value}
			`;
    window.location.href = `https://wa.me/${tel}?text=${text}`;
});

bars.addEventListener('click', function () {
    if (aside.style.transform == 'scaleY(0)') {
        bars.src = 'svg/x.svg';
        aside.style.transform = 'scaleY(1)';
    } else {
        bars.src = 'svg/list.svg';
        aside.style.transform = 'scaleY(0)';
    }
});

function closeModal() {
    modal.classList.add('hidden');
}