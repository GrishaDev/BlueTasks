  
const passport = require("passport");
const {
    Strategy
} = require("passport-shraga");


let users = [];

passport.serializeUser((user, cb) => {
    cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
    const user = users.filter(user => user.id === id).length > 0 ? users.filter(user => user.id === id)[0] : {};
    cb(null, user);
});


const configurePassport = () => {
    passport.use(new Strategy({}, (profile, done) => {
        console.log("my profile " + profile);
        console.log(profile);
        // let length = users.filter(user => user.id === id).length;
        // if (length === 0)
        users.push(profile);
        console.log("LENGTH IS  "+users.length);
        done(null, profile);
    }))
}
module.exports = configurePassport