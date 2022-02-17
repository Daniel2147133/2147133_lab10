const {readFileSync}=require('fs');
// stringfy parse
var load=()=>JSON.parse(readFileSync('emp.json'))
module.exports={load};