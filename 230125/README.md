# 230125

AWS Web Service - Fri. 2023.01.27

## File Upload 

1) Image Upload 
PC - Image = Text
Img file change (ex. test.jpg > test.txt), showing only text 
.png
.jpg
.gif
.jpeg

2)example http protocol.
2-1) request message
    a) starg line
    b) header 
    b-1) content type
        b-a) json
        b-b) x-www-urlencoded
        b-c) multipart - form data

2-2) response message


### Test multipart form data

1) npm init -y
2) npm install express cors nunjucks
3) app.get single, array, upload
4) enctype
- x-www-urlencoded 
- multipart-form-data

Content-Type different is change body-parser.

#### Add to extension module
```sh
npm install multer
```
multer in console.log
upload is multer Multer {
  storage: MemoryStorage {},
  limits: undefined,
  preservePath: undefined,
  fileFilter: [Function: allowAll]
}
