import React from 'react';
import BookingForm from 'components/bookingForm/index';
import BaseLayout from 'layout/baseLayout/index';
export default function BookingPage() {
    return (
        <BaseLayout>
            <div className='showcaseBox py-2 py-lg-4'>
                <div className='container'>
                    <div className='row justify-content-lg-center'>
                        <div className='col-xl-8 col-12 mt-lg-3 py-5'>
                            <BookingForm />
                        </div>
                    </div>
                </div>
                
                <div className='container'>
                    <div className='row  justify-content-lg-center'>
                        <div className='col-xl-6 col-12 py-3 text-center text-white'>
                            <h3>Book your stress-free airport transfer today and save up to 40%</h3>
                            <p>We compare airport transfer prices from hundreds of suppliers worldwide to offer you the lowest possible price without compromising the quality of service</p>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}