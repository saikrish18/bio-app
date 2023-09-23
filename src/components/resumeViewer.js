import React from 'react';
import { Link } from 'react-router-dom';

function ResumeViewer({ resume }) {
  return (
    <div>
      <h2>Resume Screen</h2>
      {resume ? (
        <div className="resume-viewer">
          {/* Display the resume PDF here */}
          {/* You can use an <iframe> to embed the PDF or use other methods */}
          <iframe src={resume} title="Resume" width="100%" height="600px" />
        </div>
      ) : (
        <p>No Resume added yet</p>
      )}
      <Link to="/">Back</Link>
    </div>
  );
}

export default ResumeViewer;
