import http from "../http-common";

class BankDataService {
    getAllBanksByUserId(userId) {
        return http.get("/bank/" + userId);
    }

    addBank(data) {
        return http.post("/bank", data);
    }

    deleteBank(data) {
        return http.delete("/bank", data);
    }
}

export default new BankDataService();