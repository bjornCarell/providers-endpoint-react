import fetch from 'node-fetch';
import { handleResponse } from '../handelResponse/handleResponse';

export const getProviders = async ( market='se' ) => {
    const response = await fetch('https://api.tink.se/api/v1/providers/' + market);
    return handleResponse(response);
}