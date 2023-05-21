import React from 'react';
// import PDFViewer from 'react-pdf';
// import pdfFile from ''


export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        <div>
          {/* <PDFViewer src={pdfFile} /> */}
          <div>
            <a href="../Resume.pdf" download={Resume}>Download Resume</a>
          </div>
        </div>
      </p>
    </div>
  );
}
