import AccountDataService from "../../services/accountService";

export const getAllAccounts = () => async (dispatch) => {
    try {
        const res = await AccountDataService.getAllAccounts();
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const getAccountsByBankId = (bankId) => async (dispatch) => {
    try {
        const res = await AccountDataService.getAccountsByBankId(bankId);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const addAccount = (account) => async (dispatch) => {
    try {
        const res = await AccountDataService.addAccount(account);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}
