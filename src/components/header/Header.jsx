import React from 'react';
import Logo from 'assets/logo.png';
import countries from 'helper/countryCode';

export default function Header() {
    return (
        <div className='header bg-white'>
            <div className='container'>
                <div className='row  justify-content-lg-center'>
                    <div className='col-12 col-lg-10'>
                        <nav className="navbar navbar-expand-lg navbar-light py-3">
                            <div className="container">
                                <a className="navbar-brand" href="#"><img src={Logo} width={90} alt='logo' /></a>
                                <button className="navbar-toggler" type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-lg-end text-center" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#">About</a>
                                        </li>
                                        <li className='nav-item dropdown'>
                                            <div role='button' className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                                My Booking
                                            </div>
                                            <div className="dropdown-menu dropdown-menu-end p-2">
                                                <div className="input-group flex-nowrap mb-2">
                                                    <select className="input-group-text">
                                                        {countries.map(i => <option key={i?.code} value={`+${i?.phone}`}>+{i?.phone}</option>)}
                                                    </select>
                                                    <input type="text" className="form-control" placeholder="Mobile Number" />
                                                </div>
                                                <div className="btn btn-secondary float-end">Send OTP</div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}