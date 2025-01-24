AOS.init();
const bars = document.querySelector('#bars');
const close = document.querySelector('#close');
const aside = document.querySelector('aside');

const slideContent = document.querySelector('#slideContent');
const project = document.querySelector('#project')

const skill = document.querySelector('#skill');
const modal = document.querySelector('#modal');

const flashlight = document.querySelector('#flashlight');

const preload = document.querySelector('.preload');
const who = document.querySelector('#who > span');

const dataPortofolio = [
    {
        id: 1,
        title: "CASHIER",
        category: 'React & ExpressJS',
        img: 'img/kasir.png',
        explain: "The cashier web application you created is a system designed to manage sales transactions at the cashier, commonly used in stores, restaurants, or other businesses requiring efficient transaction recording. On the frontend, this application is built using React to provide a responsive and dynamic user interface. With React, the app can display products, manage shopping carts, and process transactions in real-time. The backend utilizes Express.js to handle business logic, such as processing transaction data, validation, and communicating with the database to store sales records and inventory items. The combination of React and Express.js makes this application lightweight, fast, and easily accessible through browsers, aiding cashiers in processing transactions more efficiently."
    },
    {
        id: 2,
        title: "REEBLOG",
        category: 'Laravel 10',
        img: 'img/reeblog-homepage.png',
        explain: "This blog app is a web-based application built using Laravel as the backend framework, leveraging its strengths in data management and routing. For the visual design and styling, Tailwind CSS is used, enabling the creation of responsive and modern interfaces efficiently. This app allows users to dynamically create, manage, and display blog posts with a simple yet attractive design."
    },
    {
        id: 3,
        title: "The Big News",
        category: "HTML CCS JS",
        img: "img/thebignews.png",
        explain: "The Big News is a news website that delivers up-to-date, reliable, and relevant information. Built using static website technology, this site is designed to provide fast, lightweight, and easily accessible information across various devices without requiring a backend server or database. <a href=\"https://nsrddn.github.io/thebignews\" target=\"_blank\" class=\"text-blue-500 hover:underline\">View Website</a>"
    }
]

dataPortofolio.forEach(data => {
    const el = `<div class="relative overflow-hidden w-80 h-48" alt="">
					<div data-id="${data.id}" class="absolute max-[768px]:hidden w-full flex-col flex items-center justify-center h-full">
                        <i data-id="${data.id}" class="fa-solid text-xl text-white fa-magnifying-glass"></i> 
                    </div>
					<p class="bg-blue-800 max-[768px]:hidden text-center bottom-0 absolute text-white py-2 text-sm w-full">
						${data.title}
					</p>
					<img src="${data.img}" data-id="${data.id}" class="w-full h-full" alt="">
				</div>`;
    project.innerHTML += el;
})

document.addEventListener('click', function (e) {
    if (e.target.dataset.id) {
        const data = dataPortofolio.find(data => data.id == e.target.dataset.id);
        const el = `<div class="bg-white w-1/2 max-[768px]:w-full h-max rounded-sm">
			<header class="w-full bg-gray-200 flex items-center justify-between p-4">
				<div class="w-full font-normal flex flex-col items-center justify-center">
					<h2 class="text-xl text-gray-800">${data.title}</h2>
					<p class="text-gray-500">${data.category}</p>
				</div>
                <i onclick="closeModal()" class="fa-solid fa-circle-xmark text-2xl pr-3"></i>
			</header>
			<div class="p-4 w-full flex flex-col gap-4">
				<img src="${data.img}" alt="">
				<p class="text-sm text-gray-800" >${data.explain}</p>
			</div>
			<footer class="border-t w-full p-4 border-gray-200 flex justify-end items-center">
				<button onclick="closeModal()" class="bg-gray-800 cursor-none px-4 py-2 text-white hover:opacity-80">Close</button>
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

bars.addEventListener('click', function () {
    if (aside.style.transform == 'scaleX(0)') {
        bars.classList.replace('fa-bars-staggered', 'fa-x');
        aside.style.transform = 'scaleX(1)';
    } else {
        bars.classList.replace('fa-x', 'fa-bars-staggered');
        aside.style.transform = 'scaleX(0)';
    }
});

function closeModal() {
    modal.classList.add('hidden');
}

if (window.innerWidth <= 768) {
    document.body.classList.remove('poppins');
}

document.body.onpointermove = e => {
    const { clientX, clientY } = e;
    flashlight.style.display = 'block';
    flashlight.animate({
        top: `${clientY - 10}px`,
        left: `${clientX}px`
    }, { duration: 0, fill: 'forwards' });
}

document.body.onpointerleave = () => {
    flashlight.style.display = 'none';
}

window.addEventListener('load', function () {
    preload.animate({
        opacity: 0
    }, {duration: 500, fill: 'forwards'});
})

let typed = new Typed('.key-animation', {
    strings: ["Web Developer", "Student", "Unemployment"],
    typeSpeed: 70,
    backSpeed: 70,
    smartBackspace: true,
    loop: true
});
