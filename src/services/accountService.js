import http from "../http-common";

class AccountDataService {
    getAccountsByUserAndBankId(userId, bankId) {
        return http.get("/account/" + userId + "/" + bankId)
    }

    addAccount(data) {
        return http.post("/account", data)
    }

    editAccount(data) {
        return http.put("/account", data);
    }

    removeAccountById(id) {
        return http.delete("/account/" + id);
    }
}

export default new AccountDataService();