import React from 'react';

export default function BookingForm() {
    return (
        <div className='bookingContainer'>
            <div className='container'>
                <div className='row'>
                    <h5 className='bookingContainer__tab col text-center p-3 mb-0'>Airport Transfers</h5>
                    <div className='col'>&nbsp;</div>
                </div>
            </div>
            <div className='bookingContainer__box px-2 py-4'>
                <div className='container py-2'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <fieldset class="border rounded-3 px-3 py-2 mb-4">
                                <legend class="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Drop-off</h6></legend>
                                <input type='text' className='border-0 p-0 w-100' />
                            </fieldset>
                        </div>
                        <div className='col-12  col-lg-6'>
                            <fieldset class="border rounded-3 px-3 py-2 mb-4">
                                <legend class="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Drop-off</h6></legend>
                                <input type='text' className='border-0 p-0 w-100' />
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className='container py-2'>
                    <div className='row'>
                        <div className='col-12  col-lg-6'>
                            <div className='d-flex'>
                                <fieldset class=" w-100 border rounded-start px-3 py-2 mb-4">
                                    <legend class="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Drop-off</h6></legend>
                                    <input type='date' className='border-0 p-0 w-100' />
                                </fieldset>
                                <fieldset class="w-100 border rounded-end  px-3 py-2 mb-4">
                                    <legend class="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Drop-off</h6></legend>
                                    <input type='time' className='border-0 p-0 w-100' />
                                </fieldset>
                            </div>
                        </div>
                        <div className='col-12  col-lg-6'>
                            <div className='d-flex'>
                                <fieldset class=" w-100 border rounded-start px-3 py-2 mb-4">
                                    <legend class="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Drop-off</h6></legend>
                                    <input type='date' className='border-0 p-0 w-100' />
                                </fieldset>
                                <fieldset class="w-100 border rounded-end  px-3 py-2 mb-4">
                                    <legend class="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Drop-off</h6></legend>
                                    <input type='time' className='border-0 p-0 w-100' />
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}