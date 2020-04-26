module.exports = mongoose => {
    const secretescapes = mongoose.model(
        "secretescapes",
        mongoose.Schema(
            {
                section: String,
                destination: String,
                price: String,
                day: Number,
                title: Number,
                published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return secretescapes;
  };