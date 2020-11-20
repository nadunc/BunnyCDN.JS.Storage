import RequestHandler from './request-handler';
import FileType from './types/file-type';
import ResponseType from './types/response-type';
import URLBuilder from './url-builder';

class BunnyCDNJSStorage {
    private storageZoneName: string;
    private apiAccessKey: string;
    private storageZoneRegion: string;
    private requestHandler: RequestHandler;

    constructor(storageZoneName: string, apiAccessKey: string, storageZoneRegion: string) {
        this.storageZoneName = storageZoneName;
        this.apiAccessKey = apiAccessKey;
        this.storageZoneRegion = storageZoneRegion.toLocaleLowerCase();
        this.requestHandler = new RequestHandler(this.apiAccessKey);
    }

    getFileContent = async (path: string, fileName: string): Promise<any> => {
        return await this.requestHandler.client.get(
            new URLBuilder(this.storageZoneName, this.storageZoneRegion).setPath(path).setFileName(fileName).build(),
        );
    };

    updateFile = async (path: string, fileName: string, fileContent: string): Promise<ResponseType> => {
        return await this.requestHandler.client.put(
            new URLBuilder(this.storageZoneName, this.storageZoneRegion).setPath(path).setFileName(fileName).build(),
            fileContent,
        );
    };

    deleteFile = async (path: string, fileName: string): Promise<ResponseType> => {
        return await this.requestHandler.client.delete(
            new URLBuilder(this.storageZoneName, this.storageZoneRegion).setPath(path).setFileName(fileName).build(),
        );
    };

    getFileList = async (path: string): Promise<FileType[]> => {
        return await this.requestHandler.client.get(
            new URLBuilder(this.storageZoneName, this.storageZoneRegion).setPath(path).build(),
        );
    };
}

export default BunnyCDNJSStorage;
