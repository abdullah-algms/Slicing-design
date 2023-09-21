//
import React, { useEffect } from 'react';



export default function Error() {
  useEffect(() => {
    document.title = "404 Not Found";
  }, []);
  return (
    <p>error</p>
  )
}
