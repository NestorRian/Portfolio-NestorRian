function escrevendoLetra(){
    function ativaLetra(eLemento){
        const arrTexto = eLemento.innerHTML.split('');
        eLemento.innerHTML = '';
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
               eLemento.innerHTML += letra; 
            }, 75 * i);
        });
    }
    
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

escrevendoLetra()

function menuMobol(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');

    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    })
}

menuMobol()

function sobreMim(){

    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul li');

    divEducation[0].classList.add('ativo')
    liEducation[0].classList.add('ativo')

    function slideShow(index){
        divEducation.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liEducation.forEach((botao)=>{
            botao.classList.remove('ativo');
        })
        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo')
    }

    liEducation.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        })
    });

}

sobreMim();
