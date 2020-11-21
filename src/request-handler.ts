import axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import ResponseType from './types/response-type';

// declare module 'axios' {
//     type AxiosResponse<T = any> = Promise<T>;
// }

class RequestHandler {
    public client: AxiosInstance;

    constructor(apiAccessKey: string) {
        this.client = axios.create({
            headers: { AccessKey: apiAccessKey },
        });

        this.client.interceptors.response.use(this.handleResponse, this.handleError);
    }

    private handleResponse = ({ data }: AxiosResponse): any => data;

    private handleError = (error: AxiosError): Promise<ResponseType> => Promise.reject(error.response?.data);
}

export default RequestHandler;
