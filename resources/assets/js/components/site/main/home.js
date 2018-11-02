import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav.js';
import SearchBox from './../searchBox/searchBox.js';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="geo-location-wrapper">
                        <span className="btn geo-location"><i className="fa fa-map-marker"></i><span className="text">Find My Position</span></span>
                    </div>
                </div>
                <div id="map"></div>
                <SearchBox/>
                <div id="page-content">
                    <section id="banner">
                        <div className="block has-dark-background background-color-default-darker center text-banner">
                            <div className="container">
                                <h1 className="no-bottom-margin no-border">Zoner Is Fully Loaded Real Estate Template with <a href="#" className="text-underline">Tons of Features</a>!</h1>
                            </div>
                        </div>
                    </section>
                    <section id="our-services" className="block">
                        <div className="container">
                            <header className="section-title"><h2>Our Services</h2></header>
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <div className="feature-box equal-height">
                                        <figure className="icon"><i className="fa fa-folder"></i></figure>
                                        <aside className="description">
                                            <header><h3>Wide Range of Properties</h3></header>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            <a href="properties-listing.html" className="link-arrow">Read More</a>
                                        </aside>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="feature-box equal-height">
                                        <figure className="icon"><i className="fa fa-users"></i></figure>
                                        <aside className="description">
                                            <header><h3>14 Agents for Your Service</h3></header>
                                            <p>Aliquam gravida magna et fringilla convallis. Pellentesque habitant morbi </p>
                                            <a href="agents-listing.html" className="link-arrow">Read More</a>
                                        </aside>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="feature-box equal-height">
                                        <figure className="icon"><i className="fa fa-money"></i></figure>
                                        <aside className="description">
                                            <header><h3>Best Price Guarantee!</h3></header>
                                            <p>Phasellus non viverra tortor, id auctor leo. Suspendisse id nibh placerat</p>
                                            <a href="#" className="link-arrow">Read More</a>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="price-drop" className="block">
                        <div className="container">
                            <header className="section-title">
                                <h2>Price Drop</h2>
                                <a href="properties-listing.html" className="link-arrow">All Properties</a>
                            </header>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-06.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 11,000</div>
                                                    <h3>3398 Lodgeville Road</h3>
                                                    <figure>Golden Valley, MN 55427</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>2</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>2</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>0</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-04.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 38,000</div>
                                                    <h3>2186 Rinehart Road</h3>
                                                    <figure>Doral, FL 33178 </figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-07.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 325,000</div>
                                                    <h3>3705 Brighton Circle Road</h3>
                                                    <figure>Glenwood, MN 56334</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-08.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 16,000</div>
                                                    <h3>362 Lynn Ogden Lane</h3>
                                                    <figure>Galveston, TX 77550</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <aside id="advertising" className="block">
                        <div className="container">
                            <a href="submit.html">
                                <div className="banner">
                                    <div className="wrapper">
                                        <span className="title">Do you want your property to be listed here?</span>
                                        <span className="submit">Submit it now! <i className="fa fa-plus-square"></i></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </aside>
                    <section id="new-properties" className="block">
                        <div className="container">
                            <header className="section-title">
                                <h2>New Properties for You</h2>
                                <a href="properties-listing.html" className="link-arrow">All Properties</a>
                            </header>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-09.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 11,000</div>
                                                    <h3>3398 Lodgeville Road</h3>
                                                    <figure>Golden Valley, MN 55427</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>2</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>2</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>0</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-03.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 38,000</div>
                                                    <h3>2186 Rinehart Road</h3>
                                                    <figure>Doral, FL 33178 </figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-06.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 325,000</div>
                                                    <h3>3705 Brighton Circle Road</h3>
                                                    <figure>Glenwood, MN 56334</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-01.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 16,000</div>
                                                    <h3>362 Lynn Ogden Lane</h3>
                                                    <figure>Galveston, TX 77550</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-02.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 18,000</div>
                                                    <h3>2506 B Street</h3>
                                                    <figure>New Brighton, MN 55112</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>280m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>2</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-12.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 136,000</div>
                                                    <h3>3990 Late Avenue</h3>
                                                    <figure>Kingfisher, OK 73750</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>30m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>0</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-05.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 12,680</div>
                                                    <h3>297 Marie Street</h3>
                                                    <figure>Towson, MD 21204 </figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="property">
                                        <a href="property-detail.html">
                                            <div className="property-image">
                                                <img alt="" src="assets/img/properties/property-10.jpg" />
                                            </div>
                                            <div className="overlay">
                                                <div className="info">
                                                    <div className="tag price">$ 12,800</div>
                                                    <h3>64 Timberbrook Lane</h3>
                                                    <figure>Denver, CO 80202</figure>
                                                </div>
                                                <ul className="additional-info">
                                                    <li>
                                                        <header>Area:</header>
                                                        <figure>240m<sup>2</sup></figure>
                                                    </li>
                                                    <li>
                                                        <header>Beds:</header>
                                                        <figure>3</figure>
                                                    </li>
                                                    <li>
                                                        <header>Baths:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                    <li>
                                                        <header>Garages:</header>
                                                        <figure>1</figure>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="testimonials" className="block">
                        <div className="container">
                            <header className="section-title"><h2>Testimonials</h2></header>
                            <div className="owl-carousel testimonials-carousel">
                                <blockquote className="testimonial">
                                    <figure>
                                        <div className="image">
                                            <img alt="" src="assets/img/client-01.jpg" />
                                        </div>
                                    </figure>
                                    <aside className="cite">
                                        <p>Fusce risus metus, placerat in consectetur eu, porttitor a est sed sed dolor lorem cras adipiscing</p>
                                        <footer>Natalie Jenkins</footer>
                                    </aside>
                                </blockquote>
                                <blockquote className="testimonial">
                                    <figure>
                                        <div className="image">
                                            <img alt="" src="assets/img/client-01.jpg" />
                                        </div>
                                    </figure>
                                    <aside className="cite">
                                        <p>Fusce risus metus, placerat in consectetur eu, porttitor a est sed sed dolor lorem cras adipiscing</p>
                                        <footer>Natalie Jenkins</footer>
                                    </aside>
                                </blockquote>
                            </div>
                        </div>
                    </section>
                    <section id="partners" className="block">
                        <div className="container">
                            <header className="section-title"><h2>Our Partners</h2></header>
                            <div className="logos">
                                <div className="logo"><a href=""><img src="assets/img/logo-partner-01.png" alt="" /></a></div>
                                <div className="logo"><a href=""><img src="assets/img/logo-partner-02.png" alt="" /></a></div>
                                <div className="logo"><a href=""><img src="assets/img/logo-partner-03.png" alt="" /></a></div>
                                <div className="logo"><a href=""><img src="assets/img/logo-partner-04.png" alt="" /></a></div>
                                <div className="logo"><a href=""><img src="assets/img/logo-partner-05.png" alt="" /></a></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
