import BankDataService from "../../services/bankService";

export const getAllBanks = () => async (dispatch) => {
    try {
        const res = await BankDataService.getAllBanks();
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
