import React from "react";
import { MdEdit } from 'react-icons/md'
export default function SummaryView() {
    return (
        <div className='card shadow-sm'>
            <div className="card-header">
                <h5 className=' mb-0 py-2'>Summary</h5>
            </div>
            <div className="card-body">
                <div className="d-flex pb-2">
                    <span className="w-50">Form</span>
                    <strong className="w-50">Dehli</strong>
                </div>
                <div className="d-flex  pb-2">
                    <span className="w-50">To</span>
                    <strong className="w-50">Dehli</strong>
                </div>
                <div className="d-flex  pb-2">
                    <span className="w-50">Date</span>
                    <strong className="w-50">Dehli</strong>
                </div>
                <div className="d-flex  pb-2">
                    <span className="w-50">Flight Arrival Time</span>
                    <strong className="w-50">Dehli</strong>
                </div>
            </div>
            <div className="card-header border-top">
                <h5 className=' mb-0'>Return</h5>
            </div>
            <div className="card-body">
                <div className="d-flex pb-2">
                    <span className="w-50">Form</span>
                    <strong className="w-50">Dehli</strong>
                </div>
                <div className="d-flex  pb-2">
                    <span className="w-50">To</span>
                    <strong className="w-50">Dehli</strong>
                </div>
                <div className="d-flex  pb-2">
                    <span className="w-50">Date</span>
                    <strong className="w-50">Dehli</strong>
                </div>
                <div className="d-flex  pb-2">
                    <span className="w-50">Flight Arrival Time</span>
                    <strong className="w-50">Dehli</strong>
                </div>
            </div>
        </div>
    )
}