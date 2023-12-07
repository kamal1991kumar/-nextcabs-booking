import React from 'react';
import { MdCheckCircle, MdBackpack, MdPeople, MdWork, MdInfo, MdOutlineStar, MdOutlineStarHalf } from 'react-icons/md';
import BookingForm from 'components/bookingForm';
import BaseLayout from 'layout/baseLayout';
import E8seater from '../../assets/8seater.png'
export default function ListingPage() {
    return (
        <BaseLayout>
            <div className='py-2 py-lg-4'>
                <div className='container'>
                    <div className='row justify-content-lg-center'>
                        <div className='col-xl-10 col-12 mt-lg-3 py-5'>
                            <div className='row'>
                                <div className='col-12 col-xl-4'>
                                    <BookingForm isMain={false} isEdit />
                                    <BookingForm isMain={false} />
                                    <div className='card shadow-sm rounded-1 mb-4'>
                                        <div className='card-header'><h5 className='mb-0 py-2'>Reviews</h5></div>
                                        <div className='card-body'><div className="elfsight-app-a78a4d97-ab23-437c-814d-cddec42da778" data-elfsight-app-lazy></div></div>
                                    </div>
                                    <div className='card shadow-sm rounded-1 mb-4'>
                                        <div className='card-header'><h5 className='mb-0 py-2'>Prices Include
                                        </h5></div>
                                        <div className='card-body'>
                                            <div className='d-flex align-items-center mb-2'>
                                                <MdCheckCircle /><span className='ps-2'>Taxes and Tolls</span>
                                            </div>
                                            <div className='d-flex align-items-center mb-2'>
                                                <MdCheckCircle /><span className='ps-2'> Flight Monitoring
                                                </span>
                                            </div>
                                            <div className='d-flex align-items-center mb-2'>
                                                <MdCheckCircle /><span className='ps-2'>Waiting Time and Parking</span>
                                            </div>
                                            <div className='d-flex align-items-center mb-2'>
                                                <MdCheckCircle /><span className='ps-2'> Free Amendments</span>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <MdCheckCircle /><span className='ps-2'>Free Cancellations</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-xl-8'>
                                    <div className='card shadow-sm flex-lg-row'>
                                        <div className='flex-fill'>
                                            <div className='border-bottom px-3 pt-3 pb-2'>
                                                <h6 className='mb-1 d-inline-block'>Sedan Car 3pax</h6>
                                                <span className="badge rounded-pill bg-light text-dark mx-3 mb-1">Standard Servie</span>
                                                <span className="badge rounded-pill bg-light text-dark mb-1">Free Cancellation 24h</span>
                                            </div>
                                            <div className=' px-3 px-lg-0 row pb-lg-0 pb-3'>
                                                <div className='col-12 col-lg-7'><img src={E8seater} className='w-100' /></div>
                                                <div className='col-12 col-lg-5 d-lg-flex align-items-center'>
                                                    <ul className="list-group">
                                                        <li className="list-group-item"><MdPeople /><span className='ps-3'>Passengers</span></li>
                                                        <li className="list-group-item"><MdWork /><span className='ps-3'>Medium</span></li>
                                                        <li className="list-group-item"><MdBackpack /><span className='ps-3'>Small</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='bg-light border-start d-flex flex-column'>
                                            <div className='mx-4 py-2 text-center bg-white border border-top-0 shadow-sm rounded-bottom'>
                                                <MdInfo /> <span style={{ fontSize: '.6rem' }}>Transfer Information</span>
                                            </div>
                                            <div className='flex-fill p-5 text-center'>
                                                <div className="btn-group-vertical" role="group">
                                                    <button className="btn btn-outline-primary pe-none">
                                                        <strong className=' fs-4'>EUR 36.74</strong>
                                                        <small className='d-block text-muted'>One Way</small>
                                                    </button>
                                                    <button type="button" className="btn btn-primary">
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='px-3 py-2 text-center bg-white border-top lh-sm'>
                                                <small className='d-block'>Supplier Rating</small>
                                                <div className='text-warning'>
                                                    <MdOutlineStar />
                                                    <MdOutlineStar />
                                                    <MdOutlineStar />
                                                    <MdOutlineStar />
                                                    <MdOutlineStarHalf />
                                                </div>
                                            </div>

                                        </div>
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