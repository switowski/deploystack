/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('faq', {
    title: 'Best tools for launching your website - Deploystack'
  });
};
