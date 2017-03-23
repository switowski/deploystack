/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('contact', {
    title: 'Best tools for launching your website - Deploystack'
  });
};
