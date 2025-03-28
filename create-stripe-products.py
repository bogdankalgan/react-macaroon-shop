import stripe

stripe.api_key = "sk_test_51R6DaOH6MqYhcDi30EcxoBqebQ7LoP2SCpjOPXvebnTdk4JyfTlubD0Cn04AsWoFGBg8bB8arHUJSK1iIk6WGHbU00f9a8M2MI"  # ← ВСТАВЬ СВОЙ СЕКРЕТНЫЙ КЛЮЧ

# === КАТАЛОГ ===

product_0 = stripe.Product.create(name="1 макарон и 1 эклер")
price_0 = stripe.Price.create(
    product=product_0.id,
    unit_amount=9000,
    currency="rub",
    nickname="Обычная цена"
)
discount_price_0 = stripe.Price.create(
    product=product_0.id,
    unit_amount=16000,
    currency="rub",
    nickname="Скидка"
)

product_1 = stripe.Product.create(name="Всего понемногу")
price_1 = stripe.Price.create(
    product=product_1.id,
    unit_amount=75000,
    currency="rub",
    nickname="Обычная цена"
)

...