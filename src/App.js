import React, { Fragment, useState} from "react";

import ImageUploader from "./components/ImageUploader";
import Uploaded from "./components/Uploaded";
import UploadingBar from "./components/ProgressBar";

function App() {
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [file, setFile] = useState(null);

  return (
    <Fragment>
      {!uploaded && !uploading && (
        <ImageUploader
          setUploading={setUploading}
          setUploaded={setUploaded}
          setFile={setFile}
        />
      )}
      {uploading && <UploadingBar />}
      {uploaded && (
        <Uploaded
          file={file}
          setUploading={setUploading}
          setUploaded={setUploaded}
        />
      )}
      <p>Corentin Philippe-Taylor</p>
    </Fragment>
    
  );
}
export default App;