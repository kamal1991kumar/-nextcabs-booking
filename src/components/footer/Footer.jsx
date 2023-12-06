import React from "react";
import { MdLocationPin, MdEmail, MdCall } from 'react-icons/md'
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaTripadvisor, FaGoogle } from 'react-icons/fa'
export default function Footer() {
    return (
        <div className="footer text-white border-top border-5 border-primary">
            <div className="bg-dark pb-gl-3 pt-lg-5 pt-4 text-lg-start text-center">
                <div className="container">
                    <div className="row justify-content-lg-center">
                        <div className="col-12 col-lg-10">
                            <div className="row">
                                <div className="col-12 col-lg-4 mb-lg-2">
                                    <h5 className="text-muted mb-lg-3">Quick Links</h5>
                                    <ul className="list-unstyled lh-lg mb-4">
                                        <li className="d-block"><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
                                        <li className="d-block"><a href="#" className="text-white text-decoration-none">My Booking</a></li>
                                        <li className="d-block"><a href="#" className="text-white text-decoration-none">About Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-4  mb-lg-2">
                                    <h5 className="text-muted mb-lg-3">Legal</h5>
                                    <ul className="list-unstyled lh-lg  mb-4">
                                        <li className="d-block"><a href="#" className="text-white text-decoration-none">Terms & Conditions</a></li>
                                        <li className="d-block"><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                                        <li className="d-block"><a href="#" className="text-white text-decoration-none">Cookie Policy</a></li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <h5 className="text-muted mb-lg-3">Contact Us</h5>
                                    <div className="d-flex">
                                        <div className="align-self-center pe-3"><MdLocationPin size={25} /></div>
                                        <div className="flex-grow-1"><p><span className="text-muted">© 2023</span> NEXT CABS <br />Hart House Business Centre, Kimpton Road, Luton LU2 0LA United Kingdom</p></div>
                                    </div>
                                    <div className="d-flex">
                                        <div className=" pe-3"><MdCall size={25} /></div>
                                        <div className="flex-grow-1"><p>01582 429 429</p></div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="align-self-center pe-3"><MdEmail size={25} /></div>
                                        <div className="flex-grow-1"><p>admin@nextcabs.co.uk<br />booking@nextcabs.co.uk</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center py-2">
                            <a href="#" className="text-white"><FaFacebookSquare /></a>
                            <a href="#" className="text-white mx-3"><FaTwitterSquare /></a>
                            <a href="#" className="text-white"><FaInstagramSquare /></a>
                            <a href="#" className="text-white mx-3"><FaTripadvisor /></a>
                            <a href="#" className="text-white"><FaGoogle /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}