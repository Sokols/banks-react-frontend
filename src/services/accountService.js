import http from "../http-common";

class AccountDataService {
    getAllAccounts() {
        return http.get("/account");
    }

    getAccountsByBankId(bankId) {
        return http.get("/account/" + bankId)
    }

    addAccount(data) {
        return http.put("/account", data);
    }
}

export default new AccountDataService();