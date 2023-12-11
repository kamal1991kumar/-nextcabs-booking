const { REACT_APP_BACKEND_URL } = process.env;
const APIURL = REACT_APP_BACKEND_URL;

async function api(url, params = {}, method = 'GET') {
    try {
        const options = {
            method
        };
        if ('GET' === method) {
            url += '?' + (new URLSearchParams(params)).toString();
        } else {
            options.body = JSON.stringify(params);
        }

        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (result?.status === 'success') {
            return result;
        }
    } catch (e) {
        console.log(e, 'err', url)
    }

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
        return await api(`${APIURL}trip-pricing`, payload, 'POST')
    }
};

export default Http;