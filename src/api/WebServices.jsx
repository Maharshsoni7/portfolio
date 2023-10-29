import { Api } from "./Api";
import WebServiceConstants from "./WebServiceConstants";
import { Buffer } from "buffer";
function base64Encode(str) {
    try {
        // For browsers that support the btoa function
        return btoa(str);
    } catch (error) {
        // For browsers that do not support btoa (e.g., Node.js)
        const buffer = Buffer.from(str, 'utf-8');
        return buffer.toString('base64');
    }
}
export const WebServices = Api.injectEndpoints({
    // const authHeader = 'Basic ' + base64Encode(WebServiceConstants.CLIENT_ID + ':' + WebServiceConstants.CLIENT_SECRET),

    endpoints: (builder) => ({
        accessToken: builder.mutation({
            query: (code) => {
                return ({
                    url: 'https://accounts.spotify.com/api/token',
                    method: 'POST',
                    headers: {
                        'Authorization': 'Basic ' + (new Buffer.from(WebServiceConstants.CLIENT_ID + ':' + WebServiceConstants.CLIENT_SECRET).toString('base64')),
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: 'grant_type=client_credentials',
                });
            },
        }),

    }),
})
export const { useAccessTokenMutation } = WebServices