'use client'; // Error components must be Client Components
 
import { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <div className="relative flex flex-col justify-center overflow-hidden m-8">
      <h2 >AI Gone Wrong!</h2>
      <div className="mx-auto w-full text-center">
        <div className="join">
         <button className="btn-primary btn mr-3 uppercase text-base-content">
           
            <Player
        autoplay
        loop
        src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lottie/error404.json"
        style={{ height: '500px', width: '500px' }}
        className="m-8"
      ></Player>
          <Link href="/"> Home</Link>
        </button>
          <button
       className="btn btn-primary uppercase" 
       onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Reset
      </button>
      </div>
      </div>
    </div>
  );
}