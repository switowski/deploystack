/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Best tools for launching your website - Deploystack'
  });
};
