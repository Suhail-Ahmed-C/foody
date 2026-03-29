const slides = [{title:'Enjoy Your Food at Foody', text:'Lorem ipsum...',bg:'images/hero_1.jpg'},{title:'Delicious & Healthy Food', text:'Experience premium...', bg:'images/hero_2.jpg'},
  { title: 'Talk About Favourite Food', text:'Experience premium...', bg:'images/dish0.jpeg' }];let current = 0;const hero = document.getElementById('hero');
const title = document.getElementById('heroTitle');const text = document.getElementById('heroText');function showSlide(index){ hero.style.background = `url('${slides[index].bg}') 
center/cover no-repeat`;title.textContent = slides[index].title;text.textContent = slides[index].text;}function nextSlide(){ current=(current+1)%slides.length; showSlide(current); }
function prevSlide(){ current=(current-1+slides.length)%slides.length; showSlide(current); }setInterval(nextSlide,7000);const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('show'); });},{threshold:0.2});
document.querySelectorAll('.animate').forEach(el=>observer.observe(el));const filterBtns = document.querySelectorAll('.filter-btn');const items = document.querySelectorAll('.menu-item');
filterBtns.forEach(btn=>{btn.addEventListener('click',()=>{  document.querySelector('.filter-btn.active').classList.remove('active');  btn.classList.add('active');
  const filter = btn.dataset.filter;items.forEach(item=>{  item.classList.remove('hide');  if(filter!=='all' && !item.classList.contains(filter)) item.classList.add('hide');});});});
function openModal(card){  const img = card.querySelector('.menu-img').style.backgroundImage.replace(/url\(["']?/, '').replace(/["']?\)/, '');
  document.getElementById('modalImg').src = img;document.getElementById('modalTitle').innerText = card.querySelector('h4').innerText;
  document.getElementById('modalDesc').innerText = card.querySelector('p').innerText; document.getElementById('modalPrice').innerText = card.querySelector('.price')?.innerText || '';
  new bootstrap.Modal(document.getElementById('menuModal')).show();}
document.querySelectorAll('.menu-card').forEach(card=>{const price = card.querySelector('.price-circle');if(price){card.addEventListener('mouseenter', ()=>gsap.to(price,{scale:1.2,
  duration:0.4,ease:"power3.out"})); card.addEventListener('mouseleave', ()=>gsap.to(price,{scale:1,duration:0.4,ease:"power3.out"}));}});
