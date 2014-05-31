module.exports = function(app) {

    app.get('/', function(req, res, next) {
        res.render('index.jade', {
            'nav': 'home'
        });
    });

    app.get('/case1', function(req, res, next) {
        res.render('case1.jade', {
            'nav': 'home'
        });
    });

    app.get('/case2', function(req, res, next) {
        res.render('case2.jade', {
            'nav': 'home'
        });
    });
}