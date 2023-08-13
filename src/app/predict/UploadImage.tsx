import Image from "next/image";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

const UploadImage = () => {
  const [files, setFiles] = useState<FileList>();

  //   console.log(files);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(e.target.files);
  };

  return (
    <div className="flex flex-col space-y-6 justify-center items-center my-10">
      <input
        className="bg-white px-4 py-2"
        type="file"
        name="image"
        id="image"
        onChange={handleFileChange}
      />
      {files?.length && (
        <div className="">
          <Image
            src={URL.createObjectURL(files[0])}
            alt="Uploaded image"
            width={400}
            height={400}
          />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
