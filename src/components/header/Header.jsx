import React from 'react';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light header py-3">
            <div className="container">
                <a className="navbar-brand" href="#"><img src='images/logo.png' width={90} alt='logo' /></a>
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
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href='javascript:void(0)'>
                                My Booking
                            </a>
                            <form className="dropdown-menu dropdown-menu-end p-2">
                                <div className="input-group flex-nowrap mb-2">
                                    <select className="input-group-text">
                                        <option>+44</option>
                                    </select>
                                    <input type="text" className="form-control" placeholder="Mobile Number" />
                                </div>
                                <button className="btn btn-secondary float-end" type="button">Send OTP</button>
                            </form>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}