import http from "../http-common";

class BankDataService {
    getAllBanks(authToken) {
        return http.get("/bank", { headers: { "Authorization" : `Basic ${authToken}`} });
    }
}

export default new BankDataService();