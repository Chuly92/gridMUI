const updateOperation = async(data) => {

  const port = 3001;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  try {
    const resp = await fetch(`http://localhost:${port}/updateOperation`, requestOptions);
    const json = await resp.json();

    if ((resp.status === 200) && (!json.errors)) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export default updateOperation;

