import React, { useContext, useEffect, useState } from 'react';
import { MdArrowCircleRight } from 'react-icons/md';
import BookingForm from 'components/bookingForm';
import BaseLayout from 'layout/baseLayout';
import Utils from 'helper/utils';
import { AppContext } from 'context/AppContext';

export default function CheckoutPage() {
    const { tripInfo, cabInfo } = useContext(AppContext);
    const [addons, setAddons] = useState({});
    const addOnslist = Object.keys(addons) || [];

    const totalAddons = addOnslist.reduce((p, n) => {
        const j = addons[n];
        if (j.isChecked) {
            p += j.chargeValue;
        }
        return p;
    }, 0);

    const totalPrice = cabInfo?.price + totalAddons;
    useEffect(() => {
        if (tripInfo?.surcharge?.surcharges.length) {
            const _filter = tripInfo?.surcharge?.surcharges?.filter(i => i?.chargeValue > 0);
            setAddons(_filter.reduce((p, n) => ({
                ...p, [n.chargeName]: {
                    ...n,
                    isChecked: false
                }
            }), {}));
        }
    }, [tripInfo?.surcharge?.surcharges])

    return (
        <BaseLayout>
            <div className='py-2 py-lg-4'>
                <div className='container'>
                    <div className='row justify-content-lg-center'>
                        <div className='col-xl-10 col-12 mt-lg-3 py-5'>
                            <div className='row'>
                                <div className='col-12 col-xl-4'>
                                    <BookingForm isMain={false} isEdit={false} />
                                </div>
                                <div className='col-12 col-xl-8'>
                                    <div className='card shadow-sm mb-4'>
                                        <div className='card-header'>
                                            <h5 className='mb-0 py-2'>Transfer Details - Add-ons</h5>
                                        </div>
                                        <div className='card-body'>
                                            {addOnslist?.map((j) => {
                                                const i = addons[j];
                                                return (
                                                    <div className='row' key={i?.chargeName}>
                                                        <div className='col-6'>
                                                            <div className="form-check form-switch mt-2">
                                                                <input className="form-check-input" type="checkbox" id={i?.chargeName}
                                                                    checked={i?.isChecked}
                                                                    onChange={() => setAddons(p => ({
                                                                        ...p, [i?.chargeName]: {
                                                                            ...i,
                                                                            isChecked: !i?.isChecked || false
                                                                        }
                                                                    }))}
                                                                />
                                                                <label role='button' className="form-check-label" htmlFor={i?.chargeName}>{Utils.convertToCamelCase(i?.chargeName)}</label>
                                                            </div>
                                                        </div>
                                                        <div className='col-6'>
                                                            <h6 className='mb-0 py-2 fw-bold'>GBP {i?.chargeValue}</h6>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                            <div className="mb-3 mt-3">
                                                <label htmlFor="flightNumber1" className="form-label bg-secondary mb-0 py-1 px-3 rounded-top text-white">Flight Number</label>
                                                <input type="text" className="form-control" id="flightNumber1" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="specialInstructions1" className="form-label bg-secondary mb-0 py-1 px-3 rounded-top text-white">Special Instructions</label>
                                                <textarea className="form-control" id="specialInstructions1" rows="3"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card shadow-sm mb-4'>
                                        <div className='card-header'>
                                            <h5 className='mb-0 py-2'>Personal Information
                                            </h5>
                                        </div>
                                        <div className='card-body'>
                                            <div className="mb-3">
                                                <label htmlFor="fullname1" className="form-label bg-secondary mb-0 py-1 px-3 rounded-top text-white">Full Name</label>
                                                <input type="text" className="form-control" id="fullname1" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="mobileNumber" className="form-label bg-secondary mb-0 py-1 px-3 rounded-top text-white">Mobile Number</label>
                                                <div className="input-group flex-nowrap">
                                                    <select id='mobileNumber' className="input-group-text">
                                                        <option>+44</option>
                                                    </select>
                                                    <input id='mobileNumber' type="text" className="form-control" placeholder="Mobile Number" />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="email1" className="form-label bg-secondary mb-0 py-1 px-3 rounded-top text-white">Email</label>
                                                <input type="email" className="form-control" id="email1" />
                                            </div>
                                            <div >
                                                <label htmlFor="confirEmail1" className="form-label bg-secondary mb-0 py-1 px-3 rounded-top text-white">Confirm Email</label>
                                                <input type="email" className="form-control" id="confirEmail1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card shadow-sm mb-4'>
                                        <div className='card-header'>
                                            <h5 className='mb-0 py-2'>Payment Details
                                            </h5>
                                        </div>
                                        <div className='card-body'>
                                            <div className='mb-3 p-3 border bg-light rounded'>
                                                <div className="row mb-2">
                                                    <strong className='col-6'>Summary</strong>
                                                </div>
                                                <div className="row mb-2">
                                                    <strong className='col-6'>Vehicle Type</strong>
                                                    <span className='col-6'>Estate</span>
                                                </div>
                                                <div className="row mb-2">
                                                    <strong className='col-6'>Estimated Distance</strong>
                                                    <span className='col-6'>{tripInfo.radius} miles</span>
                                                </div>
                                                <div className="row mb-2">
                                                    <strong className='col-6'>Transfer(s) Cost	</strong>
                                                    <span className='col-6'>GBP {cabInfo?.price}</span>
                                                </div>
                                                <div className="row mb-2">
                                                    <strong className='col-6'>Add-Ons</strong>
                                                    <span className='col-6'>GBP {totalAddons}</span>
                                                </div>
                                                <div className="row mb-2">
                                                    <strong className='col-6'>Total Price</strong>
                                                    <span className='col-6'>GBP {totalPrice}</span>
                                                </div>
                                            </div>
                                            <div className="form-check mb-3">
                                                <input type="checkbox" className="form-check-input" id="createAccount1" />
                                                <label className="form-check-label" htmlFor="createAccount1">Selecting this will create your account with us to enable faster checkout next time.</label>
                                            </div>
                                            <div className="form-check mb-3">
                                                <input type="checkbox" className="form-check-input" id="terms1" required />
                                                <label className="form-check-label" htmlFor="terms1">I have read and agree to the <a href="...">terms &amp; conditions</a> and <a href="...">privacy and policy</a>.</label>
                                            </div>
                                            <div className='text-center py-4'>
                                                <button className='btn btn-primary btn-lg py-3 px-4'>Continue to payment  <MdArrowCircleRight /></button>
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