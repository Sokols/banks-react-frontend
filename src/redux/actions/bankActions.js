import BankDataService from "../../services/bankService";

export const getAllBanksByUserId = (userId) => async (dispatch) => {
    try {
        const res = await BankDataService.getAllBanksByUserId(userId);
        console.log("Banks: " + res.data[0])
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
