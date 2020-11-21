import FileType from './types/file-type';
import ResponseType from './types/response-type';
declare class BunnyCDNJSStorage {
    private storageZoneName;
    private apiAccessKey;
    private storageZoneRegion;
    private requestHandler;
    constructor(storageZoneName: string, apiAccessKey: string, storageZoneRegion: string);
    getFileContent: (path: string, fileName: string) => Promise<any>;
    updateFile: (path: string, fileName: string, fileContent: string) => Promise<ResponseType>;
    deleteFile: (path: string, fileName: string) => Promise<ResponseType>;
    getFileList: (path: string) => Promise<FileType[]>;
}
export default BunnyCDNJSStorage;
