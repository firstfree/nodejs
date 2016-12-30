var local = function() {
    console.log('Local Module');
};
local.number = 3000;

exports = module.exports = local;