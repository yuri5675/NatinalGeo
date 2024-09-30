function initTabList(){
    const js_tabAnimais = document.querySelectorAll('.js_tabAnimais li');
    const js_tabDescricao = document.querySelectorAll('.js_tabDescricao section');

    js_tabAnimais.forEach((itemLi, indice)=>{
        itemLi.addEventListener('click', ()=>{
            activeTab(indice);
        })
    })

    function activeTab(indice){
        js_tabDescricao.forEach(itemSection =>{
            itemSection.classList.remove('ativo');
        })
        const animation = js_tabDescricao[indice].dataset.anima;
        js_tabDescricao[indice].classList.add('ativo', animation)

       
    }

    // logo abaixo,fazendo o primeiro item sempre fica ativo
    js_tabDescricao[0].classList.add('ativo')
};
initTabList()

 

/* criando Accordion list:  é uma lista de itens empilahados verticalmente 
    que ao ser clicado, revela ou oculta o conteudo da lista */
function initAccordion(){
    const jsAcordion=document.querySelectorAll('.js_accordion dt')

    jsAcordion.forEach(itemdt =>{
        itemdt.addEventListener('click',activeAcordian)


    })
   
    function activeAcordian(){
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo');
        /*nextElementSibling: retorna o conteudo html do proximo irmão(logo o que vem abaixo do elemento pai)*/

}

jsAcordion[0].classList.add('ativo')
jsAcordion[0].nextElementSibling.classList.add('ativo');  
   

}
initAccordion();


function modal(){
    const jacontainermodal=document.querySelector('[data-modal="jacontainermodal"]')
    const jsBtnfechamodal=document.querySelector('[data-modal="jsBtnfechamodal"]')
    const  buttonabrirmodal=document.querySelector('[data-modal="buttonabrirmodal"]')

    buttonabrirmodal.addEventListener('click',abrirmodal)
    function abrirmodal(event){
        jacontainermodal.classList.add('ativo')



    }

  jsBtnfechamodal.addEventListener('click',fecharmodal)
  function fecharmodal(event){
    jacontainermodal.classList.remove('ativo')
  }

}

modal();




