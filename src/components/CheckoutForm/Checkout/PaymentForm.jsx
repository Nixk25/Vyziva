import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import {Elements, ElementsConsumer, CardElement} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import Review from './Review';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({checkoutToken, backStep, data, handleCaptureCheckout, nextStep, timeout}) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if(!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({type :"card", card : cardElement});

    if (error){
      console.log(error);
    }else {
      const orderData = {
        line_items: checkoutToken?.line_items,
        customer: {firstname : data.firstName, lastname: data.lastName, email: data.email},
        payment:{gateway:"stripe", stripe:{payment_method_id: paymentMethod.id}}
      }
      handleCaptureCheckout(checkoutToken.id, orderData);  
      timeout();
      nextStep();
    }
  }


  return (
    <div>
      <Review checkoutToken={checkoutToken}/>
      <Divider/>
      <Typography variant='h6' gutterBottom style={{margin: "20px 0"}}>Platební metody</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({elements, stripe}) => (
            <form onSubmit={(e) => handleSubmit(e,elements, stripe)} >
              <CardElement/>
              <br />
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <button className='form-btn' onClick={backStep}>Zpátky</button>
                <button className="form-btn" type='submit' disabled={!stripe}>Zaplatit {checkoutToken?.subtotal?.formatted_with_code}</button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  )
}

export default PaymentForm