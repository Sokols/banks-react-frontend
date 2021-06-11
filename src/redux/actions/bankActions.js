import BankDataService from "../../services/bankService";

export const getAllBanks = () => async (dispatch) => {
    try {
        const res = await BankDataService.getAllBanks();
        console.log("Banks: " + res.data)
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
