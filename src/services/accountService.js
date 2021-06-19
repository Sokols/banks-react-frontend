import http from "../http-common";

class AccountDataService {
    getAccountsByUserAndBankId(authToken, user, bankId) {
        return http.get("/account/" + user.id + "/" + bankId, { headers: { "Authorization" : `Basic ${authToken}`} })
    }

    addAccount(authToken, data) {
        return http.post("/account", data, { headers: { "Authorization" : `Basic ${authToken}`} })
    }

    editAccount(authToken, data) {
        return http.put("/account", data, { headers: { "Authorization" : `Basic ${authToken}`} });
    }

    removeAccountById(authToken, accountId) {
        return http.delete("/account/" + accountId, { headers: { "Authorization" : `Basic ${authToken}`} });
    }
}

export default new AccountDataService();