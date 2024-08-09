let count =1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},2000)

function nextImage(){
    count++;
    if(count>6){
        count =1;
    }

    document.getElementById("radio"+count).checked = true;
};

function mostrar(){
    let mostarda = document.querySelector('.nav-bar ul');
    
    if(mostarda.classList.contains("abrir")){
        mostarda.classList.remove("abrir");
        document.querySelector('.menu-icon img').src ="menu.PNG"
    }else{
        mostarda.classList.add("abrir");
        document.querySelector('.menu-icon img').src ="close.PNG"
    }
    
   
}
function acordeonLista(){


    const dt = document.querySelectorAll('.js-acordeon dt');
        dt[0].classList.add('ativo');
        dt[0].nextElementSibling.classList.add('ativo');
        function ativarAcordeon(){
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo');
            
        }

        dt.forEach((item)=>{
            
            item.addEventListener('click',ativarAcordeon)
        })
}
    acordeonLista();

const linksInternos = document.querySelectorAll('.js-navegacao a[href^="#"]');

function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    window.scrollTo({
        top: topo,
        behavior:'smooth'
    })
}

linksInternos.forEach((item)=>{
    item.addEventListener('click', scrollToSection)
})

function leiaMais (){

    const pontos = document.getElementById('pontos');
    const maisTexto = document.getElementById('mais');
    const botao = document.getElementById('botaoTroca');

   if(pontos.style.display === 'none'){
    
    pontos.style.display = 'inline';
    maisTexto.style.display = 'none';
    botao.innerHTML= 'Leia mais';
   }else{
    pontos.style.display = 'none';
    maisTexto.style.display = 'inline';
    botao.innerHTML= 'Leia menos';
   }

}

