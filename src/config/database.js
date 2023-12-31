const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
  } catch (error) {
    handleError(error);
  }
};

module.exports = connection;
