const express = require('express');

const app = express();
const port = 3000;
const tf = require('@tensorflow/tfjs');

app.get('/', (rew, res) => {
    res.send({ tensor1: { shape: tensor1.shape, size: tensor1.size, rankType: tensor1.rankType }, tensor2: { shape: tensor2.shape, size: tensor2.size, rankType: tensor2.rankType }, tensor3: { shape: tensor3.shape, size: tensor3.size, rankType: tensor3.rankType } })
})
const tensor1 = tf.tensor1d([1.1, 2.2, 3.3])
console.log(tensor1);
tensor1.print();

console.log("***********************");

const tensor2 = tf.tensor2d([[1, 2], [3, 4]]);
console.log(tensor2);
tensor2.print();

console.log("***********************");

const tensor3 = tf.tensor1d([1.5, 2, 3, 4, 5, 6,]);
console.log(tensor3);
tensor3.print();

app.listen(port, () => {
    console.log(`Escuchando en el puerto:${port}`)
})