let AppModel = require('../model/app');

let _handleError = function(err){
    if (err) return console.log(err);
};

module.exports = (app) => {
    app.get('/load/tags', function(req, res, next) {
        AppModel
            .findOne()
            .then(doc => { res.json(doc.tags) });
    });
    app.post('/api/load/images', function(req, res, next) {
        AppModel
            .findOne()
            .then(doc => {
                if (doc === null) {
                    let newDoc = new AppModel();
                    newDoc.tags.push(req.body.tag);
                    newDoc.save(_handleError);
                }else if (!doc.tags.includes(req.body.tag)) {
                        doc.tags.push(req.body.tag);
                        doc.save(_handleError);
                    }
            });
    });
};
