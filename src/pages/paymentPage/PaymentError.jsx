import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import BaseLayout from 'layout/baseLayout';

export default function PaymentError() {
    const [params] = useSearchParams();
    const oneway = params.get('bookingId');
    const roundtrip = params.get('returnBookingId');
    return (
        <BaseLayout>
            <div className='py-2 py-lg-4'>
                <div className='container'>
                    <div className='row justify-content-lg-center'>
                        <div className='col-xl-10 col-12 mt-lg-3 py-5'>
                            <div className='card shadow px-4 py-5 text-center rounded-3'>
                                <h1 className='text-danger fw-bolder mb-4'>Error! Payment Failed. Please try again later.

                                </h1>
                                <p>Apologies, your trip could not be booked at this time.

                                </p>
                                <p>There could be various reasons for this experience, please make sure to check with your bank that no money was deducted.

                                </p>
                                <p>Please try again later or call us at (+44) 1582 429 429 or email us at bookings@nextcabs.co.uk.

                                </p>
                                <div className='d-inline-block'>
                                    <NavLink to='/' className="btn btn-link">
                                        Return Home
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}