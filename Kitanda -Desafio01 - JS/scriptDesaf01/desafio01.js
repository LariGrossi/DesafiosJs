   
window.onload = function(){

let frutas = [
    {descrição: "Banana", preco: 5.98 },
    {descrição: "Maçã", preco: 3.78  },
    {descrição: "Abacaxi", preco: 8.69 },
    {descrição: "Melancia", preco: 4.29  },
    {descrição: "Melão", preco: 6.98 },
]

 
const produtos = document.querySelector(`#produtos`);

( ()=>{
    for ( let fruit of frutas) {
        const frutaLi = document.createElement(`li`);

        for(listaFruta in fruit) {
            if( listaFruta == `preco`){
                produtos.appendChild(frutaLi).setAttribute(`data-preco`, fruit[listaFruta]);             
            } else {
                produtos.appendChild(frutaLi).textContent = `${fruit[listaFruta]}`;
                
                
            }            
        }
    }
} )()


let cestaCli=[];
    const cestaDoCliente=document.querySelector('#cestaDoCliente');
    const totalCompra=document.querySelector('#mostraTotalCompra');
    let selecaoItem=document.querySelectorAll('#produtos>li');
    let total=0;

    selecaoItem.forEach(function(item){
        item.addEventListener('click', function(){
            if(cestaCli.indexOf(item.textContent)!=-1){
                alert('Este item já está na sua cesta!');
            } else {
                total+=Number(item.dataset.preco);
                cestaCli.push(item.textContent);
                let itemCesta=document.createElement('li');
                cestaDoCliente.appendChild(itemCesta).textContent=item.textContent;
                totalCompra.value=total.toFixed(2);
            }
            console.log(item.textContent);
        })
    })
}
