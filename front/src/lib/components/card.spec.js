import { render, fireEvent } from '@testing-library/svelte';

import Card from './card.svelte';


describe("Card", () => {
    test("add to cart", async () => {   
        
        let mycard = `{"id": "test-01", "name": "Test-Card", "images": {"large": "https://images.pokemontcg.io/pl3/1_hires.png"}, "cardmarket":{"prices":{"avg1": 3}}} `;
        mycard = JSON.parse(mycard);

        const { getByText } = render(Card, {card: mycard})

        let buttonAddToCart = getByText('Ajouter au panier');

    })
})

