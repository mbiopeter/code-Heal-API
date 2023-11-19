import { getUserCredentials } from "../models/login.model.js";

export const VaridateUserCredentials = async (FullName,Password) => {
    try{
        const results = await getUserCredentials(FullName, Password)
        if(results && results.length > 0){
            return {Login : true}
        }
        else{
            return {Login : false}
        }
    }
    catch (err){
        throw err;
    }
}