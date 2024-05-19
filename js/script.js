console.log('Hi!')

// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// creo array con la lista della spesa
let shopList = ['Mele','pere','pasta','sugo','basilico','zucchero','cannella','caffé',]


// creo variabile index per il ciclo while
let i = 0
// creo ciclo while per stampare singolarmente gli elementi della lista shopList
while(i < shopList.length){
    console.log(shopList[i]) // stampo(in console) elementi singolarmente della lista shopList
    const bodySelector = document.querySelector('body') // seleziono il tag body nel dom
    const p=document.createElement('p') // creo nel dom il tag p
    bodySelector.appendChild(p) // inserisco il tag p come figlio di body
    p.textContent=shopList[i] // nel tag p inserisco i contenuti della lista
    i++ // condizione di uscita dal ciclo
}

// Risoluzione esercizio stampando una lista con tag li nel dom

// const bodySelector = document.querySelector('body')
// const section=document.createElement('section')
// const ul=document.createElement('ul')
// bodySelector.appendChild(section)
// section.appendChild(ul)
// while(i < shopList.length){
//     console.log(shopList[i])
//     const li=document.createElement('li')
//     ul.appendChild(li)
//     li.textContent=shopList[i]
//     i++
// }