console.log('1');
setTimeout(function(){ console.log('2')}, 500);
console.log('3');


const p = new Promise((resolve,reject) => {
    let sucess = true;

    if(sucess){
        return resolve('good soup');

        
    }else{
        return reject('bad soup');
    }
})


p.then( (result) => {return result}).then( resp => {return resp}).catch( err => {
    console.log(err);
})
 
    
