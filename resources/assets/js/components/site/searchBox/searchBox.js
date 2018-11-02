import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class SearchBox extends Component {
    render() {
        return (
            <div className="search-box-wrapper">
                <div className="search-box-inner">
                    <div className="container">
                        <div className="search-box map">
                            <ul className="nav nav-pills">
                                <li className="active"><a href="#search-form-sale" data-toggle="tab">Prodaja</a></li>
                                <li><a href="#search-form-rent" data-toggle="tab">Izdavanje</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade in active" id="search-form-sale">
                                    <form role="form" id="form-map-sale" className="form-map form-search clearfix">
                                        <div className="row">                                
                                            <div className="col-md-2 col-sm-4">
                                                <div className="form-group">
                                                    <select name="form-sale-city">
                                                        <option value="">Grad</option>
                                                        <option value="1">New York</option>
                                                        <option value="2">Los Angeles</option>
                                                        <option value="3">Chicago</option>
                                                        <option value="4">Houston</option>
                                                        <option value="5">Philadelphia</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-4">
                                                <div className="form-group">
                                                    <select name="form-sale-district">
                                                        <option value="">Deo grada</option>
                                                        <option value="1">Manhattan</option>
                                                        <option value="2">The Bronx</option>
                                                        <option value="3">Brooklyn</option>
                                                        <option value="4">Queens</option>
                                                        <option value="5">Staten Island</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-4">
                                                <div className="form-group">
                                                    <select name="form-sale-property-type">
                                                        <option value="">Vrsta nekretnine</option>
                                                        <option value="1">Apartment</option>
                                                        <option value="2">Condominium</option>
                                                        <option value="3">Cottage</option>
                                                        <option value="4">Flat</option>
                                                        <option value="5">House</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-4">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Cena od"/>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-4">
                                               <div className="form-group">
                                                  <input type="text" placeholder="Cena do"/>
                                               </div>
                                            </div>
                                            <div className="col-md-2 col-sm-4">
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-default">Pretraga</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="search-form-rent">
                                    <form role="form" id="form-map-rent" className="form-map form-search clearfix">
                                        <div className="row">
                                            <div className="col-md-2 col-sm-4">
                                                <div className="form-group">
                                                    <select name="form-rent-city">
                                                        <option value="">Grad</option>
                                                        <option value="1">New York</option>
                                                        <option value="2">Los Angeles</option>
                                                        <option value="3">Chicago</option>
                                                        <option value="4">Houston</option>
                                                        <option value="5">Philadelphia</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-4">
                                                <div className="form-group">
                                                    <select name="form-rent-district">
                                                        <option value="">Deo grada</option>
                                                        <option value="1">Manhattan</option>
                                                        <option value="2">The Bronx</option>
                                                        <option value="3">Brooklyn</option>
                                                        <option value="4">Queens</option>
                                                        <option value="5">Staten Island</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-4">
                                                <div className="form-group">
                                                    <select name="form-rent-property-type">
                                                        <option value="">Vrsta nekretnine</option>
                                                        <option value="1">Apartment</option>
                                                        <option value="2">Condominium</option>
                                                        <option value="3">Cottage</option>
                                                        <option value="4">Flat</option>
                                                        <option value="5">House</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-4">
                                            <div className="form-group">
                                                <input type="text" placeholder="Cena od"/>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-4">
                                           <div className="form-group">
                                              <input type="text" placeholder="Cena do"/>
                                           </div>
                                        </div>
                                            <div className="col-md-2 col-sm-4">
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-default">Pretraga</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}