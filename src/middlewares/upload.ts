import multer from "multer";

export const upload = multer({
  fileFilter: (req, file, cd: any) => {
    console.log(req);

    if (file.mimetype.startsWith("image")) {
      cd(null, true);
    } else {
      cd("Upload A Image !!");
    }
  },
});
