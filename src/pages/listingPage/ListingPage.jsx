import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdCheckCircle, MdBackpack, MdPeople, MdWork, MdInfo, MdOutlineStar, MdOutlineStarHalf } from 'react-icons/md';
import BookingForm from 'components/bookingForm';
import BaseLayout from 'layout/baseLayout';
import Utils from 'helper/utils';
import { AppContext } from 'context/AppContext';
import { tripList } from 'helper/constants';

export default function ListingPage() {
    const navigate = useNavigate();
    const { tripInfo, getTripList, searchData, setCabInfo } = useContext(AppContext);
    const isSearchEnabled = Utils.canSearch(searchData);
    const listing = Utils.getTripListing(tripList, tripInfo, searchData?.isReturn);

    const onBookClick = (payload) => {
        setCabInfo(payload);
        navigate('/checkout');
    };

    useEffect(() => {
        if (isSearchEnabled) {
            getTripList();
        }
    }, [searchData])

    return (
        <BaseLayout>
            <div className='py-2 py-lg-4'>
                <div className='container'>
                    <div className='row justify-content-lg-center'>
                        <div className='col-xl-10 col-12 mt-lg-3 py-5'>
                            <div className='row'>
                                <div className='col-12 col-xl-4'>
                                    <BookingForm isMain={false} isEdit />
                                    <div className='card shadow-sm rounded-1 mb-4'>
                                        <div className='card-header'><h5 className='mb-0 py-2'>Reviews</h5></div>
                                        <div className='card-body'><div className="elfsight-app-a78a4d97-ab23-437c-814d-cddec42da778" data-elfsight-app-lazy /></div>
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
                                    {listing.map(i => (
                                        <div className='card shadow-sm mb-4' key={i?.id}>
                                            <div id={`${i?.id}`} className='collapse p-2 border-bottom bg-light' style={{ fontSize: '.6rem' }}>
                                                - Private, door-to-door transfer service.<br />
                                                - Exact meeting point information and Emergency contact details will be provided in the confirmation email.<br />
                                                - Vehicle may be upgraded to one with higher capacity.<br />
                                                - Flight monitoring and up to 1 hour of waiting time included.
                                            </div>
                                            <div className='d-flex flex-lg-row'>
                                                <div className='flex-fill'>
                                                    <div className='border-bottom px-3 pt-3 pb-2'>
                                                        <h6 className='mb-1 d-inline-block'>{i?.title}</h6>
                                                        <span className="badge rounded-pill bg-light text-dark mx-3 mb-1">Standard Servie</span>
                                                        <span className="badge rounded-pill bg-light text-dark mb-1">Free Cancellation 24h</span>
                                                    </div>
                                                    <div className=' px-3 px-lg-0 row pb-lg-0 pb-3'>
                                                        <div className='col-12 col-lg-7'><img src={i?.imageUrl} className='w-100' /></div>
                                                        <div className='col-12 col-lg-5 d-lg-flex align-items-center'>
                                                            <ul className="list-group">
                                                                <li className="list-group-item"><MdPeople /><span className='ps-2'>Passengers</span> - {i?.passengers} </li>
                                                                <li className="list-group-item"><MdWork /><span className='ps-2'>Medium</span> - {i?.mediumLuggage}</li>
                                                                <li className="list-group-item"><MdBackpack /><span className='ps-2'>Small</span> - {i?.small}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bg-light border-start d-flex flex-column'>
                                                    <div
                                                        className='mx-4 py-2 text-center bg-white border border-top-0 shadow-sm rounded-bottom'
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${i?.id}`}
                                                        role='button'
                                                    >
                                                        <MdInfo /> <span style={{ fontSize: '.6rem' }}>Transfer Information</span>
                                                    </div>
                                                    <div className='flex-fill p-5 text-center'>
                                                        <div className="btn-group-vertical" role="group">
                                                            <button className="btn btn-outline-primary pe-none">
                                                                <strong className=' fs-4'>EUR {i?.price}</strong>
                                                                <small className='d-block text-muted'>
                                                                    {searchData?.isReturn ? 'Round' : 'One Way'}
                                                                </small>
                                                            </button>
                                                            <button onClick={() => onBookClick(i)} type="button" className="btn btn-primary">
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
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </BaseLayout >
    )
}