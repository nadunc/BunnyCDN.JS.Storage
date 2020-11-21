import { AxiosInstance } from 'axios';
declare module 'axios' {
    interface AxiosResponse<T = any> extends Promise<T> {}
}
declare class RequestHandler {
    client: AxiosInstance;
    constructor(baseURL: string, apiAccessKey: string);
    private handleResponse;
    private handleError;
}
export default RequestHandler;
