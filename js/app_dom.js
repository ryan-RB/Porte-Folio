document.addEventListener("DOMContentLoaded", (e) =>{
    e.preventDefault();
    console.log("Loaded.")
    /*dom*/
    let parents, child, i, datecopy, lastelement
        parents = document.querySelector("body")[1]
        lastelement = document.querySelector("footer > addres > ul > li:last-child")
        lastelement.style.color = "red"
        console.log(parents.childNodes[1])
        for(i = 0; i < parent.childNodes.lenght; i++){
            console.log(parents.childNodes[i])
        }
        /*dans le dom comment créer un élément html*/
        el = document.createElement("ul")
        child = ["Linux","OS","Android"]
        
        parents.prepend(el)
        for(index in child){
            let value = child[index]
            el.innertext +=`<li>${index} : ${value}</li`;
        }
        /* ajouter la date dans footer par le DOM */
        
        /*objet date */
        const userDate = ({
            datecopy = new Date(),
            lastelement : document.querySelector("footer > adress > ul > li:last-child"),
            calc(n){
                console.log(n*n)
            }
        })
        userDate.calc(10)
        console.log(userDate.datecopy.getFullYear())
        userDate.lastelement.innerText +=` ${userDate.getFullYear()}`
})