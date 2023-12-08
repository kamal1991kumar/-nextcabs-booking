import React, { useState } from 'react';
import { MdChevronLeft } from 'react-icons/md';
import SearchLocation from 'components/common/SearchLocation';
import DateInput from 'components/common/DateInput';
import SummaryView from './BookingSummaryView';
export default function BookingFormInner(props) {
    const [canEdit, setCanEdit] = useState(false);
    const Comp = !canEdit ? SummaryView : FormView;
    return (
        <div className='mb-4'>
            <Comp {...props} setCanEdit={setCanEdit} />
        </div>
    );
}
BookingFormInner.defaultProps = {
    isEdit: false
};

function FormView({ searchData, updateSearchData, isSearchEnabled, onSearchClick, setCanEdit }) {
    return (
        <div className='card shadow-sm'>
            <div className="card-header">
                <h5 className='py-2 mb-0'>Change Search</h5>
            </div>
            <div className='card-body'>
                <fieldset className="dropdown border rounded-3 px-3 py-2 mb-4">
                    <legend className="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Pick-up</h6></legend>
                    <SearchLocation
                        name='from'
                        value={searchData?.from}
                        updateSearchData={updateSearchData}
                    />
                </fieldset>
                <fieldset className="dropdown border rounded-3 px-3 py-2 mb-4">
                    <legend className="float-none w-auto px-2 mb-0"><h6 className='mb-0'>Drop-off</h6></legend>
                    <SearchLocation
                        name='to'
                        value={searchData?.to}
                        updateSearchData={updateSearchData}
                    />
                </fieldset>
                <div className='d-flex mb-2'>
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
                {
                    searchData?.isReturn ? (
                        <div className='d-flex mb-2'>
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
                    ) : (
                        <button onClick={() => updateSearchData({ isReturn: !searchData?.isReturn })} className='border btn btn-outline-secondary w-100 p-2 mb-4'>
                            <span className='p-1 d-inline-block'>Add Return</span>
                        </button>
                    )
                }

                <button disabled={isSearchEnabled} onClick={() => {
                    onSearchClick();
                    setCanEdit(p => !p);
                }} className='btn btn-primary  w-100 py-2'>New Quote</button>
            </div>
        </div>
    );
}