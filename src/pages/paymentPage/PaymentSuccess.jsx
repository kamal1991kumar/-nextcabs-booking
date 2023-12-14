import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import BaseLayout from 'layout/baseLayout';

export default function PaymentSuccess() {
    const [params] = useSearchParams();
    const oneway = params.get('bookingId');
    const roundtrip = params.get('returnBookingId');
    return (
        <BaseLayout>
            <div className='py-2 py-lg-4'>
                <div className='container'>
                    <div className='row justify-content-lg-center'>
                        <div className='col-xl-6 col-12 mt-lg-3 py-5'>
                            <div className='card shadow px-4 py-5 text-center rounded-3'>
                                <h1 className='text-success fw-bolder'>Congratulations!</h1>
                                <div className='my-4'>
                                    <ul className="list-group d-inline-flex">
                                        <li className={`list-group-item ${!oneway && 'd-none'}`}>
                                            <span className='pe-2'>Out-going Booking Reference Number</span>-<strong className='ps-2 fs-5'>{oneway}</strong>
                                        </li>
                                        <li className={`list-group-item ${!roundtrip && 'd1-none'}`}>
                                            <span className='pe-2'>Return Booking Reference Number</span>-<strong className='ps-2 fs-5'>{roundtrip}</strong>
                                        </li>
                                    </ul>
                                </div>
                                <p>Your booking was successful and the booking reference number is shown on the screen for your reference.</p>
                                <p>Shortly, you will receive an email confirming your trip details. If you need help, please call us at (+44) 1582 429 429 or email us at bookings@nextcabs.co.uk. Thank you for choosing NextCabs.</p>
                                <div className='d-inline-block'>
                                    <NavLink to='/' className="btn btn-link">
                                        Return Home
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>w
        </BaseLayout>
    );
}