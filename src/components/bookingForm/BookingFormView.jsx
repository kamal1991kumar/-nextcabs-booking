import React from 'react';
import { MdLocalAirport, MdSearch } from 'react-icons/md';
export default function BookingFormView() {
    return (
        <div className='bookingContainer'>
            <div className='row'>
                <div className='col'><h5 className='bookingContainer__tab text-center p-3 mb-0 bg-white rounded-top'><MdLocalAirport /> <span className='d-none d-lg-inline'>Airport</span> Transfers</h5></div>
                <div className='col'>&nbsp;</div>
            </div>
            <div className='bookingContainer__box px-2 py-4 bg-white'>
                <div className='container py-2'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <fieldset className="border rounded-3 px-3 py-2 mb-4 border-danger text-danger">
                                <legend className="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Drop-off</h6></legend>
                                <input type='text' className='border-0 p-0 w-100' />
                            </fieldset>
                        </div>
                        <div className='col-12  col-lg-6'>
                            <fieldset className="border rounded-3 px-3 py-2 mb-4">
                                <legend className="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Drop-off</h6></legend>
                                <input type='text' className='border-0 p-0 w-100' />
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className='container py-2'>
                    <div className='row'>
                        <div className='col-12  col-lg-6'>
                            <div className='d-flex'>
                                <fieldset className=" w-100 border rounded-start px-3 py-2 mb-4">
                                    <legend className="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Date</h6></legend>
                                    <input type='date' className='border-0 p-0 w-100' />
                                </fieldset>
                                <fieldset className="w-100 border rounded-end  px-3 py-2 mb-4">
                                    <legend className="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Time</h6></legend>
                                    <input type='time' className='border-0 p-0 w-100' />
                                </fieldset>
                            </div>
                        </div>
                        <div className='col-12  col-lg-6 pt-2 mb-4'>
                            <button className='border btn btn-outline-secondary w-100 p-2'><span className='p-1 d-inline-block'>Add Return</span></button>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end pe-3 me-2 mb-2'>
                    <button className='btn btn-primary btn-lg py-3 px-5'><MdSearch /> Search</button>
                </div>
            </div>
        </div>
    );
}