import React, {FC} from 'react';
import './fileuploader.scss';
import './FileuploaderResponsive.scss';

export const FileUploader: FC = () => {
    return (
        <>
            <div id="file-uploader" style={{ paddingTop: 100 }}>
                <div className="container">
                    <form action="">
                        <label htmlFor="FileUploader">
                            <input id="FileUploader" type="file"/>
                            <span>Drag & drop your file here </span>
                        </label>
                    </form>
                </div>
            </div>
        </>
    );
}