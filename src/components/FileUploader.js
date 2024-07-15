import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import upload from "../assets/images/upload.png";

const FileUploader = () => {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
    handleUpload(acceptedFiles);
  };

  const handleUpload = (files) => {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });

    setIsUploading(true);

    axios.post('/upload', formData, {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        setUploadProgress(Math.round((loaded * 100) / total));
      }
    })
    .then(response => {
      console.log('File uploaded successfully');
      setIsUploading(false);
    })
    .catch(error => {
      console.error('Error uploading file', error);
      setIsUploading(false);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col items-center justify-center ml-3 mt-3 h-[250px] p-4 rounded-md border-zinc-400 border-dashed border-4">
      <div
        {...getRootProps()}
        className="flex flex-col items-center justify-center w-64 h-64 border-4 border-white rounded-lg cursor-pointer text-[24px]"
      >
        <input {...getInputProps()} />
        <img src={upload} alt="upload" className="w-[100px] h-[100px]" />
        <p className="p-3 text-gray-600 w-[600px] text-center">
          Drag & drop files here, or click to select files
        </p>
      </div>

      {isUploading && (
        <div className="w-full mt-4">
          <div className="relative w-full h-4 bg-gray-200 rounded">
            <div
              className="absolute top-0 left-0 h-4 bg-blue-500 rounded"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-center text-gray-600">{uploadProgress}%</p>
        </div>
      )}

      <div className="mt-2 text-center">
        {files.length === 0 ? (
          <p className="text-gray-600">No files added</p>
        ) : (
          <div>
            <h4 className="text-lg font-semibold">File Name:</h4>
            <ul>
              {files.map(file => (
                <li key={file.name}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
