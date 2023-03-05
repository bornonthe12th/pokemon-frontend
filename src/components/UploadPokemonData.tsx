import React, { FC, useRef, useState } from "react";
import axios from "axios";

const UploadPokemonData: FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
   if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post("http://localhost:80/api/pokemon", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Choose file</button>
      {selectedFile && <div>Selected file: {selectedFile.name}</div>}
    </div>
  );
};

export default UploadPokemonData;