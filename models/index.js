// Retrieve all notes
app.get('/thought', (req, res) => {
    db.Note.find({})
      .then(dbNote => {
        res.json(dbNote);
      })
      .catch(err => {
        res.json(err);
      });
  });

// Retrieve all users
app.get('/user', (req, res) => {
    db.User.find({})
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // Create a new note and associate it with user
app.post('/submit', ({ body }, res) => {
    db.Note.create(body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true })
      )
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });