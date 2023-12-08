const { REACT_APP_BACKEND_URL } = process.env;
const APIURL = REACT_APP_BACKEND_URL;

async function api(url, data = {}, method = 'get') {
    const response = await fetch(url, {
        method,
        body: JSON.stringify(data)
    });
    const result = await response.json();
    if (result?.status === 'success') {
        return result;
    }
    return {};
};

const Http = {
    async searchLocation(str) {
        return await api(`${APIURL}google/search-location?search=${str}&limit=5`);
    },
    async getTripList({ from, fromId, to, toId }) {
        const payload = {
            fromAddress: {
                freeformAddress: from,
                placeId: fromId
            },
            toAddress: {
                freeformAddress: to,
                placeId: toId
            }
        };
        return await api(`${APIURL}trip-pricing`, payload, 'post')
    }
};

export default Http;