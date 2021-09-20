const express = require('express');
const router = express.Router();
const url = require('url');

const candidates = [
    {
        "id": "1",
        "skills": ['Photoshop', 'Golang', 'Python', 'Express']
    }, {
        "id": "2",
        "skills": ['Python', 'Photoshop']
    }, {
        "id": "3",
        "skills": ['Javascript', ' NodeJS']
    }];
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/candidates/search', async (req, res, next) => {

    let qs = url.parse(req.url, true)

    if (qs.query[Object.keys(qs.query)].length === 0) return res.status(404).json({'Error': 'Missing parameters'});

    const skills = qs.query[Object.keys(qs.query)].split(',');

    let candidate = await get_candidate(skills, candidates)

    return res.status(200).json(candidate[0]);


});

const get_candidate = (skillSearch, users) => {
    var res = users.filter(obj => {
        return skillSearch.some(r => obj.skills.indexOf(r) >= 0);
    });
    return res
}

module.exports = router;
