// Interface

interface Personne{
    
    prenom:string,
    nom:string,
    age:number,
    email?:string,
    status:boolean
}


function testPersonne(): Personne {

    return{
        prenom:"Souleymane",
        nom:"Diallo",
        age:24,
        status:true
    }
    
}

const testPersonne2:Personne={
    prenom:"AlDiouma",
    nom:"Baldé",
    age:47,
    status:false
}


const afficTePersonne1= testPersonne()
const afficTePersonne2=testPersonne2


const interfacePersonne=document.querySelector("#interface")

if (interfacePersonne) {
    interfacePersonne.innerHTML=`${afficTePersonne1.prenom} & ${afficTePersonne2.prenom}`

}

// Generics

// EcTanger deux valeur
function testGeneric<T>(a:T): T {

    return a
}

let a="TECHLAB"

const valeurA=testGeneric<string>(a)


const afficheGeneric=document.querySelector("#generic")
if (afficheGeneric) {
    afficheGeneric.innerHTML=`${valeurA}`
}


// Interface Generics

interface Animal<A,T,P>{
    nom:A,
    patte:T
    status:P
    activite:A
}

const animal1: Animal<string,number,boolean>={
    nom:"Chien",
    patte:4,
    status:true,
    activite:"Marche"
}


const animal2: Animal<number,string,boolean>={
    nom:45874,
    patte:"patte",
    status:true,
    activite:58454654654
}


function afficheInterfaceGeneric<A,T,P>(animal:Animal<A,T,P>):void {

    const afficheinterfaceGeneric=document.querySelector("#interfacegeneric")
    if (afficheinterfaceGeneric) {
        afficheinterfaceGeneric.innerHTML=`${animal.nom}`
    }

    
}


afficheInterfaceGeneric(animal1)
afficheInterfaceGeneric(animal2)














// RXJS(Observable)

