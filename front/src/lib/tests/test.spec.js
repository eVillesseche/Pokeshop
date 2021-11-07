import { render, fireEvent } from '@testing-library/svelte';
import Test from './test.svelte';

describe("Cart", () => {

    let mycard = `{"id": "test-01", "name": "Test-Card", "images": {"large": "https://images.pokemontcg.io/pl3/1_hires.png"}, "cardmarket":{"prices":{"avg1": 3}}} `;
    mycard = JSON.parse(mycard);

    test("add to cart", async () => {          
        const { getByText, getByTestId} = render(Test, {card: mycard})
        let buttonsAddToCart = getByText('Ajouter au panier');

        await fireEvent.click(buttonsAddToCart);
        let cartCard = getByTestId('cartCard');
        let total = getByTestId('total');

        expect(cartCard).toHaveTextContent("Test-Card")
        
        expect(total).toHaveTextContent("Total: 3 €")
        
    }),
    test("increment card", async() => {
        const { getByText, getByTestId} = render(Test, {card: mycard})

        let buttonAddToCart = getByText('Ajouter au panier');
        let cartCardNumber = getByTestId('cartCardNumber');
        let buttonincrementCard = getByTestId('incrementCard');
        let total = getByTestId('total');
        
        expect(cartCardNumber).toHaveTextContent("1");
        expect(total).toHaveTextContent("Total: 3 €")

        await fireEvent.click(buttonAddToCart);
        expect(cartCardNumber).toHaveTextContent("2"); 
        expect(total).toHaveTextContent("Total: 6 €")

        await fireEvent.click(buttonincrementCard);
        expect(cartCardNumber).toHaveTextContent("3"); 
        expect(total).toHaveTextContent("Total: 9 €")
    }),
    test("decrement card", async() => {

        const {getByTestId} = render(Test, {card: mycard})
        let cartCardNumber = getByTestId('cartCardNumber');
        let buttondecrementCard = getByTestId('decrementCard');
        let total = getByTestId('total');
        
        expect(cartCardNumber).toHaveTextContent("3");
        expect(total).toHaveTextContent("Total: 9 €")

        await fireEvent.click(buttondecrementCard);
        expect(cartCardNumber).toHaveTextContent("2");  
        expect(total).toHaveTextContent("Total: 6 €")
        await fireEvent.click(buttondecrementCard);
        expect(cartCardNumber).toHaveTextContent("1");  
        expect(total).toHaveTextContent("Total: 3 €")
    })
    test("delete card", async() => {

        const { getByText, getByTestId} = render(Test, {card: mycard})
        let cartCardNumber = getByTestId('cartCardNumber');
        let buttondeleteCard = getByTestId('deleteCard');
        
        let myCart = getByTestId('cart');


        expect(myCart).not.toContainHTML('<p>Nothing in the cart.</p>')

        await fireEvent.click(buttondeleteCard);

        expect(myCart).toContainHTML('<p>Nothing in the cart.</p>')

    })

})