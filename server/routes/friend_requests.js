const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 // This section will help you get a single record by id
recordRoutes.route("/friend_requests/all").get(function (req, res) {
    let db_connect = dbo.getDb("Cupid_db");
    db_connect
      .collection("Friend_requests")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   }
);
// This section will help you create a new record.
recordRoutes.route("/post/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
//    name: req.body.name,
//    position: req.body.position,
//    level: req.body.level,
 };
 db_connect.collection("Friend_requests").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you delete a record
recordRoutes.route("/friend_requests_delete/").delete((req, response) => {
 let db_connect = dbo.getDb();
 db_connect.collection("Friend_requests").deleteOne({sender_id: req.body.sender_id}, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = recordRoutes;