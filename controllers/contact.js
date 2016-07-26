/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('contact', {
    title: 'Contact'
  });
};
