class URLBuilder {
    private baseURL = 'https://storage.bunnycdn.com';
    private storageZoneName: string;
    private storageZoneRegion: string;
    private path = '';
    private fileName = '';

    constructor(storageZoneName: string, storageZoneRegion: string) {
        this.storageZoneName = storageZoneName;
        this.storageZoneRegion = storageZoneRegion;

        if (this.storageZoneRegion && this.storageZoneRegion !== 'de') {
            this.baseURL = 'https://' + this.storageZoneRegion + '.storage.bunnycdn.com';
        }
    }

    setPath = (path: string): URLBuilder => {
        this.path = path;
        return this;
    };

    setFileName = (fileName: string): URLBuilder => {
        this.fileName = fileName;
        return this;
    };

    build = (): string => {
        let url = this.baseURL + '/' + this.storageZoneName + '/';

        if (this.path.length) {
            url = url + this.path + '/';
        }

        if (this.fileName.length) {
            url = url + this.fileName;
        }

        return url;
    };
}

export default URLBuilder;
