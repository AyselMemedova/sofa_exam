import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'

import "./Detail.css"
import { useParams } from 'react-router'
import MainContext from '../../../context/context'
const Detail = () => {
    const { id } = useParams()
    const { data } = useContext(MainContext)
    const index = data.find((item) => item._id == id)
    console.log(index);
    return (


        <div>

            <Helmet>
                <title>Detail Page</title>
            </Helmet>
            <div className="container">
                <div className="row detail_page">
                    <div className="col-6">
                        <img src={index.image} alt="..." />
                    </div>
                    <div className="col-6">
                        <h3>Title: {index.title}</h3>
                        <p>Price: {index.price}$</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
