import React from 'react';
import BookingFromView from './BookingFormView';
import BookingFormInner from './BookingFormInnerView';
export default function BookingForm({ isMain }) {
    return isMain ? <BookingFromView /> : <BookingFormInner />;
}
BookingForm.defaultProps = {
    isMain: true
}