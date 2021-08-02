export const CHANGE_NAME = 'PROFILE::CHANGE_NAME'
export const CHANGE_IS_ONLINE = 'PROFILE::CHANGE_IS_ONLINE'

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name: name,
    },
})

export const changeIsOnline = (isOnline) => ({
    type: CHANGE_IS_ONLINE,
    payload: {
        isOnline: isOnline,
    },
})
