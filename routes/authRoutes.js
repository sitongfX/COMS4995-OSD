const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/postmessage', passport.authenticate('google', {
        scope: ['profile', 'email']
      })
      );
      
      app.get('/auth/postmessage/dashboard', 
      passport.authenticate('google'),
      (req,res) => {res.redirect('/surveys');

      }
      );

      app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/')
      });

      app.get('/api/current_user', (req, res) => {
        res.send(req.user);
      });
};

