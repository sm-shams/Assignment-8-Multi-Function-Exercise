const addToDb = (props) => {
  //   console.log("addes");
  const quantity = localStorage.getItem(props);
  if (quantity) {
    const newQuantity = parseInt(quantity) + 1;
    localStorage.setItem(props, newQuantity);
  } else {
    localStorage.setItem(props, 1);
  }
};

export { addToDb };
