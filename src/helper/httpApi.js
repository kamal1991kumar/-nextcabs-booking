const { REACT_APP_BACKEND_URL, REACT_APP_LOGO } = process.env;
export const APIURL = REACT_APP_BACKEND_URL;
export const LOGO = REACT_APP_LOGO;

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
    async getTripList(payload) {
        return await api(`${APIURL}trip-pricing`, payload, 'POST')
    },
    async tripCheckout(payload) {
        return await api(`${APIURL}trip`, payload, 'POST')
    }
};

export default Http;