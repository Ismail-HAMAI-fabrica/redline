import multer from "multer";


const MIME_TYPES = {
    'image/jpg' : 'jpg',
    'image/jpeg' : 'jpeg',
    'image/png' : 'png'
    
};

const storage = multer.diskStorage({
    destination:(req,file,callback) =>{
        callback(null,'images')
            },
    filename: (req,file,callback) =>{
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

export default multer({storage: storage}).single('image');