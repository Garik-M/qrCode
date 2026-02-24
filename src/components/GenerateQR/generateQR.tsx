import QRCode from "react-qr-code";
import { useRef } from "react";

type Props = {
  url: string;
};

const GenerateQR = ({ url }: Props) => {
  const qrRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!qrRef.current) return;

    const svg = qrRef.current.querySelector("svg");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => {
      canvas.width = 256;
      canvas.height = 256;
      ctx?.drawImage(img, 0, 0);

      const pngFile = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.download = "qr-code.png";
      link.href = pngFile;
      link.click();
    };

    img.src =
      "data:image/svg+xml;base64," +
      btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div>
      <div ref={qrRef}>
        <QRCode
          value={url || " "}
          size={256}
          bgColor="#ffffff"
          fgColor="#000000"
          level="L"
        />
      </div>

      <button onClick={handleDownload}>
        Download PNG
      </button>
    </div>
  );
};

export default GenerateQR;