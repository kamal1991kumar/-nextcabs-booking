const Utils = {
    convertToCamelCase(string) {
        const words = string?.split(/(?=[A-Z])/)?.join(" ");
        const formattedSentence = words
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        return formattedSentence;
    },
    dateToYMD(z) {
        const date = new Date(z);
        const d = date.getDate();
        const m = date.getMonth() + 1;
        const y = date.getFullYear();
        return `${(d <= 9 ? '0' + d : d)}-${(m <= 9 ? '0' + m : m)}-${y}`;
    },
    date() {
        return new Date().toISOString().split('.')[0]
    },
    getDate(d) {
        if (!d) {
            return '';
        }
        return d.split('T')[0];
    },
    getTime(d) {
        if (!d) {
            return '';
        }
        const t = d.split('T')[1].split(':');
        return `${t[0]}:${t[1]}`;
    },
    setDateTime(v, d, t) {
        if (!v) {
            return '';
        }
        const _v = v.split('T');
        if (d !== null) {
            return `${d}T${_v[1]}`;
        }

        if (t !== null) {
            return `${_v[0]}T${t}${_v[1].slice(5)}`;
        }
    },
    canSearch(searchData = {}) {
        return (searchData?.fromId?.length > 0 && searchData?.toId?.length > 0);
    },
    getSearchParms(query, initValue, navigate) {
        const _init = { ...initValue };
        if (query?.size < 1) {
            return navigate('/');
        }

        if (!query.has('from') && !query.has('to')) {
            return navigate('/');
        }

        const tripfrom = query.get('from')?.split('*');
        const tripto = query.get('to')?.split('*');
        if ([tripfrom[0], tripfrom[1], tripfrom[2], tripto[0], tripto[1]].includes(undefined)) {
            return navigate('/');
        }

        _init.from = tripfrom[0];
        _init.fromId = tripfrom[1];
        _init.fromDate = tripfrom[2];
        _init.to = tripto[0];
        _init.toId = tripto[1];

        if (tripto[2] !== undefined) {
            _init.toDate = tripto[2];
            _init.isReturn = true;
        }

        return _init;
    },
    getTripListing(list, info, isReturn) {
        if (Object.keys(info).length === 0) {
            return [];
        }
        const { rule, radius } = info;
        const lst = Object.keys(list);
        return lst.map(i => {
            const d = list[i];
            const price = ['MULTI_LOCATION', 'SINGLE_LOCATION'].includes(rule.type) ? Math.round(rule[d.id]) : Math.round(rule[d.id] * radius + rule?.minimumCharge)
            return {
                type: i,
                ...d,
                price: isReturn ? (2 * price) : price,
            };
        });
    }
}

export default Utils;
