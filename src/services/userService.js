import http from "../http-common";

class UserDataService {
    loginUser(data) {
        return http.post("/loginUser", data);
    }

    registerUser(data) {
        return http.post("/registerUser", data);
    }
}

export default new UserDataService();