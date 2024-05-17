import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import { useFormik } from 'formik';
import axios from 'axios';
const Add = () => {
    const { data, setdata } = useContext(MainContext)
    const formik = useFormik({
        initialValues: {
          image: '',
          title: '',
          price: '',
        },
        onSubmit: values => {
          axios.post("http://localhost:8080/api/blogs",{
            title:values.title,
            image:values.image,
            price:values.price,
            count:1,
            totalPrice:values.price
          })
          .then((resp)=>{
            console.log(resp.data);
          })
        },
      });
    return (
        <>
            <Helmet>
                <title>Add</title>
            </Helmet>

            <form onSubmit={formik.handleSubmit}>
       <label htmlFor="image">First Name</label>
       <input
         id="image"
         placeholder='Image'
         name="image"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.image}
       />
       {formik.errors.image ? <div>{formik.errors.image}</div> : null}
 
       <label htmlFor="lastName">Title</label>
       <input
         id="title"
         placeholder='Title'
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       {formik.errors.title ? <div>{formik.errors.title}</div> : null}
 
       <label htmlFor="price">Price</label>
       <input
         id="price"
         placeholder='price'
         name="price"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       {formik.errors.price ? <div>{formik.errors.price}</div> : null}
 
       <button type="submit">Submit</button>
     </form>
        </>
    )
}

export default Add
