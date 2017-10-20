

export function createReducer(initialState, reducerMap) {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];
        return reducer
            ? reducer(state, action.payload)
            : state;
    };
}

export function requestJSON(method, url, body, auth) {

    let headers = {};
    headers["Content-Type"] = "app/json";

    // if (auth) {
    //     headers["Authorization"] = ["Bearer", Storage().get("token")].join(" ");
    // }

    let opts = {};
    opts.method = method;
    opts.headers = headers;

    if (!!body) {
        opts.body = JSON.stringify(body);
    }

    return fetch(url, opts)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json().then((res) => {
                    return res;
                }).catch((e) => {
                    return response;
                });
            }

            return response.json().then((e) => {
                throw e;
            });
        });
}