import React from 'react'
import {container} from 'react-bootstrap';


const formik = () => {

    const handleSubmit = (e) =>{}
  return (
    <container>
        <h1>formik yup</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">isminiz</label>
            <br />
            <input type="text"
            name='firstName'
            id='firstName'
            placeholder='lütfen isminizi giriniz' />
            <br />
            <button type='submit'> formu gönder</button>
        </form>
    </container>
  )
}
export default formik;
