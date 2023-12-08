import React, { useState, Fragment } from "react";
import Http from 'helper/httpApi';

export default function SearchLocation({ name, value, updateSearchData }) {
    const [list, setlist] = useState([]);

    const onSearch = (value) => {
        const payload = { [name]: value };
        if (value?.length > 0) {
            Http.searchLocation(value).then(({ data }) => {
                setlist(data?.predictions || [])
            });
        } else {
            setlist([]);
            payload[`${name}Id`] = '';
        }
        updateSearchData(payload);
    };

    const onOptionClick = (item) => {
        updateSearchData({
            [name]: item.description,
            [`${name}Id`]: item.place_id
        });
        setlist([]);
    };

    return (
        <Fragment>
            <input type='text' className='border-0 p-0 w-100'
                value={value}
                onChange={(e) => onSearch(e.currentTarget.value)}
            />
            {list.length > 0 && (
                <ul className="dropdown-menu show w-100 mt-1 start-0">
                    {list.map(i => (<li key={i?.place_id} onClick={() => onOptionClick(i)}>
                        <span className="dropdown-item d-inline-block  text-truncate">{i.description}</span>
                    </li>))}
                </ul>
            )}
        </Fragment>
    )
}