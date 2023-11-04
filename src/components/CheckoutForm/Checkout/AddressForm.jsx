import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import {useForm, FormProvider} from "react-hook-form";
import FormInput from '../CustomTextField';
import {Link} from "react-router-dom";
import "./AdressForm.css"

const AddressForm = ({next}) => {
    const methods = useForm();


  return (
    <>
        <Typography variant='h6' gutterBottom>Informace o Vás</Typography>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => next({...data}))}>
                <Grid container spacing={3}>
                    <FormInput required name="firstName" label="Jméno"/>
                    <FormInput required name="lastName" label="Příjmení"/>
                    <FormInput required name="email" label="Email"/>
                </Grid>
                <div className="form-btns">
                    <Link to="/cart"><button className='form-btn'>Zpět do košíku</button></Link>
                    <button className='form-btn' type="submit">Pokračovat</button>
                </div>
            </form>
        </FormProvider>
    </>
  )
}

export default AddressForm