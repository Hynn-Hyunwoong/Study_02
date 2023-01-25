const multer = require("multer");
const path = require("path");

const upload = multer({
    storage : multer.diskStorage({
        destination : (req,file,done)=>{
            done(null, "upload/");
        },
        filename : (req,file,done)=>{
            // usage path library 
            // Protect duplicate file-name
            // 기준 파일 : 1.jpg
            const ext = path.extname(file.originalname) // JPG
            const basename = path.basename(file.originalname, ext);
            const filename = `${basename}_${Date.now()}${ext}`
            done(null, filename);

            console.log('step1', ext)
            console.log('step2', basename)
            console.log('step3', filename)
        }   

    }),
    limits : {fileSize : 25 * 1024 * 1024 } // 5MB 
    // 1024byte = 1KB 1KB * 1024byte = 1MB * 5 = 5MB
    // 1byte = 1bit
    // 1KB = 1024byte
    // 1MB = 1024KB
    // PC storage level = 1 2 4 8 16 32 64 128 256 512 1024
});

module.exports = upload

// console.log(upload);
// Multer {
//     storage: DiskStorage {
//       getFilename: [Function: filename],
//       getDestination: [Function: destination]
//     },
//     limits: { fileSize: 5242880 },
//     preservePath: undefined,
//     fileFilter: [Function: allowAll]
//   }

// console.log("multer origin", multer)
// multer origin [Function: multer] {
//     diskStorage: [Function (anonymous)],
//     memoryStorage: [Function (anonymous)],
//     MulterError: [Function: MulterError]
//   }

// console.log("upload is multer",upload);
// upload is multer Multer {
//     storage: MemoryStorage {},
//     limits: {},
//     preservePath: undefined,
//     fileFilter: [Function: allowAll]
//   }
// console.log("update-proto", upload.__proto__);
// update-proto {
//     _makeMiddleware: [Function (anonymous)],
//     single: [Function (anonymous)],
//     array: [Function (anonymous)],
//     fields: [Function (anonymous)],
//     none: [Function (anonymous)],
//     any: [Function (anonymous)]
//   }

// File Upload Process
// 1) Client -> Server
// 2) Client - Received img data parser is .txt
// 3) Server - received txt data save in Database. (storage)

// storage: MemoryStorage {},
// limits: undefined,
// preservePath: undefined,
// fileFilter: [Function: allowAll]










