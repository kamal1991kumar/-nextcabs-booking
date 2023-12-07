import React from 'react';
import BookingFromView from './BookingFormView';
import BookingFormInner from './BookingFormInnerView';
export default function BookingForm({ isMain, isEdit }) {
    return isMain ? <BookingFromView /> : <BookingFormInner isEdit={isEdit} />;
}
BookingForm.defaultProps = {
    isMain: true
}