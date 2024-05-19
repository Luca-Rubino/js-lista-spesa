console.log('Hi!')

// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// creo array con la lista della spesa
let shopList = ['Mele','pere','pasta','sugo','basilico','zucchero','cannella','caffé',]


// creo variabile index per il ciclo while
let i = 0
// creo ciclo while per stampare singolarmente gli elementi della lista shopList
while(i < shopList.length){
    console.log(shopList[i])
    const bodySelector = document.querySelector('body')
    const p=document.createElement('p')
    bodySelector.appendChild(p)
    p.textContent=shopList[i]
    i++
}