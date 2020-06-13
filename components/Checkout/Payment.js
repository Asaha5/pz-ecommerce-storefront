import React, {useEffect} from 'react'
import {SideSheet} from 'evergreen-ui'
import scriptLoader from 'react-async-script-loader'

const PAYPAL_BUTTON_CONTAINER = 'paypal-button-container'

const loadPaypalButtons = (value) => {
    const paypalButtonContainer = document.getElementById(PAYPAL_BUTTON_CONTAINER)
    if(paypalButtonContainer){
        paypal.Buttons({
            // Set up the transaction
            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            currency_code: 'AUD',
                            value: value.toString()
                        }
                    }]
                });
            },

            // Finalize the transaction
            onApprove: function (data, actions) {
                return actions.order.capture().then(function (details) {
                    // Show a success message to the buyer
                    alert('Transaction completed by ' + details.payer.name.given_name + '!');
                });
            }


        }).render(`#${PAYPAL_BUTTON_CONTAINER}`);
    }
}

const PaymentPanel = ({isScriptLoaded, isScriptLoadSucceed, value}) => {

    useEffect(() => {
        if(isScriptLoaded && isScriptLoadSucceed) {
            loadPaypalButtons(value)
        }
    }, [isScriptLoaded, isScriptLoadSucceed])

    return (
        <div id={'paypal-button-container'} style={{minWidth: '200px', width: '350px'}}>
        </div>
    )
}

export default ({paypalClientId, ...rest}) => {
    const PaypalContainer = scriptLoader(`https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=AUD`)(PaymentPanel)
    return (
        <PaypalContainer {...rest}/>
    )
}