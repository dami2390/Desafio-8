import { knex } from '../../db.js';

const productos = [

    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        title: 'Correa',
        price: 3500,
        description: 'Correa para perros adultos',
        code: 'AA-1',
        image: 'https://dami2390.github.io/mascotasfelices/img/accesorio3.png',
        stock: 10
    },
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        title: 'Pelota',
        price: 800,
        description: 'Pelota para jugar con tu perro',
        code: 'AA-2',
        image: 'https://dami2390.github.io/mascotasfelices/img/accesorio6.png',
        stock: 30
    },
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        title: 'Gimnasio Gato',
        price: 20000,
        description: 'Gimnasio para que jueguen los gatos',
        code: 'BB-1',
        image: 'https://dami2390.github.io/mascotasfelices/img/accesorio5.png',
        stock: 3
    },
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        title: 'Plumas',
        price: 2000,
        description: 'Juguete de plumas para gatos',
        code: 'BB-2',
        image: 'https://dami2390.github.io/mascotasfelices/img/accesorio2.png',
        stock: 20
    },
]

const carritos = [
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }
]

const productoCarritoRelations = [
    {
        carritoId: 2,
        productoId: 1
    },
    {
        carritoId: 2,
        productoId: 2
    },
    {
        carritoId: 2,
        productoId: 3
    }
]

export async function populateProducts() {
    try {
        await knex.insert(productos).from('producto');
        console.log('🧪 Se agregaron Productos a la tabla')
    } catch (error) {
        console.log(error);
    } 
}

export async function populateCarts() {
    try {
        await knex.insert(carritos).from('carrito');
        console.log('🛒 Se agregaron Carritos a la tabla')
    } catch (error) {
        console.log(error);
    } 
}

export async function populateProductoCarrito() {
    try {
        await knex.insert(productoCarritoRelations).from('productoCarrito');
        console.log('🛒<->🧪 Se agregaron relaciones a la tabla')
        return;
    } catch(error) {
        console.log(error);
    }
}