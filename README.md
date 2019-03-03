
**Assumptions**
1. .env file created (as per .env-sample) with DATABASE_URL pointing to mongo instance (either locally or mongodb atlas)


## Steps to run
1. npm install
2. download .env file from https://drive.google.com/drive/u/0/folders/1vLkp-vXtbEGWsiX17hrsoW1zOM_kZHXV
3. add the downloaded .env file to root folder
4. DON'T checkin .env file


##  Key points

1. Uses mongoose as ORM for mongodb
2. Mongoose schema at /src/database/mongooseSchema.js


##  Most basic MongoDB commands (terminal)

* `show dbs`  --to show all dbs
* `use nepaljobsdb`  --to switch to nepaljobsdb
* `show collections`  --to show all collections/tables
* `db.applicants.find()` --to show all applicants in the collection
* `db.applicants.find({name: 'Suraj Shrestha'})` --to show applicants with title = 'Suraj Shrestha'
* `db.applicants.find({}, {title: 1})` --to show current_address field of all applicants (no criteria)
* `db.applicants.remove({})` --to remove all applicants documents
* `db.applicants.remove({name: 'Suraj Shrestha'})` --to remove all applicants with title = 'Suraj Shrestha'
* `db.applicants.update({_id:{$exists:true}}, { $set: {createdDate: '2019-01-01'}}, {multi: true})` --to update multiple applicants with createdDate = '2019-01-01'
