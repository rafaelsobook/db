export const webSocketURL = "ws://localhost:3000" || "https://dungeonborntcpcon.onrender.com" || "https://dbtcp.herokuapp.com"
export const APIURL = 'http://localhost:8100' || 'https://fair-ruby-fly-tam.cyclic.app' || "https://dbserver.herokuapp.com"
export const imgDir = "/images/peoplepics/"

export const apiOpt = (meth, toPost, token) => {
    const baseOpts = {
        method: meth,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'authori': token ? `fawad ${token}` : '',
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    }

    if (toPost) {
        return {
            ...baseOpts,
            body: JSON.stringify(toPost)
        }
    }
    return baseOpts
} 