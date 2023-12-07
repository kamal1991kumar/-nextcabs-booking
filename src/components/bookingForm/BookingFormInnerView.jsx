import React from 'react';
import SummaryView from './BookingSummaryView';
export default function BookingFormInner({ isEdit }) {
    return (
        <div className='mb-4'>
            {isEdit ? <FormView /> : <SummaryView />}
        </div>
    );
}
BookingFormInner.defaultProps = {
    isEdit: false
};

function FormView() {
    return (
        <div className='card shadow-sm'>
            <div className="card-header">
                <h5 className=' mb-0 py-2'>Change Search</h5>
            </div>
            <div className='card-body'>
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
        </div>
    );
}