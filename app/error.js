'use client'; // Error components must be Client Components
 
import { useEffect } from 'react';
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main>
      <h2 className="pb-4 text-center text-4xl font-bold uppercase text-primary-50">AI Gone Wrong!</h2>
      <button
       className="pb-4 text-center text-4xl font-bold uppercase text-primary-100 bg-secondary-400" 
       onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Restart AI
      </button>
    </main>
  );
}