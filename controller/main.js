module.exports = function(cb) {
  setTimeout(function(){
    return cb(null, { title : 'Example' });
  },500);
};