import React, {FC, useEffect, useState} from 'react';
import './fileuploader.scss';
import './FileuploaderResponsive.scss';
import {DropZone} from "./DropZone";
export const FileUploader: FC = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        // @ts-ignore
        setPreview(objectUrl);
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    const onSelectFile = (e : any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }
    return (
        <div id="file-uploader" style={{ paddingTop: 100 }}>
            <div className="container">
                <form action="">
                    <label htmlFor="FileUploader">
                        <input id="FileUploader" type="file" name="file" onChange={onSelectFile}/>
                        <span>Drag 'n' drop some files here, or click to select files</span>
                    </label>
                </form>
                {selectedFile &&  <img src={preview} alt="" /> }
                <DropZone/>
            </div>
        </div>
    );
}