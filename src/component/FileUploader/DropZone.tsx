import React, {FC, useState} from 'react';
import './fileuploader.scss';
import './FileuploaderResponsive.scss';
export const DropZone: FC = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const dragOver = (e:any) => {
        e.preventDefault();
    }
    const dragEnter = (e:any) => {
        e.preventDefault();
    }
    const dragLeave = (e:any) => {
        e.preventDefault();
    }
    const fileDrop = (e:any) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }
    const handleFiles  = (files: string | any[]) => {
        for(let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                // add to an array so we can display the name of file
            } else {
                // add a new property called invalid
                files[i]['invalid'] = true;
                // add to the same array so we can display the name of the file
                // @ts-ignore
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
                // set error message
                setErrorMessage('File type not permitted');
            }
        }
    }
    const validateFile = (file: { type: string; }) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    }
    const fileSize = (size: number) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    const fileType = (fileName: string) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }



    return (
        <div className="dropzone-wrapper">
            <div className="dropzone-container" onDragOver={dragOver} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={fileDrop}>
                <div className="drop-message">
                    <div className="upload-icon"></div>
                    Drag & Drop files here or click to upload
                </div>
            </div>
            <div className="file-display-container">
                {
                    selectedFiles.map((data, i) =>
                        <div className="file-status-bar" key={i}>
                            <div>
                                <div className="file-type-logo"></div>
                                <div className="file-type">{fileType(data)}</div>
                                <span className={`file-name ${data ? 'file-error' : ''}`}>{data}</span>
                                <span className="file-size">({fileSize(data)})</span> {data && <span className='file-error-message'>({errorMessage})</span>}
                            </div>
                            <div className="file-remove">X</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}