  module.exports = mongoose => {
  const Secretescapes = mongoose.model(
    "secretescapes",
    mongoose.Schema(
      {
        section: String,
        destination: String,
        price: String,
        day: Number,
        published: Boolean
      },
      { timestamps: true }
    )
  );

  return Secretescapes;
};