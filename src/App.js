// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState('');

//   useEffect(() => {
//     fetch("/api/message")
//     .then(res => res.text())
//     .then(data => setData(data));      
//     }, []);

//   return ( <div>{data}</div> );
// }

// export default App;

// ----- The code (provided in the quickstart) throws an error and does not render text to the page ----- //


import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { responseMessage } = await( await fetch(`/api/message`)).json();
      setData(responseMessage);
    })();
  });

  return <div>{data}</div>;
}

export default App;

