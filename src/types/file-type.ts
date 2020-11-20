interface FileType {
    Guid: string;
    StorageZoneName: string;
    Path: string;
    ObjectName: string;
    Length: number;
    LastChanged: string;
    ServerId: number;
    IsDirectory: boolean;
    UserId: string;
    ContentType: string;
    DateCreated: string;
    StorageZoneId: number;
    Checksum: string;
    ReplicatedZones: string;
    [x: string]: any;
}

export default FileType;
