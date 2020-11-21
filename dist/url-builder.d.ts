declare class URLBuilder {
    private baseURL;
    private storageZoneName;
    private storageZoneRegion;
    private path;
    private fileName;
    constructor(storageZoneName: string, storageZoneRegion: string);
    setPath: (path: string) => URLBuilder;
    setFileName: (fileName: string) => URLBuilder;
    build: () => string;
}
export default URLBuilder;
