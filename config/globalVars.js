module.exports = {
    db: 'mongodb://boshenyang:12345678@ds050559.mlab.com:50559/boshenyang-assignment2',
    secret: 'boshen',
    ids: {
        facebook: {
            clientID: '287727014955052',
            clientSecret: '8a28bcd6841fe8230d7daf027913a84d',
            //callbackURL: 'http://localhost:3000/facebook/callback'
            callbackURL: 'https://assignment00002.herokuapp.com/facebook/callback'
        }
    }
};