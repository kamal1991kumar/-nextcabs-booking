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
            <div className='container pt-3 py-lg-5 mt-lg-5 mb-lg-3'>
                <div className='row justify-content-lg-center'>
                    <div className='col-lg-10'>
                        <div className='row'>
                            <div className='col-12 col-lg-6'>
                                <div className="card shadow-sm  mb-4" >
                                    <div className="card-body">
                                        <div className='text-center px-5 py-3'>
                                            <h4 className='pb-2'>Book with confidence</h4>
                                            <p className="fw-light">We care about the reliability of your airport transfer. But don't just take our word for it, read reviews from our customers, published on independent review website</p>
                                        </div>

                                        <div className="elfsight-app-a78a4d97-ab23-437c-814d-cddec42da778" data-elfsight-app-lazy></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <div className="card shadow-sm  mb-4" >
                                    <img src="https://airportstaxitransfers.com/assets/images/misc/free-cancellation.jpg" className="card-img-top" />
                                    <div className="card-body">
                                        <div className='text-center px-5 py-3'>
                                            <h4 className='pb-2'>Free Cancellation</h4>
                                            <p className="card-text">If your plans change, you can cancel your reservation free of charge up to 24 hours before the scheduled pick up time</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-sm  mb-4" >
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
                                <div className="card shadow-sm  mb-4" >
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
                        <div className='row'>
                            <div className='col-12 col-lg-6'>
                                <div className="card shadow-sm  mb-4" >
                                    <img src="https://airportstaxitransfers.com/assets/images/locations/1517057075_barcelona-airport-transfers.jpg" className="card-img-top" />
                                    <div className="card-body text-center py-4">

                                        <p className="card-text  px-5">
                                            <a href='#' className='text-body  text-decoration-none'>Barcelona Airport to Barcelona City Centre<br /> up to 3 passengers <strong className='text-decoration-underline'>EUR 79.95</strong>
                                            </a>
                                        </p>

                                        <a className="btn btn-outline-primary btn-lg">
                                            Barcelona Airport Taxi Transfers</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <div className="card shadow-sm  mb-4" >
                                    <img src="https://airportstaxitransfers.com/assets/images/locations/1517057075_barcelona-airport-transfers.jpg" className="card-img-top" />
                                    <div className="card-body text-center py-4">

                                        <p className="card-text  px-5">
                                            <a href='#' className='text-body  text-decoration-none'>Barcelona Airport to Barcelona City Centre<br /> up to 3 passengers <strong className='text-decoration-underline'>EUR 79.95</strong>
                                            </a>
                                        </p>

                                        <a className="btn btn-outline-primary btn-lg">
                                            Barcelona Airport Taxi Transfers</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout >
    )
}