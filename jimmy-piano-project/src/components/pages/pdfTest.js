import React from "react";
import PDFViewer from "pdf-viewer-reactjs";

const ExamplePDFViewer = () => {
  return (
    <PDFViewer
      document={{
        url:
          "https://jimmy-musicsheets.s3-ap-southeast-1.amazonaws.com/Liszt_-_Trois_Etudes_de_Concert_No._3_Un_Sospiro.pdf"
      }}
      css="musicsheet-canvas"
      canvasCss="canvas"
    />
  );
};

export default ExamplePDFViewer;
