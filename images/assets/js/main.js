
//-----------SubmitMessageToEmail--------

function sendEmail(){
	const contactModal = document.querySelector("#contact_modal");
	const fullName = document.getElementById("name");
	const emailAdd = document.getElementById("email");
	const cliantMessage = document.getElementById("message");
	const header = document.querySelector('#header');
	const portModal = document.querySelector(".portfolio_modal_success");
	const error = document.querySelector("#contact_section .right_contact_info");
	const serviceId = "service_qn80isc";
	const templateId = "template_m4fpsuc";

	if ( fullName.value.length === 0 || 
		emailAdd.value.length === 0 || 
		emailAdd.value.length === 0 || 
		!emailAdd.value.includes("@") ||
		!emailAdd.value.includes(".com") ||
		cliantMessage.value.length === 0){
			error.classList.add("error");

	}else{
		var params = {
			name:document.querySelector("#name").value,
			email:document.querySelector("#email").value,
			message:document.querySelector("#message").value
		};
		emailjs.send(serviceId,templateId,params).then( res => {
			console.log("tala2");
			location.reload();
			portModal.classList.add("modalBox");

		}).catch();
	}
}



// -----------menuBtn_section------------
const navSlide = ()=>{
	const menuBtn = document.querySelector("#menuBtn");
	const nav = document.querySelector(".navar");
	const home = document.querySelector(".logo");

	//-------homeToggle-----------
	home.addEventListener("click", ()=>{ 
		nav.classList.remove('showNav'); 
		menuBtn.classList.remove("toggle");
		sec.classList.add("show_header_animation");
	});	
	//-------menuSlider------------
	menuBtn.addEventListener("click", ()=>{ 
		nav.classList.toggle('showNav'); 
		menuBtn.classList.toggle("toggle"); 
	});
	//--------linksClickToggle-----------
	document.querySelectorAll('.links').forEach(n =>
	n.addEventListener("click",()=>{
		nav.classList.remove('showNav');
		menuBtn.classList.remove("toggle"); 
	}));
};

navSlide();



//-------------scrollNav----------------
window.addEventListener('scroll', function(){
	const navScroll = document.querySelector('nav');
	navScroll.classList.toggle("navChange", window.scrollY > 0);
});

//------------nav_scroll_active--------------
const sections = document.querySelectorAll(".section"); 
const navLinks =document.querySelectorAll(".links"); 
let currentSection = "home";

window.addEventListener("scroll", ()=>{ sections.forEach (sections => { 
	if(window.scrollY >= (sections.offsetTop) - 150)
		{ currentSection = sections.id; } 
	});
	navLinks.forEach(navLinks => {
		if(navLinks.href.includes(currentSection)){
			document.querySelector('.active').classList.remove('active');
			navLinks.classList.add('active');
		}
	})
});


//----------animateOnScroll----------
const projSection = document.querySelectorAll('.section');
const slideAnimate = document.querySelectorAll(".slide_animate");
const sliders =document.querySelectorAll(".slide-section");
const slideLeft = document.querySelectorAll(".slide_left");
const slideRight = document.querySelectorAll(".slide_right");
const projBtn = document.querySelectorAll(".projBtn");
const heroSlide = document.querySelectorAll(".hero_slide");


window.onscroll = () => {
	projSection.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 400;
		let height = sec.offsetHeight - 50;
		let topOffset = sec.top;
		if(top >= offset && top < offset + height){
			sec.classList.add("show_animation");
		}else{
			sec.classList.remove("show_animation");
		};

	})
}

const appearOptions = {
	threshold:0,
	rootMargin: "0px 0px -100px 0px"
};
const appearOnScroll = new IntersectionObserver
	(function(entries, appearOnScroll) {
		entries.forEach(entry => {
			if(!entry.isIntersecting) {
				return;
			}else{
				entry.target.classList.add('slide');
				appearOnScroll.unobserve(entry.target);
			}
		})
	}, appearOptions);


heroSlide.forEach(hero =>{
	appearOnScroll.observe(hero);
})
slideAnimate.forEach(slide => {
	appearOnScroll.observe(slide);
})
slideLeft.forEach(slideL => {
	appearOnScroll.observe(slideL);
});
slideRight.forEach(slideR => {
	appearOnScroll.observe(slideR);
});
projBtn.forEach(slideBtn => {
	appearOnScroll.observe(slideBtn);
})




