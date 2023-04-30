const parseJSON = (value) => {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch {
    console.log('parsing error on', {value});
    return undefined;
  }
}

export {parseJSON};