export const state = () => ({
    accessToken: '',
    refreshToken: ''
})

export const getters = {
    accessToken (state) {
        return state.accessToken
    },
    refreshToken (state) {
        return state.refreshToken
    }
}

export const mutations = {
    setAccess (state, token) {
        state.accessToken = token
    },
    setRefresh (state, token) {
        state.refreshToken = token
    }
}
