import React from 'react';
import BookingForm from 'components/bookingForm';
import BaseLayout from 'layout/baseLayout';
export default function ListingPage() {
    return (
        <BaseLayout>
            <div className='py-2 py-lg-4'>
                <div className='container'>
                    <div className='row justify-content-lg-center'>
                        <div className='col-xl-10 col-12 mt-lg-3 py-5'>
                            <div className='row'>
                                <div className='col-12 col-xl-4'>
                                    <BookingForm isMain={false} />
                                    <div className='card shadow-sm rounded-1 mb-4'>
                                        <div className='card-header'><h5 className='mb-0 py-2'>Reviews</h5></div>

                                        <div className='card-body'><div className="elfsight-app-a78a4d97-ab23-437c-814d-cddec42da778" data-elfsight-app-lazy></div></div>
                                    </div>
                                    <div className='card shadow-sm rounded-1 mb-4'>
                                        <div className='card-header'><h5 className='mb-0 py-2'>Prices Include
                                        </h5></div>

                                        <div className='card-body'>
                                            s
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-xl-8'>
                                    d
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </BaseLayout >
    )
}