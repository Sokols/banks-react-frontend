import http from "../http-common";

class AccountDataService {
    getAllAccounts() {
        return http.get("/account");
    }

    addAccount(data) {
        return http.post("/account", data);
    }
}

export default new AccountDataService();