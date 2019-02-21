export default {
    getToken: () => localStorage.getItem("rent-app-user-token"),
    logOut: () => {
        localStorage.removeItem("rent-app-user-token")
        localStorage.removeItem("rent-app-user-info")
    }
}