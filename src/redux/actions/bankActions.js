import BankDataService from "../../services/bankService";

export const getAllBanks = (authToken) => async () => {
    try {
        const res = await BankDataService.getAllBanks(authToken);
        console.log(res.data);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
