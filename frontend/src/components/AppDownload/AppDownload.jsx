import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <hr />
            
            <div className="app-download-platforms">
                <section id="food">
                    <div>
                        <h2 className="title-text"> H</h2>
                    </div>
                    <div className="food-container">
                        {/*======Card Start ----============*/}
                        <article className="food-card">
                            <img src="https://content3.jdmagicbox.com/comp/mumbai/f9/022pxx22.xx22.181204064403.e7f9/catalogue/sagar-vada-pav-stall-juhu-mumbai-vada-pav-centres-c10zihuxy0.jpg" className="food-img" alt=""/>
                            <div className="img-text">
                                <h1>Hitesh wada Pav</h1>
                            </div>
                            <div className="img-footer">
                                <div className="footer-icon">
                                    
                                </div>
                                <div className="footer-btn">
                                    <button type="button" className="food-btn">Order Now</button>  
                                </div>
                            </div>
                        </article>
                        <article className="food-card">
                            <img src="https://img.restaurantguru.com/reb8-view-Sanjay-Samosa-And-Nashta-2021-09-569577.jpg" className="food-img" alt=""/>
                            <div className="img-text">
                                <h1>Sanjay Samosa </h1>
                            </div>
                            <div className="img-footer">
                                <div className="footer-icon">
                                     
                                </div>
                                <div className="footer-btn">
                                    <button type="button" className="food-btn">Order Now</button>  
                                </div>
                            </div>
                        </article>
                        <article className="food-card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WJ8qaKDVpfvXcKiXOOuuiM1kND5oYGoiKQ&s" className="food-img" alt=""/>
                            <div className="img-text">
                                <h1>Khushi Bhel wali</h1>
                            </div>
                            <div className="img-footer">
                                <div className="footer-icon">
                                </div>
                                <div className="footer-btn">
                                    <button type="button" className="food-btn">Order Now</button>  
                                </div>
                            </div>
                        </article>
                        <article className="food-card">
                            <img src="https://i.ytimg.com/vi/KmFDnbCLPtQ/maxresdefault.jpg" className="food-img" alt=""/>
                            <div className="img-text">
                                <h1>Siddharth Chinease</h1>
                            </div>
                            <div className="img-footer">
                                <div className="footer-icon">
                                    
                                </div>
                                <div className="footer-btn">
                                    <button type="button" className="food-btn">Order Now</button>  
                                </div>
                            </div>
                        </article>
                        <article className="food-card">
                            <img src="https://5.imimg.com/data5/SELLER/Default/2023/12/371981268/AF/MK/RW/202329329/stainless-steel-food-stall-250x250.png" className="food-img" alt=""/>
                            <div className="img-text">
                                <h1>Kunal kachori</h1>
                            </div>
                            <div className="img-footer">
                                <div className="footer-icon">
                                </div>
                                <div className="footer-btn">
                                    <button type="button" className="food-btn">Order Now</button>  
                                </div>
                            </div>
                        </article>
                        <article className="food-card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShc9vsN9sn_HS_C44eLY8u2lCAvHGIHAiZUA&s" className="food-img" alt=""/>
                            <div className="img-text">
                                <h1>Rajat dalal wada</h1>
                            </div>
                            <div className="img-footer">
                                <div className="footer-icon">
                                    
                                </div>
                                <div className="footer-btn">
                                    <button type="button" className="food-btn">Order Now</button>  
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AppDownload;