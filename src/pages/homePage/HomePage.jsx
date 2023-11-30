import React from 'react';
import BookingForm from 'components/bookingForm/index';
import BaseLayout from 'layout/baseLayout/index';
export default function BookingPage() {
    return (
        <BaseLayout>
            <div className='showcaseBox py-2 py-lg-5'>
                <div className='container'>
                    <div className='row justify-content-md-center'>
                        <div className='col-xl-8 col-sm-10 col-xs-12'>
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}