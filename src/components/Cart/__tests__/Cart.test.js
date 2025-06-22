import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Cart from "../Cart";
import {CartContext} from "../../CartContext";
import {MemoryRouter} from "react-router-dom";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js"


const stripePromise = loadStripe("pk_test_12345")

const mockCart = [
    {id: 1, name: "macaroon", price: 100, quantity: 2},
    {id: 2, name: "cacke", price: 150, quantity: 1},
]

const mockContext = {
    cartItems: mockCart,
    removeFromCart: jest.fn(),
    clearCart: jest.fn()
}


describe('Cart component', () => {
    test("отображает товары в корзине", () => {
        render(
            <MemoryRouter>
                <Elements stripe={stripePromise}>
                    <CartContext.Provider value={mockContext}>
                        <Cart />
                    </CartContext.Provider>
                </Elements>
            </MemoryRouter>
        )

        expect(screen.getByText("macaroon")).toBeInTheDocument()
        expect(screen.getByText("cacke")).toBeInTheDocument()
        expect(screen.getAllByText(/Итого/i).length).toBeGreaterThan(0)
    })

    test("удаляет товар из корзины при клике", () => {
        const mockRemove = jest.fn()

        render(
            <MemoryRouter>
                <Elements stripe={stripePromise}>
                    <CartContext.Provider value={{...mockContext, removeFromCart: mockRemove}}>
                        <Cart />
                    </CartContext.Provider>
                </Elements>
            </MemoryRouter>
        )

        const deleteButton = screen.getAllByText(/x/i)
        expect(deleteButton.length).toBeGreaterThan(0)
        deleteButton[0].click()
        expect(mockRemove).toHaveBeenCalled()
    })

    test("отображает сообщение при пустой корзине", () => {
        render(
            <MemoryRouter>
                <Elements stripe={stripePromise}>
                    <CartContext.Provider value={{...mockContext, cartItems: []}}>
                        <Cart />
                    </CartContext.Provider>
                </Elements>
            </MemoryRouter>
        )

        expect(screen.getByText(/корзина пуста/i)).toBeInTheDocument()
    })

    test("правильно отображает общую сумму товаров", () => {
        render(
            <MemoryRouter>
                <Elements stripe={stripePromise}>
                    <CartContext.Provider value={mockContext}>
                        <Cart />
                    </CartContext.Provider>
                </Elements>
            </MemoryRouter>
        )

        const total = 100 * 2 + 150 * 1 // 350

        const matching = screen.getAllByText((_, node) =>
            node?.textContent.includes("К оплате") &&
            node?.textContent.includes(`${total}`)
        )

        expect(matching.length).toBeGreaterThan(0)
    })


    test("оформление заказа при заполнении полей", async () => {
        render(
            <MemoryRouter>
                <Elements stripe={stripePromise}>
                    <CartContext.Provider value={mockContext}>
                        <Cart />
                    </CartContext.Provider>
                </Elements>
            </MemoryRouter>
        )

        const nameInput = screen.getByPlaceholderText(/Имя/i)
        fireEvent.change(nameInput, {target: {value: "Test name"}})

        const phoneInput = screen.getByLabelText(/Ваш телефон/i)
        fireEvent.change(phoneInput, {target: {value: "+420777777777"}})

        const deliveryRadio = screen.getByLabelText(/Доставка/i)
        fireEvent.click(deliveryRadio)

        const adressInput = screen.getByPlaceholderText(/Адрес доставки/i)
        fireEvent.change(adressInput, {target: {value: "г Прага, ул На острове 2"}})


        const dateInput = screen.getByLabelText(/Дата получения/i)
        fireEvent.change(dateInput, {target: {value: "2022-01-01"}})

        const timeSelect = screen.getByLabelText(/Время/i)
        fireEvent.change(timeSelect, {target: {value: "16:00"}})

        const commentInput = screen.getByLabelText(/Комментарий к заказу/i)
        fireEvent.change(commentInput, {target: {value: "Не звони сука"}})

        const onlinePaymentRadio = screen.getByTestId("payment-method-label")
        fireEvent.click(onlinePaymentRadio)

        const submitButton = screen.getByRole("button", {name: /Оформить заказ/i})
        fireEvent.click(submitButton)

        expect(screen.queryByText(/Заполните все обязательные поля/i)).not.toBeInTheDocument()
    })
})