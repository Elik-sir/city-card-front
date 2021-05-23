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
    <div className='w-full h-screen flex justify-center'>
      <div className='w-full text-white'>
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Поднесите QR код к камере
        </p>
        <div
          className='h-screen bg-black w-full'
          style={{ backgroundColor: 'black', color: 'white' }}
        ></div>
      </div>
    </div>
  );
};
export default Scancode;
