const express = require('express');
const router = express.Router();

const Data = require('../models/Data');


// ROUTE 1: Get All the Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
router.get('/income', async (req, res) => {
    try {
        const income = await Data.find({
            "income": { $lt: "$5" }, $or: [{ "car": "BMW" },
            { "car": "Mercedes-Benz" }]
        });
        res.json(income)
        console.log(income)
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
})

// ROUTE 2: Get All the Male Users which have phone price greater than 10,000..
router.get('/phoneprice', async (req, res) => {
    try {
        const user = await Data.find({ "gender": "Male", "$expr": { "$gt": [{ "$toInt": "$phone_price" }, 10000] } });
        res.json(user)
        console.log(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
})

// ROUTE 3: Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
router.get('/lastname', async (req, res) => {
    try {
        const user = await Data.find(
            {

                last_name: { $regex: "^M" },
                "$expr": {
                    $gt: [
                        {
                            "$strLenCP": "$quote",

                        },
                        15
                    ],

                },

                "$expr": {

                    $indexOfCP: ["$email", "$last_name"]

                },
            }
        );

        res.json(user)
        console.log(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
})

// ROUTE 4: Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit..
router.get('/car', async (req, res) => {
    try {
        const user = await Data.find(
            {
                "email": { $not: { $regex: "[0-9]" } }, $or: [{ "car": "BMW" },
                { "car": "Mercedes-Benz" }, { "car": "Audi" }]
            });
        res.json(user)
        console.log(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
})


// ROUTE 5: Show the data of top 10 cities which have the highest number of users and their average income
router.get('/city', async (req, res) => {
    try {
        const user = await Data.aggregate(
            [
                {
                    $group: {
                        _id: {
                            "city": "$city",
                            "income_average": {
                                $cond: {
                                    if: { $gt: ["$count", 1] },
                                    then: { $avg: "$income" },
                                    else: "$income"
                                }
                            }
                        }, count: { $sum: 1 }
                    }
                },
                { $limit: 10 }
            ]
        );
        res.json(user)
        console.log(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
})
// income_average: { $avg: "$income" }

module.exports = router;
