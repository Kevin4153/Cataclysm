import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from 'html5-qrcode';

const BarcodeScanner = ({ onBarcodeDetected }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    const html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      {
      fps: 10,
      qrbox: { width: 250, height: 250 },
      formatsToSupport: [
        Html5QrcodeSupportedFormats.UPC_A, 
        Html5QrcodeSupportedFormats.UPC_E, 
        Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION
      ],
      rememberLastUsedCamera: false 
      },
    );

    html5QrcodeScanner.render(onScanSuccess, onScanFailure);

    function onScanSuccess(decodedText, decodedResult) {
      onBarcodeDetected(decodedText);
    }

    function onScanFailure(error) {
      console.warn(`Code scan error = ${error}`);
    }

    return () => {
      html5QrcodeScanner.clear();
    };
  }, [onBarcodeDetected]);

  return <div id="reader" style={{width: "500px"}} ref={scannerRef}></div>;
};

export default BarcodeScanner;
