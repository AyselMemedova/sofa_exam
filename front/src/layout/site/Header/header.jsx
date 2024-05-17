
import React from 'react'
import "./header.css"

const Header = () => {
return (
    <div>
        <div className='header'>
            <div className="container">
                <div className="row">
                    <div className="col-4 logo ">
                    <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png.webp" alt="" />
                    </div>

                    <div className="col-4 list">
                        <ul>
                            <li>Home</li>
                            <li>Shop <i class="fa-solid fa-caret-down"></i></li>
                            <li>Pages <i class="fa-solid fa-caret-down"></i></li>
                            <li>Blog <i class="fa-solid fa-caret-down"></i></li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="col-4 icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-cart-plus"></i>
                    </div>
                </div>
            </div>

        </div>
    </div>
)
}

export default Header
                            