/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('faq', {
    title: 'FAQ'
  });
};
