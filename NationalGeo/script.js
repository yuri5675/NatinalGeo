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