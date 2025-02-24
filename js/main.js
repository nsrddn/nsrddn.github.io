const bars = document.querySelector('#bars');
// const close = document.querySelector('#close');
const checkbox = document.querySelector('.navigation__checkbox');

// const slideContent = document.querySelector('#slideContent');
const project = document.querySelector('.portofolio__project')

const modal = document.querySelector('.modal');

const circle = document.querySelector('.circle');

// const preload = document.querySelector('.preload');
// const who = document.querySelector('#who > span');

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
    const el = `<div data-id="${data.id}" class="project" alt="">
					<div class="project__background">
                        <i class="project__icon fa-solid fa-magnifying-glass"></i> 
                    </div>
					<p class="project__title">
						${data.title}
					</p>
					<img src="${data.img}" class="project__image" alt="">
				</div>`;
    project.innerHTML += el;
})

document.addEventListener('click', function (e) {
    if (e.target.dataset.id) {
        const data = dataPortofolio.find(data => data.id == e.target.dataset.id);
        const el = `<div class="modal__content">
			<header class="modal__header">
				<div class="modal__title">
					<h2 class="">${data.title}</h2>
					<p class="">${data.category}</p>
				</div>
                <i onclick="closeModal()" class="modal__close fa-solid fa-x"></i>
			</header>
			<div class="modal__body">
				<img src="${data.img}" class="modal__image" alt="">
				<p class="modal__text" >${data.explain}</p>
			</div>
			<footer class="modal__footer">
				<button onclick="closeModal()" class="modal__btn">Close</button>
			</footer>
		</div>`;
        modal.innerHTML = el;
        modal.style.display = 'grid';
    }else if(e.target.classList.contains('navigation__link')) {
        checkbox.checked = !checkbox.checked;
        bars.classList.replace('fa-x', 'fa-bars-staggered');
        modal.style.display = 'none';
    }
})

checkbox.addEventListener('change', function () {
    if (this.checked) {
        bars.classList.replace('fa-bars-staggered', 'fa-x');
    } else {
        bars.classList.replace('fa-x', 'fa-bars-staggered');
    }
});

function closeModal() {
    modal.style.display = 'none';
}

document.body.onpointermove = e => {
    const { clientX, clientY } = e;
    circle.style.display = 'block';
    circle.animate({
        top: `${clientY - 10}px`,
        left: `${clientX - 10}px`
    }, { duration: 0, fill: 'forwards' });
}

document.body.onpointerleave = () => {
    circle.style.display = 'none';
}

// window.addEventListener('load', function () {
//     preload.animate({
//         opacity: 0
//     }, {duration: 500, fill: 'forwards'});
// })

let typed = new Typed('.home__ido', {
    strings: ["Web Developer", "Student", "Unemployment"],
    typeSpeed: 70,
    backSpeed: 70,
    smartBackspace: true,
    loop: true
});
