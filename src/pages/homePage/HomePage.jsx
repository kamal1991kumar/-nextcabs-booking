import React from 'react';
import BookingForm from 'components/bookingForm';
import BaseLayout from 'layout/baseLayout';
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
            <div className='container py-3 py-lg-5 my-lg-5'>
                <div className='row justify-content-lg-center'>
                    <div className='col-lg-10'>
                        <div className='row'>
                            <div className='col-12 col-lg-6'>
                                <div className="card shadow-sm  mb-3" >
                                    <div className="card-body">
                                        <div className='text-center px-5 py-3'>
                                            <h4 className='pb-2'>Book with confidence</h4>
                                            <p className="fw-light">We care about the reliability of your airport transfer. But don't just take our word for it, read reviews from our customers, published on independent review website</p>
                                        </div>
                                        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
                                        <div className="elfsight-app-a78a4d97-ab23-437c-814d-cddec42da778" data-elfsight-app-lazy></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <div className="card shadow-sm  mb-3" >
                                    <img src="https://airportstaxitransfers.com/assets/images/misc/free-cancellation.jpg" className="card-img-top" />
                                    <div className="card-body">
                                        <div className='text-center px-5 py-3'>
                                            <h4 className='pb-2'>Free Cancellation</h4>
                                            <p className="card-text">If your plans change, you can cancel your reservation free of charge up to 24 hours before the scheduled pick up time</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-sm  mb-3" >
                                    <img src="https://airportstaxitransfers.com/assets/images/misc/free-cancellation.jpg" className="card-img-top" />
                                    <div className="card-body">
                                        <div className='text-center px-5 py-3'>
                                            <h4 className='pb-2'>Professional Service
                                            </h4>
                                            <p className="card-text">We use reputable airport transfer service providers employing professional and reliable drivers

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-sm  mb-3" >
                                    <img src="https://airportstaxitransfers.com/assets/images/misc/free-cancellation.jpg" className="card-img-top" />
                                    <div className="card-body">
                                        <div className='text-center px-5 py-3'>
                                            <h4 className='pb-2'>Low Cost Transfers
                                            </h4>
                                            <p className="card-text">Our team compares airport taxi prices daily to offer you the lowest rate for each vehicle category

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}