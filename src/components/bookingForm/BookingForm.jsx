import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import BookingFromView from './BookingFormView';
import BookingFormInner from './BookingFormInnerView';
import { AppContext } from 'context/AppContext';
import Utils from 'helper/utils';
export default function BookingForm({ isMain, isEdit }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [params] = useSearchParams();
    const { searchData, updateSearchData, getTripList } = useContext(AppContext);
    const Component = isMain ? BookingFromView : BookingFormInner;
    const isSearchEnabled = !Utils.canSearch(searchData);

    const onSearchClick = () => {
        const { fromDate, fromId, from, toDate, toId, to, isReturn } = searchData;
        getTripList();
        navigate({
            pathname: '/listing',
            search: `?from=${from}*${fromId}*${fromDate}&to=${to}*${toId}${isReturn ? `*${toDate}` : ''}`
        });
    };

    useEffect(() => {
        if (location?.pathname === '/listing') {
            updateSearchData(Utils.getSearchParms(params, searchData, navigate));
        }
    }, [location])

    return (
        <Component {...{
            searchData, updateSearchData, isEdit,
            isSearchEnabled, onSearchClick
        }} />
    );
}
BookingForm.defaultProps = {
    isMain: true
}