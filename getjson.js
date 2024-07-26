const express = require('express');
const app = express();
//const jsonParser = express.json()
app.use(express.json());


app.get('/myroute', (req, res) => {
  const myData = {
    name: 'John',
    age: 30
  };
  res.json(myData);
});
/*
app.get('/userreg', (req, res)=>{
    var langnum = req.query.langnum;
    var name = req.query.name;
    var password = req.query.password;
    var email = req.query.email;

    const myData = {
        name: 'John',
        age: 30
      };
      res.json(myData);
      var res = langnum + ' ' + name+ ' ' + password+ ' ' + email;
      console.log(res);

});
*/
app.post('/reg', (req, res)=>{
    const user = req.body;
    
    console.log(user)

   
    res.send('User added successfully'); 
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

