# BunnyCDN Storage JS



## Import

```javascript
const BunnyCDNJSStorage = require("bunnycdn-js-storage").default;

const bunnyCDNJSStorage = new BunnyCDNJSStorage(STORAGE_ZONE, ACCESS_KEY, REGION);
```

## Methods

```typescript
getFileContent: (path: string, fileName: string) => Promise<any>;
updateFile: (path: string, fileName: string, fileContent: string) => Promise<ResponseType>;
deleteFile: (path: string, fileName: string) => Promise<ResponseType>;
getFileList: (path: string) => Promise<FileType[]>;
```

## Sample Response
```javascript
{ HttpCode: 201, Message: 'File uploaded.' }
```

## License
[MIT](https://choosealicense.com/licenses/mit/)