import AccountDataService from "../../services/accountService";

export const getAllAccounts = () => async (dispatch) => {
    try {
        const res = await AccountDataService.getAllAccounts();
        console.log("Accounts: " + res.data);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}