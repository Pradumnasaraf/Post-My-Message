const NotFound = (req, res) => {
  res.status(404).end("404 -Not found. Trying something new");
};

module.exports = NotFound;
