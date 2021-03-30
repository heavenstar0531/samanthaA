const authProvider = {
    login: ({ username, password }) =>  {
        const request = new Request('https://realestate-in-israel.com/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
            credentials: 'include'
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                localStorage.setItem('authenticated', true);
                return response
            })
    },
    logout: () => {
        const request = new Request('https://realestate-in-israel.com/logout', {
            method: 'GET',
            credentials: 'include'
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => {
                if (response.status === 200){
                    localStorage.removeItem('authenticated');
                    Promise.resolve(true);
                }
                else
                    Promise.reject('User wasn\'nt logged in')
            });
    },
    checkAuth: () => localStorage.getItem('authenticated') ? Promise.resolve() : Promise.reject(),
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('authenticated');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: () => {
        return Promise.resolve()
    }
};

export default authProvider;