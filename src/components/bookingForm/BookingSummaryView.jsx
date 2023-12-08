import React from "react";
import { MdEdit } from 'react-icons/md';
import Utils from "helper/utils";

export default function SummaryView({ searchData, isEdit, setCanEdit }) {
    const { from, fromDate, to, toDate, isReturn } = searchData;
    return (
        <div className='card shadow-sm'>
            <div className="card-header d-flex py-3 justify-content-between align-items-center">
                <h5 className=' mb-0'>Summary</h5>
                {isEdit && <button className='btn btn-secondary btn-sm' onClick={() => setCanEdit(p => !p)}><MdEdit /> Edit Quote</button>}
            </div>
            <div className="card-body">
                <div className="d-flex pb-2">
                    <span className="w-50">Form</span>
                    <span className="w-50 fw-bold">{from}</span>
                </div>
                <div className="d-flex  pb-2">
                    <span className="w-50">To</span>
                    <strong className="w-50  fw-bold">{to}</strong>
                </div>
                <div className="d-flex  pb-2">
                    <span className="w-50">Date</span>
                    <strong className="w-50">{Utils.dateToYMD(fromDate)}</strong>
                </div>
                <div className="d-flex  pb-2">
                    <span className="w-50">Pick-Up Time</span>
                    <strong className="w-50 ">{Utils.getTime(fromDate)}</strong>
                </div>
            </div>
            {isReturn && (
                <React.Fragment>
                    <div className="card-header border-top">
                        <h5 className=' mb-0'>Return</h5>
                    </div>
                    <div className="card-body">
                        <div className="d-flex pb-2">
                            <span className="w-50">Form</span>
                            <strong className="w-50  fw-bold">{to}</strong>
                        </div>
                        <div className="d-flex  pb-2">
                            <span className="w-50">To</span>
                            <strong className="w-50  fw-bold">{from}</strong>
                        </div>
                        <div className="d-flex  pb-2">
                            <span className="w-50">Date</span>
                            <strong className="w-50">{Utils.dateToYMD(toDate)}</strong>
                        </div>
                        <div className="d-flex  pb-2">
                            <span className="w-50">Pick-Up Time</span>
                            <strong className="w-50">{Utils.getTime(toDate)}</strong>
                        </div>
                    </div>
                </React.Fragment>
            )}

        </div>
    )
}