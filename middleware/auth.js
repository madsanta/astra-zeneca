export default async function ({ $axios, redirect }) {
    // If the user is not authenticated
    const host = window.location.origin
    const path = window.location.pathname

    const params = new URL(window.location.toString()).searchParams
    localStorage.setItem('accessToken', params.get('access_token'))
    localStorage.setItem('refreshToken', params.get('refresh_token'))

    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if (accessToken) {
        const res = await $axios.get('https://az-most.ru/api/auth/session', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
                'Access-Control-Allow-Headers': 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'
            }
        })

        if (res.status === 200) {
            localStorage.setItem('accessToken', accessToken)
        } else if (res.status === 401) {
            const refresh = await $axios.post('https://az-most.ru/api/auth/session',
                {
                    refresh: refreshToken || ''
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': 'true',
                        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
                        'Access-Control-Allow-Headers': 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'
                    }
                })

            if (refresh.status === 200) {
                localStorage.setItem('accessToken', refresh.data?.access_token)
                localStorage.setItem('refreshToken', refresh.data?.refresh_token)
            } else {
                redirect(`${host}/login`)
            }
        }
    } else if (!path.includes('login')) {
        redirect(`${host}/login`)
    }
}
