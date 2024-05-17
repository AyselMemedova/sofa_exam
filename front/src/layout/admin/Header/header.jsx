
import React from 'react'
import "./header.css"
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div className='head_all'>

            <div className="logo">
                <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png.webp" alt="" />
            </div>
            <div className="col-4 list">
                <ul>
                    <li > <Link to="">Dashboard</Link></li>
                    <li> <Link to="add">AddProduct</Link>  <i class="fa-solid fa-caret-down"></i></li>
                    <li>Products <i class="fa-solid fa-caret-down"></i></li>
                </ul>
            </div>

        </div>
    )
}

export default Header
