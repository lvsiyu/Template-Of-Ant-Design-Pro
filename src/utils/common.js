const fillKeyValues = (text, arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (text === arr[i].label) {
      return arr[i].value;
    }
  }
  return false;
};

export { fillKeyValues };
