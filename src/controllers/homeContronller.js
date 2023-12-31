const getCart = (req, res) => {
  //call ipa
  res.json("md1");
};
const getProduct = (req, res) => {
  res.json("md2");
};
const getId = (req, res) => {
  res.json("md3");
};

module.exports = { getCart, getProduct, getId };
