
// hami yaha database connection ko code/logic lekchhum

const {Sequelize, DataTypes} = require("sequelize")

const sequelize = new Sequelize(
"postgresql://postgres.mdxdtwmargzjipcdcdmt:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres
")

sequelize.authenticate()
.then(()=>{
  console.log("Authenticated vayo, connected vayo!!")
})
.catch((err)=>{
  console.log("Error aayo" + err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db