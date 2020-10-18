import React from 'react'
import StripeCheckout from "react-stripe-checkout"

function StripeBtn(props) {

    let key="pk_test_51HcaZiAHNpsolcYsEGvKC4MdDtz7zdRMH6cSUtcpkDGeikNVOnTEnPberyAHR6REAYEZVAx0s7GNvUBEndDzVAWw00iEHPmh9V"
    let stripePrice = props.price * 100
    return (
        <StripeCheckout
        image="https://svgshare.com/i/CUz.svg"
        label="GIVE MONEY"
        panelLabel={`${props.price}`}
        name="CRWN CLOTHING"
        billingAddress
        shippingAddress
        local="en"
        currency="USD"
        amount= {stripePrice}
        allowRememberMe={false}
        stripeKey={key}
        token={(token) => alert("Payment successful")}

        />
    )
}

export default StripeBtn
/* 4242 4242 4242 4242
exp 01/21
123 */