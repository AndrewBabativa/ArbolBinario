const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const arbolesBinario = require('../arbol.json');

router.get('/', (req, res) => {
    res.json(arbolesBinario);
});

router.post('/', (req, res) => {
    const { izquierdo, derecho, valor } = req.body;
    const nuevoArbolBinario = returnArbolBinario(izquierdo,derecho,valor);
    if (izquierdo && derecho && valor) {
        arbolesBinario.push(nuevoArbolBinario);
        res.json(nuevoArbolBinario);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

    function Nodo(valor, izquierdo, derecho){
        this.valor = valor;
        this.izquierdo = izquierdo;
        this.derecho = derecho;
    }

    function returnArbolBinario(nIzquierdo, nDerecho , nValor) {
        var Nodo1 = new Nodo(nIzquierdo);
        var Nodo2 = new Nodo(nDerecho);
        var NodoRaiz = new Nodo(nValor, Nodo1, Nodo2);
        return(NodoRaiz);
    }

module.exports = router;