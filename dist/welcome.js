"use strict";
// Interface
function testPersonne() {
    return {
        prenom: "Souleymane",
        nom: "Diallo",
        age: 24,
        status: true
    };
}
var testPersonne2 = {
    prenom: "AlDiouma",
    nom: "Baldé",
    age: 47,
    status: false
};
var afficTePersonne1 = testPersonne();
var afficTePersonne2 = testPersonne2;
var interfacePersonne = document.querySelector("#interface");
if (interfacePersonne) {
    interfacePersonne.innerHTML = "".concat(afficTePersonne1.prenom, " & ").concat(afficTePersonne2.prenom);
}
// Generics
// EcTanger deux valeur
function testGeneric(a) {
    return a;
}
var a = "TECHLAB";
var valeurA = testGeneric(a);
var afficheGeneric = document.querySelector("#generic");
if (afficheGeneric) {
    afficheGeneric.innerHTML = "".concat(valeurA);
}
var animal1 = {
    nom: "Chien",
    patte: 4,
    status: true,
    activite: "Marche"
};
var animal2 = {
    nom: 45874,
    patte: "patte",
    status: true,
    activite: 58454654654
};
function afficheInterfaceGeneric(animal) {
    var afficheinterfaceGeneric = document.querySelector("#interfacegeneric");
    if (afficheinterfaceGeneric) {
        afficheinterfaceGeneric.innerHTML = "".concat(animal.nom);
    }
}
afficheInterfaceGeneric(animal1);
afficheInterfaceGeneric(animal2);
// RXJS(Observable)
