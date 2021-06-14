import http from "../http-common";

class BankDataService {
    getAllBanks() {
        return http.get("/bank");
    }

    addBank(data) {
        return http.post("/bank", data);
    }

    deleteBank(data) {
        return http.delete("/bank", data);
    }
}

export default new BankDataService();