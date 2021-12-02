const express = require('express');

const User = require ('../models/User');
const Seguro = require ('../models/Seguro');
const Cobertura = require ('../models/cobertura');


const router = express.Router();

//const Secure = '';
//const Coverage = '';

router.post('/register', async(req, res)=> {
    try{
        const user = await  User.create(req.body);
        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error:  err});
    }
});
router.post('/registerseguro', async(req, res)=> {
    try{
        const seguro = await  Seguro.create(req.body);
        return res.send({ seguro });
    } catch (err) {
        return res.status(400).send({ error:  err});
    }
});
router.post('/registercobertura', async(req, res)=> {
    try{
        const cobertura = await  Cobertura.create(req.body);
        return res.send({ cobertura });
    } catch (err) {
        return res.status(400).send({ error:  err});
    }
});


router.get('/listSeguro', async(req, res)=> {

        const seguro = await Seguro.find()
        .then(
            seguro => {
                return res.send(seguro)
            }
        )
        .catch(err => res.status(400).send({ error:  err}))
   
});

router.get('/listcobertura', async(req, res)=> {

        const cobertura = await Cobertura.find()
        .then(
            cobertura => {
                return res.send(cobertura)
            }
        )
        .catch(err => res.status(400).send({ error:  err}))
   
});
router.get('/listuser', async(req, res)=> {

    const user = await User.find()
    .then(
        user => {
            return res.send(user)
        }
    )
    .catch(err => res.status(400).send({ error:  err}))

});




router.post('/cotacao', (req, res) => {
    try{
        const { capital, premio } = req.body;

        let cotacao = capital * premio;

        res.send({ cotacao: cotacao });

    }catch( err ){
        return res.status(400).send({ error:  err});
    }
});



module.exports = app => app.use('/auth', router);