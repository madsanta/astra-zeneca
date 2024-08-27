export default async function ({ $axios, redirect }) {
    const host = window.location.origin
    const path = window.location.pathname

    const params = new URL(window.location.toString()).searchParams

    if (params.get('access_token')) {
        localStorage.setItem('accessToken', params.get('access_token'))
    }
    if (params.get('refresh_token')) {
        localStorage.setItem('refreshToken', params.get('refresh_token'))
    }

    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if (!!accessToken && accessToken !== 'null') {
        try {
            const res = await $axios.get('https://az-most.ru/api/auth/session', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
                    'Access-Control-Allow-Headers': '*'
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
                            'Access-Control-Allow-Headers': '*'
                        }
                    })

                if (refresh.status === 200) {
                    localStorage.setItem('accessToken', refresh.data?.access_token)
                    localStorage.setItem('refreshToken', refresh.data?.refresh_token)
                } else if (!path.includes('login')) {
                    redirect(`${host}/login`)
                }
            }
        } catch (e) {
            // eslint-disable-next-line
            console.log(e)

            if (!path.includes('login')) {
                redirect(`${host}/login`)
            }
        }
    } else if (!path.includes('login')) {
        redirect(`${host}/login`)
    }
}
