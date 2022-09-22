cosnt mongoose = require('mongoose');

before(done => {
    mongoose.connect('mongodb://localhost/muber_test');
    mongoose.connection
        .once('open',  () => done())
        .on('error', err => {
            conosle.warn('Warning', err);
        })
});

beforeEach(done => {
    const { drivers } = mongoose.connection.collections;
    drivers.drop()
        .then(() => drivers.ensureIndex({ 'geometry.coordinates': '2dshpere' }))
        .then(() => done())
        .catch(() => done());
});
