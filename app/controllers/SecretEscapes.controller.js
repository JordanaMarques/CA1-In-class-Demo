exports.create = (req, res) => {
    
    if (!req.body.title) {
        res.status(400).send({ message: "Content cannot be empty." });
        return;
    }

    
    const secretescapes = new Secretescapes({
        section: req.body.section,
        destination: req.body.destination,
        price: req.body.price,
        day: req.body.day,
        published: req.body.published ? req.body.published : false
    });

    
    secretescapes
        .save(secretescapes)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "An error has occurred while inserting the book into the list."
            });
        });
};


exports.findAll = (req, res) => {
    const destination = req.query.title;
    let condition = destination ? { destination: { $regex: new RegExp(destination), $options: "i" } } : {};

    Secretescapes.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error has occured while retrieving tutorials."
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Secretescapes.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found gateaways with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving gateaways with ref. id= " + id});
            });
};


exports.update = (req, res) => {
    const id = req.params.id;

    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    Secretescapes.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
       .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update destination with id=${id}. Maybe gateaways could not be found.`
            });
          } else res.send({ message: "gateaways was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating gateaways destination with id=" + id
            });
        });
  
};


exports.delete = (req, res) => {
    const id = req.params.id;

    Secretescapes.findByIdAndRemove(id)
        .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot delete Gateaways item with id=${id}. Maybe Gateaways item could not be found!`
            });
        } else {
            res.send({
                message: "Gateaways destination was deleted successfully!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Gateaways destination with id=" + id
        });
    });

};


exports.deleteAll = (req, res) => {
    Secretescapes.deleteMany({})
    .then(data => {
    res.send({
        message: `${data.deletedCount} Gateaways were successfully deleted!`
    });
})
.catch(err => {
    res.status(500).send({
        message:
            err.message || "Some error occurred while removing all tre. Please try again."
  });
});
};