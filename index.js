const express = require("express");
const app = express();

const user = [
    {
        name: "john",
        kidneys: [{
            healthy: "false"

        }]

    }
];

app.use(express.json());

app.get("/", function (req, res) {
    const johnKidney = user[0].kidneys;
    const numberOfkidny = johnKidney.length;
    let number_of_healthy_kidneys = 0;
    for (let i = 0; i < johnKidney.length; i++) {
        if (johnKidney[i].healthy) {
            number_of_healthy_kidneys = number_of_healthy_kidneys + 1;
        }
    }
    const number_of_unheathy_kidney = numberOfkidny - number_of_healthy_kidneys;
    numberOfkidny;
    res.json({
        numberOfkidny,
        number_of_healthy_kidneys,
        number_of_unheathy_kidney

    });
})

// any time someone do post request let add a unhealthy  kidney 
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })

})


// This simply means we have to change the entire kidney to unhealthy 
app.put("/", function (req, res) {
    for (i = 0; i < user[0].kidneys.length; i++) {
        user[0].kidneys[i].healthy = false;

    }
    res.json({
        msg: " All Kidneys set to be unhealthy"
    })
})


//Removing all the healthy kindeys  
app.delete("/", function (req, res) {
    // Do this only if there is atleast one unhealthy kidney  
    newKidneys = [];
    for (i = 0; i < user[0].kidneys.length; i++) {
        if (user[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })

        }
    }
    user[0].kidneys = newKidneys;

    res.json({
        msg: "Done"
    })


})

// function LeastOneunhealthyKidney  })


app.listen(3001);
