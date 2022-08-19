const NotFound = (req, res) => {
  res.status(404).end("<p>404 - Page not found</p>");
};

module.exports = NotFound;
