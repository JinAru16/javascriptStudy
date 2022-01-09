const sizes = ['mini', 'pro', 'pro max',]
const product = ['iphon12', 'macbook', 'iphon12']

const apple = sizes.map((size, i) => {
    return product[i] + size;
});

console.log(apple)