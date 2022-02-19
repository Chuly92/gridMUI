import { useEffect, useState } from 'react';

export function GetOperations () {

  const port = 3001;
  const [operations, setOperations] = useState([])

  useEffect(() => {
    fetch(`http://localhost:${port}/getOperations`)
    .then(res => res.json())
    .then(operations => { setOperations(operations)})
    .catch(err => err.json());
  }, []);
    
  return {operations};
};



