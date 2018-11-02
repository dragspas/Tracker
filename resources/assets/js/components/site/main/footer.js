import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div>
                    <footer id="page-footer">
                        <div className="inner">
                            <aside id="footer-main">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 col-sm-3">
                                            <article>
                                                <h3>About Us</h3>
                                                <p>Vel fermentum ipsum. Suspendisse quis molestie odio. Interdum et malesuada fames ac ante ipsum
                                                    primis in faucibus. Quisque aliquet a metus in aliquet. Praesent ut turpis posuere, commodo odio
                                                    id, ornare tortor
                                    </p>
                                                <hr />
                                                <a href="#" className="link-arrow">Read More</a>
                                            </article>
                                        </div>
                                        <div className="col-md-3 col-sm-3">
                                            <article>
                                                <h3>Recent Properties</h3>
                                                <div className="property small">
                                                    <a href="property-detail.html">
                                                        <div className="property-image">
                                                            <img alt="" src="assets/img/properties/property-06.jpg" />
                                                        </div>
                                                    </a>
                                                    <div className="info">
                                                        <a href="property-detail.html"><h4>2186 Rinehart Road</h4></a>
                                                        <figure>Doral, FL 33178 </figure>
                                                        <div className="tag price">$ 72,000</div>
                                                    </div>
                                                </div>
                                                <div className="property small">
                                                    <a href="property-detail.html">
                                                        <div className="property-image">
                                                            <img alt="" src="assets/img/properties/property-09.jpg" />
                                                        </div>
                                                    </a>
                                                    <div className="info">
                                                        <a href="property-detail.html"><h4>2479 Murphy Court</h4></a>
                                                        <figure>Minneapolis, MN 55402</figure>
                                                        <div className="tag price">$ 36,000</div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="col-md-3 col-sm-3">
                                            <article>
                                                <h3>Contact</h3>
                                                <address>
                                                    <strong>Your Company</strong><br />
                                                    4877 Spruce Drive<br />
                                                    West Newton, PA 15089
                                    </address>
                                                +1 (734) 123-4567<br />
                                                <a href="#">hello@example.com</a>
                                            </article>
                                        </div>
                                        <div className="col-md-3 col-sm-3">
                                            <article>
                                                <h3>Useful Links</h3>
                                                <ul className="list-unstyled list-links">
                                                    <li><a href="#">All Properties</a></li>
                                                    <li><a href="#">Privacy Policy</a></li>
                                                    <li><a href="#">Login and Register Account</a></li>
                                                    <li><a href="#">FAQ</a></li>
                                                    <li><a href="#">Terms and Conditions</a></li>
                                                </ul>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                            <aside id="footer-thumbnails" className="footer-thumbnails"></aside>
                            <aside id="footer-copyright">
                                <div className="container">
                                    <span>Copyright © 2013. All Rights Reserved.</span>
                                    <span className="pull-right"><a href="#page-top" className="roll">Go to top</a></span>
                                </div>
                            </aside>
                        </div>
                    </footer>

                </div>

                <div id="overlay"></div>    </div>
        )
    }
}