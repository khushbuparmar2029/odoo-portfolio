const galleries={placement:[
['assets/images/placement-login.jpg','Login page'],
['assets/images/placement-company-form.jpg','Company requirement form'],
['assets/images/placement-student-form.jpg','Student details form'],
['assets/images/placement-opportunities.jpg','Opportunity listing'],
['assets/images/placement-company-detail.jpg','Company detail and application page'],
['assets/images/placement-application.jpg','Application confirmation'],
['assets/images/placement-selection.jpg','Selection page'],
['assets/images/placement-company-list.jpg','Company list view'],
['assets/images/placement-company-kanban.jpg','Company kanban view'],
['assets/images/placement-student-list.jpg','Student list view']
]};
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-header nav');
toggle.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const modal=document.getElementById('galleryModal'),img=document.getElementById('galleryImage'),caption=document.getElementById('galleryCaption');
let active=[],index=0;
function show(){img.src=active[index][0];caption.textContent=active[index][1]}
document.querySelectorAll('.open-gallery').forEach(btn=>btn.addEventListener('click',()=>{active=galleries[btn.dataset.gallery];index=0;show();modal.classList.add('open');modal.setAttribute('aria-hidden','false')}));
document.querySelector('.modal-close').addEventListener('click',()=>modal.classList.remove('open'));
document.querySelector('.next').addEventListener('click',()=>{index=(index+1)%active.length;show()});
document.querySelector('.prev').addEventListener('click',()=>{index=(index-1+active.length)%active.length;show()});
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});
const backToTop=document.getElementById('backToTop');
window.addEventListener('scroll',()=>backToTop.classList.toggle('show',window.scrollY>500));
backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
