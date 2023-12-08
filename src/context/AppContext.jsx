import { createContext, useState } from 'react';
import Utils from 'helper/utils';
import Http from 'helper/httpApi';
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

    const [tripInfo, setTripInfo] = useState({});
    const [cabInfo, setCabInfo] = useState({});

    const updateSearchData = (payload) => {
        setSearchData(p => ({ ...p, ...payload }));
    };

    const getTripList = () => {
        Http.getTripList(searchData).then((e) => {
            setTripInfo(e)
        });
    };


    return (
        <AppContext.Provider value={{ cabInfo, setCabInfo, searchData, updateSearchData, getTripList, tripInfo }}>
            {children}
        </AppContext.Provider>
    )
}