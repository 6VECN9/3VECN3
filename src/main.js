const data = [
    {
        name: 'Regina',
        base: 'tomate',
        price_small: 6.5,
        price_large: 9.95,
        image: 'https://images.unsplash.com/photo-1532246420286-127bcd803104?fit=crop&w=500&h=300'
    },
    {
        name: 'Napolitaine',
        base: 'tomate',
        price_small: 6.5,
        price_large: 8.95,
        image: 'https://images.unsplash.com/photo-1562707666-0ef112b353e0?&fit=crop&w=500&h=300'
    },
    {
        name: 'Spicy',
        base: 'crème',
        price_small: 5.5,
        price_large: 8,
        image: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?fit=crop&w=500&h=300',
    }
];

const toPizza = (pizzaHtml, {image, name, price_large, price_small})=> pizzaHtml += `<article class="pizzaThumbnail">
    <a href="${image}">
        <img src="${image}"/>
        <section>${name}
            <ul>
                <li>Prix petit format : ${price_small.toFixed(2)} €</li>
                <li>Prix grand format : ${price_large.toFixed(2)} €</li>
            </ul>
        </section>
    </a>
</article>`;

const compareName = (pizza, anotherPizza) => {
    let pizzaA = pizza.name.toLowerCase(),
        pizzaB = anotherPizza.name.toLowerCase();
    if(pizzaA < pizzaB)
        return -1;
    else if (pizzaA > pizzaB)
        return 1;
    else
        return 0;
};
const smallSizeCompareRising = ({price_small}, {price_small: another_price_small}) => price_small - another_price_small;
const smallThenLargeSizeCompareRising = ({price_large, price_small}, {price_large: another_price_large,price_small: another_price_small}) =>
    price_small === another_price_small?
    price_large - another_price_large:
    price_small - another_price_small;

//Alphabetical Sort
//data.sort(compareName);
//Small price sort
//data.sort(smallSizeCompareRising);
//Small price then Large price sort
//data.sort(smallThenLargeSizeCompareRising);

//Filters
const baseFilter = data.filter(({base}) => base === 'tomate');
const priceFilter = data.filter(({price_small}) => price_small < 6);
const regex = new RegExp(/.*i.*i.*/,'gi');
const iiFilter = data.filter(({name}) => name.match(regex));

document.querySelector('.pageContent').innerHTML = iiFilter.reduce(toPizza,"");
