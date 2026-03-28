const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-item');

// navigation
navItems.forEach(el=>{
el.addEventListener('click',()=>{
const i = el.dataset.page;
sections[i].scrollIntoView({behavior:'smooth'});
});
});

// modal
const modal = document.getElementById('modal');
const playBtn = document.getElementById('playBtn');
const closeBtn = document.getElementById('closeBtn');
const video = document.getElementById('modalVideo');

playBtn.onclick = ()=>{
modal.classList.add('show');
video.play();
};

closeBtn.onclick = ()=>{
modal.classList.remove('show');
video.pause();
};

// ESC support
document.addEventListener('keydown',e=>{
if(e.key === "Escape"){
modal.classList.remove('show');
video.pause();
}
});