import React from 'react';

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light header py-3">
            <div class="container">
                <a class="navbar-brand" href="#"><img src='images/logo.png' width={90} alt='logo' /></a>
                <button class="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-lg-end text-center" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">About</a>
                        </li>
                        <li className='nav-item dropdown'>
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href='javascript:void(0)'>
                                My Booking
                            </a>
                            <form class="dropdown-menu dropdown-menu-end p-2">
                                <div class="input-group flex-nowrap mb-2">
                                    <select class="input-group-text">
                                        <option>+44</option>
                                    </select>
                                    <input type="text" class="form-control" placeholder="Mobile Number" />
                                </div>
                                <button class="btn btn-secondary float-end" type="button">Send OTP</button>
                            </form>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}