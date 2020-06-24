import React from 'react'
import styles from './footer.module.scss'
import {Icon} from "semantic-ui-react";

const Footer = () => {
    return (
        <div className={`container-fluid p-2 ${styles.footerContainer}`}>
            <div className='row'>
                <div className='col-12'>
                    <div className='container p-5'>
                        <div className='row'>
                            <div className='col-12 col-md-5 d-flex flex-column p-2'>
                                <h4>About Us</h4>
                                <p>
                                    Educational and developmental Toys, Games, Art and Craft. At Toymagine we understand the importance of inspiring young minds. Providing opportunities for children to explore, create, play and learn rests with parents, carers and teachers alike.
                                </p>
                            </div>
                            <div className='col-12 col-md-4 d-flex flex-column p-2'>
                                <h4>Contact Toymagine</h4>
                                <span><Icon name='phone square'/>+61 435 657 578 / +61 406 712 983</span>
                                <span className='mt-1'><Icon name='mail'/>pzalani@gmail.com</span>
                                <span className='mt-1'><Icon name='facebook official'/>https://www.facebook.com/toymag</span>
                            </div>
                            <div className='col-12 col-md-3 d-flex flex-column p-2'>
                                <h4>Find Us Here</h4>
                                <span><Icon name='location arrow'/><a href='https://www.google.com/maps/dir/?api=1&destination=-37.8252%2C144.9937&fbclid=IwAR3iq58w6X5GsRlt0BJAZREhj3kg2MzT4_gPqfAnmi6DldRAhDf3H_m-W1w'>
                                    Cremorne Melbourne, Victoria, Australia, 3121
                                </a></span>
                            </div>
                        </div>
                        <div className='row mt-2 p-2'>
                            <div className='col-12 d-flex justify-content-center'>
                                <h4>@2020 TOYMAGINE. All Rights Reserved.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Footer;