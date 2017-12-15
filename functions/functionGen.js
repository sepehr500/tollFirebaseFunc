
const functions = require('firebase-functions');
const admin = require('firebase-admin');

const genFunc = (proute) => {

return functions.database.ref(proute + '/tolls/{dateTime}').onCreate((event) => {
  
    var val = event.data.val();
    console.log(val);
    var price = val.price;
    if (!price) {
      return null
    }
    var route = proute + '/meta'
    console.log(admin.apps.length)
    // var db =  admin.apps.length === 0 ?  : admin.app();
    var meta = admin.database().ref().child(route)
    meta.once('value').then( (s) =>{
      console.log("HELLLOO")
      console.log(s.val())
      if (s.val() === null) {
            console.log("HIT")
            return meta.set({
                "avg": price,
                "count": 1
            })
        }
        else{
            var newTotal = s.val().count + 1;
            var oldTotal = s.val().avg * s.val().count;
            return meta.set({
                "avg": (price + oldTotal) / newTotal,
                "count": newTotal
            })
        }
    })
    return null
  });


}

exports.genFunc = genFunc;