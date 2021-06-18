import AccountDataService from "../../services/accountService";

export const getAccountsByUserAndBankId = (authToken, user, bankId) => async () => {
    try {
        const res = await AccountDataService.getAccountsByUserAndBankId(authToken, user, bankId);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const addAccount = (authToken, account) => async () => {
    try {
        const res = await AccountDataService.addAccount(authToken, account);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const editAccount = (authToken, account) => async () => {
    try {
        const res = await AccountDataService.editAccount(authToken, account);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const removeAccountById = (authToken, accountId) => async () => {
    try {
        const res = await AccountDataService.removeAccountById(authToken, accountId);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}