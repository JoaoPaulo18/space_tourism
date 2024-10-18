const MenuMobile = document.querySelector(".MobileMenu");
MenuMobile.addEventListener('click', ()=>{
  MenuMobile.classList.toggle('active');
  ClickOutside();
})
function ClickOutside(){
  const Ul = document.querySelector('.MainNav');
  document.documentElement.addEventListener('touchstart',(e)=>{
    if(!Ul.contains(e.target) && !MenuMobile.contains(e.target))
    MenuMobile.classList.remove('active');
  
  })
}


const Links = document.querySelectorAll('.NavUl a');
Links.forEach(Link =>{
  if(document.URL.includes(Link.getAttribute('href')))
  Link.parentNode.classList.add('active')
})