import React, { useContext } from 'react'
import "./Awesome.css"

import MainContext from '../../../context/context'
import { Link } from 'react-router-dom'


const Awesome = () => {
    const {data}=useContext(MainContext)
    return (
        <div>
            <div>
                <div className='awesome_head'>
                    <div className='awesome_head_text'>
                    <h2>Awesome</h2>
                    <h3>Shop</h3>
                    </div>

                    <div className='awesome_head_search'>
                    <input type="text"  placeholder='Search Here'/>
                    <button>Click Me</button>
                    </div>
                   
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 awesome_card">

                            {
                                data.map((item,index)=>(
                                    
                                
                                    <div className="col-3" key={index}>
                                    <div className='awesome_cards'>
                                        <div className='awesome_cards_img'>
                                            <img src={item. image} alt="..." />
                                        </div>
                                        <div className='awesome_cards_text'>
                                            <h3>{item.title}</h3>
                                            <p>{item.price} $</p>
                                            <button>+Add To Card</button>
                                            <button>
                                                <Link to={`detail/${item._id}`}>
                                                <i class="fa-solid fa-circle-info"></i>

                                                </Link>
                                                </button>
                                        </div>
                                    </div>
                                </div>
                                 ) )
                            }

                           
                     
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Awesome
