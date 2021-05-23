import { useState } from 'react';
import dynamic from 'next/dynamic';
// const QrReader = dynamic(() => import('react-qr-reader'), {
//   ssr: false,
//   loading: () => <p>...</p>,
// });

import { useStyles } from 'shared/styles';
const Scancode = () => {
  const [open, setOpen] = useState('');
  const [result, setResult] = useState('qwe');
  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  const delay = 30;
  const previewStyle = {
    height: 240,
    width: 320,
  };
  return (
    <div className='w-full flex justify-center items-center'>
      {/* <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p> */}
    </div>
  );
};
export default Scancode;
