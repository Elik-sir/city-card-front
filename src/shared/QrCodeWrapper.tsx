import QRCode from 'react-qr-code';

const QrCodeWrapper = ({ value, className }) => {
  return (
    <div className={className}>
      <QRCode value={value} />
    </div>
  );
};

export default QrCodeWrapper;
