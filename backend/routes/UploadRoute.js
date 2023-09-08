const {Router} = require("express");

const router = Router();

router.post("/v1/file", (req, res) => {
    res.send("post request")
});

module.exports = router;