module.exports = (req, res, next) => {
  if (req.url === '/favicon.ico') {
    return res.send('');
  }
  next();
}