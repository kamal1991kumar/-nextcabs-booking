import React from 'react';
import { MdLocalAirport, MdSearch, MdChevronLeft } from 'react-icons/md';
import SearchLocation from 'components/common/SearchLocation';
import DateInput from 'components/common/DateInput';
export default function BookingFormView({ searchData, updateSearchData, isSearchEnabled, onSearchClick }) {
    return (
        <div className='bookingContainer'>
            <div className='row'>
                <div className='col'><h5 className='bookingContainer__tab text-center p-3 mb-0 bg-white rounded-top'><MdLocalAirport /> <span className='d-none d-lg-inline'>Airport</span> Transfers</h5></div>
                <div className='col'>&nbsp;</div>
            </div>
            <div className='bookingContainer__box px-2 py-4 bg-white rounded-bottom rounded-end'>
                <div className='container py-2'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <fieldset className="dropdown border rounded-3 px-3 py-2 mb-4">
                                <legend className="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Pick-up</h6></legend>
                                <SearchLocation
                                    name='from'
                                    value={searchData?.from}
                                    updateSearchData={updateSearchData}
                                />
                            </fieldset>
                        </div>
                        <div className='col-12  col-lg-6'>
                            <fieldset className="dropdown border rounded-3 px-3 py-2 mb-4">
                                <legend className="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Drop-off</h6></legend>
                                <SearchLocation
                                    name='to'
                                    value={searchData?.to}
                                    updateSearchData={updateSearchData}
                                />
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
                                    <DateInput
                                        type='date'
                                        value={searchData?.fromDate}
                                        onChange={(v) => updateSearchData({ fromDate: v })}
                                    />
                                </fieldset>
                                <fieldset className="w-100 border rounded-end  px-3 py-2 mb-4">
                                    <legend className="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Time</h6></legend>
                                    <DateInput
                                        type='time'
                                        value={searchData?.fromDate}
                                        onChange={(v) => updateSearchData({ fromDate: v })}
                                    />
                                </fieldset>
                            </div>
                        </div>
                        {
                            searchData?.isReturn ? (
                                <div className='col-12  col-lg-6'>
                                    <div className='d-flex'>
                                        <fieldset className=" w-100 border rounded-start px-3 py-2 mb-4">
                                            <legend className="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Date <MdChevronLeft /></h6></legend>
                                            <DateInput
                                                type='date'
                                                value={searchData?.toDate}
                                                onChange={(v) => updateSearchData({ toDate: v })}
                                            />
                                        </fieldset>
                                        <fieldset className="w-100 border rounded-end  px-3 py-2 mb-4">
                                            <legend className="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Time <MdChevronLeft /></h6></legend>
                                            <DateInput
                                                type='time'
                                                value={searchData?.toDate}
                                                onChange={(v) => updateSearchData({ toDate: v })}
                                            />
                                        </fieldset>
                                        <button type="button"
                                            className="btn-close mt-4 ms-2"
                                            onClick={() => updateSearchData({ isReturn: !searchData?.isReturn })}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className='col-12  col-lg-6 pt-2 mb-4'>
                                    <button className='border btn btn-outline-secondary w-100 p-2' onClick={() => updateSearchData({ isReturn: !searchData?.isReturn })}>
                                        <span className='p-1 d-inline-block'>Add Return</span>
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </div >
                <div className='d-flex justify-content-end pe-3 me-2 mb-2'>
                    <button className='btn btn-primary btn-lg py-3 px-5' onClick={onSearchClick} disabled={isSearchEnabled}><MdSearch /> Search</button>
                </div>
            </div >
        </div >
    );
}