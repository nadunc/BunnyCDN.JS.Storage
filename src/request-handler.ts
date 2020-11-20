import axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';

declare module 'axios' {
    type AxiosResponse<T = any> = Promise<T>;
}

class RequestHandler {
    public client: AxiosInstance;

    constructor(apiAccessKey: string) {
        this.client = axios.create({
            headers: { AccessKey: apiAccessKey },
        });

        this.client.interceptors.response.use(this.handleResponse, this.handleError);
    }

    private handleResponse = ({ data }: AxiosResponse): any => data;

    private handleError = (error: AxiosError): any => Promise.reject(error.response?.data);
}

export default RequestHandler;
