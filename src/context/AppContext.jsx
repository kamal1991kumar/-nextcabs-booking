import { createContext, useEffect, useState } from 'react';
import Utils from 'helper/utils';
import Http, { LOGO } from 'helper/httpApi';
export const AppContext = createContext({});

export default function AppProvider({ children }) {
    const [searchData, setSearchData] = useState({
        from: '',
        fromDate: Utils.date(),
        fromId: '',
        to: '',
        toDate: Utils.date(),
        toId: '',
        isReturn: false
    });

    const searchPayload = ({ from, fromId, to, toId }) => ({
        fromAddress: {
            freeformAddress: from,
            placeId: fromId
        },
        toAddress: {
            freeformAddress: to,
            placeId: toId
        }
    });

    const [tripInfo, setTripInfo] = useState({});
    const [cabInfo, setCabInfo] = useState({});
    const [checkoutInfo, setCheckoutInfo] = useState({
        isOnboardCustomer: false,
        termsAndCondition: false,
        flightNumber: '',
        surcharges: [],
        specialInstruction: '',
        countryCode: '+44',
        fullName: '',
        email: '',
        confirmEmail: '',
        phoneNumber: ''
    });
    const [checkoutError, setCheckoutError] = useState({
        termsAndCondition: '',
        fullName: '',
        email: '',
        confirmEmail: '',
        phoneNumber: ''
    });

    const updateCheckoutInfo = (payload) => setCheckoutInfo(p => ({ ...p, ...payload }))

    const updateSearchData = (payload) => {
        setSearchData(p => ({ ...p, ...payload }));
    };

    const getTripList = () => {
        Http.getTripList(searchPayload(searchData)).then((e) => {
            setTripInfo(e)
        });
    };

    useEffect(() => {
        Utils.checkoutValidation(checkoutInfo, checkoutError, setCheckoutError);
    }, [checkoutInfo])

    const paymentCheckout = async () => {
        const result = Utils.checkoutValidation(checkoutInfo, checkoutError, setCheckoutError);
        if (!result) {
            return;
        }
        const { fromDate, toDate } = searchData;
        const { countryCode, fullName, email, phoneNumber, confirmEmail, termsAndCondition, ...rest } = checkoutInfo;
        const payload = {
            source: LOGO,
            vehicleType: cabInfo?.type,
            passengerCount: 1,
            pickUpTime: `${fromDate}Z`,
            returnPickUpTime: `${toDate}Z`,
            ...rest,
            ...searchPayload(searchData),
            customerDetails: {
                title: "Mr",
                fullName,
                email,
                phoneNumber: `${countryCode} ${phoneNumber}`
            }
        }
        return await Http.tripCheckout(payload);
    };

    return (
        <AppContext.Provider value={{ cabInfo, setCabInfo, searchData, updateSearchData, getTripList, tripInfo, paymentCheckout, checkoutInfo, updateCheckoutInfo, checkoutError }}>
            {children}
        </AppContext.Provider>
    )
}