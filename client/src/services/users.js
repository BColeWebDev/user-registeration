import http from "../http-common"

class UsersDataService {

    getAll() {
        return http.get("/api/v1/users")
    }
    getUser(id) {
        return http.get(`api/v1/users/${id}`)
    }
    createUser(data) {
        return http.post("/api/v1/users", data)
    }
    updateUser(id) {
        return http.post(`api/v1/users/${id}`)
    }
    deleteUser(id) {
        return http.delete(`api/v1/users/${id}`)
    }
}
export default new UsersDataService();