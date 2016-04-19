var Queue = require('firebase-queue'),
    Firebase = require('firebase');

var ref = new Firebase('https://testingqueue.firebaseio.com/queue');
var queue = new Queue(ref, function(data, progress, resolve, reject) {
    // Read and process task data
    console.log(data);

    // Do some work
    progress(50);

    // // Finish the task asynchronously is not working
    // setTimeout(function() {
    //     resolve('ok');
    // }, 5000);

    // // using sync operations work fine, but no async
    resolve();
})

   // test
        ref.child('tasks').push({ msg: 'hello World' })


// for (var index = 0; index < 10; index++) {    
//     setTimeout(inner(index), 1000 * index);
// }


// function inner(i) {
//     return function () {
//          ref.child('tasks').push({ msg: 'hello World' + i })
//     }
    
// }