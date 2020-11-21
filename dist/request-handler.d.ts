import { AxiosInstance } from 'axios';
declare class RequestHandler {
    client: AxiosInstance;
    constructor(apiAccessKey: string);
    private handleResponse;
    private handleError;
}
export default RequestHandler;
