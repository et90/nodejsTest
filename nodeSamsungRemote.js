const SamsRemotr = require('samsung-remote');
const remote = new SamsRemotr({
    ip:'192.168.0.73'
})

remote.isAlive((err) => {
    if(err){
        //throw new Error('TV is offline');
        console.log('*error*');
       

    }
    else{
        console.log('TV is ALIVE');
        let i = 30;
        while (i>0) {
            i-=1;
           
            console.log(`VOLE up ${i} `);
           }
           /* 
           remote.send('KEY_VOLDOWN', (err) => {
                if (err) {
                    console.log('not up wolume');
                } else {
                    console.log(`VOLE up ${i} `);
                }
            });
            */
           
        }

    
});