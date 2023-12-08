import React from "react";
import Utils from 'helper/utils';
export default function DateInput({ type, value, onChange }) {
    const val = type === 'time' ? Utils.getTime(value) : Utils.getDate(value);
    const min = type === 'time' ? Utils.getTime(Utils.date()) : Utils.getDate(Utils.date());
    return (
        <input
            type={type}
            className='border-0 p-0 w-100'
            value={val}
            min={min}
            onChange={(e) => {
                if (type === 'time') {
                    onChange(Utils.setDateTime(value, null, e.currentTarget.value));
                } else {
                    onChange(Utils.setDateTime(value, e.currentTarget.value, null));
                }
            }}
        />
    )
}