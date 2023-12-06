import React from 'react';
import SummaryView from './BookingSummaryView';
export default function BookingFormInner() {
    return (
        <div className='mb-4'>
            <SummaryView />
        </div>
    );
}

function formView() {
    return (
        <div className='bookingContainer bg-white p-4 shadow-sm rounded-1'>
            <h5 className='bookingContainer__tab text-center mb-4'>Change Search</h5>
            <fieldset className="border rounded-3 px-3 py-2 mb-4 border-danger text-danger">
                <legend className="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Drop-off</h6></legend>
                <input type='text' className='border-0 p-0 w-100' />
            </fieldset>
            <fieldset className="border rounded-3 px-3 py-2 mb-4">
                <legend className="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Drop-off</h6></legend>
                <input type='text' className='border-0 p-0 w-100' />
            </fieldset>
            <div className='d-flex mb-2'>
                <fieldset className=" w-100 border rounded-start px-3 py-2 mb-4">
                    <legend className="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Date</h6></legend>
                    <input type='date' className='border-0 p-0 w-100' />
                </fieldset>
                <fieldset className="w-100 border rounded-end  px-3 py-2 mb-4">
                    <legend className="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Time</h6></legend>
                    <input type='time' className='border-0 p-0 w-100' />
                </fieldset>
            </div>
            <button className='border btn btn-outline-secondary w-100 p-2 mb-4'><span className='p-1 d-inline-block'>Add Return</span></button>
            <button className='btn btn-primary  w-100 py-2'>New Quote</button>
        </div>
    );
}