import React from 'react'
import "./section1.css"

const Section1 = () => {
    return (
        <div>
            <div className="section1">
                <div className="container">
                    <div className="row txt">
                        <div className='col-6 text'>
                            <h2>Cloth & <br /> Wood
                                Sofa</h2>
                            <p>Incididunt ut labore et dolore magna aliqua quis ipsum
                                suspendisse ultrices gravida. Risus commodo viverra</p>
                            <button>Buy Now</button>
                        </div>
                        <div className="col-6 image">
                            <img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png.webp" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
