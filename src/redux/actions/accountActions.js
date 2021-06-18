import AccountDataService from "../../services/accountService";

export const getAccountsByUserAndBankId = (userId, bankId) => async (dispatch) => {
    try {
        const res = await AccountDataService.getAccountsByUserAndBankId(userId, bankId);
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

export const editAccount = (account) => async (dispatch) => {
    try {
        const res = await AccountDataService.editAccount(account);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const removeAccountById = (id) => async (dispatch) => {
    try {
        const res = await AccountDataService.removeAccountById(id);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}