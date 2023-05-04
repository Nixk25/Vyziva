import React, { useEffect, useState } from 'react'
import {Paper, Stepper, Step, StepLabel, Typography,Divider,CircularProgress} from "@material-ui/core"
import useStyles from "./styles"
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import {commerce} from "../../lib/commerce";
import { Link } from 'react-router-dom';


const steps = ["Informace o Vás", "Platba"];

const Checkout = ({cart, order, handleCaptureCheckout}) => {
    const [activeStep, setActiveStep]= useState(0)
    const [data, setData] = useState({});
    const [checkoutToken, setCheckoutToken] = useState(null);
    const classes = useStyles(); 

    useEffect( () => {
        const generateToken = async () => {
                const token = await commerce?.checkout?.generateToken(cart.id, {type:"cart"})
                setCheckoutToken(token);
        }
        generateToken();
    },[]);

    let Confirmation = () => order.customer ?(
        <div>
            <Typography variant='h5'>Děkuji za vaši objednávku, {order.customer.firstname} {order.customer.lastname}</Typography>
            <Divider className={classes.divider}/>
            <Typography variant='subtitle2'>Objednávka: {order.custromer_reference}</Typography>
            <br />
            <Link to="/"><button className='back-to__main'>Zpět do obchodu</button></Link>
        </div>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress/>
        </div>
    );

    const Form = () => activeStep ===0 ? <AddressForm next={next}/>: <PaymentForm data={data} checkoutToken={checkoutToken} backStep={backStep} handleCaptureCheckout={handleCaptureCheckout} nextStep={nextStep}/>

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setData(data);
        nextStep(); 
    }

  return (
    <>
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant='h4' align='center'>Platba</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) =>(
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation/> : <Form/>}
            </Paper>
        </main>
    </>
  )
}

export default Checkout