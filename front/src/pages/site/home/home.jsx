
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import Section1 from '../../../components/site/section1/section1'
import Awesome from '../../../components/site/Section3Awesome/Awesome'
import Best from '../../../components/site/section4_best/Best'
import Subscribe from '../../../components/site/section5_subscribe/Subscribe'
import Logos from '../../../components/site/section6_logos/Logos'

const Home = () => {
    const { data, setdata } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Section1 />
            <Awesome/>
            <Best/>
            <Subscribe/>
            <Logos/>
        </>
    )
}

export default Home
