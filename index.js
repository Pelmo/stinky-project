const download = require('node-image-downloader')
var pages = [];
var panel = [];

       //request
    //0001
    for (var i = 1; i <= 9; i++) {
        panel.push(i);
    }
            for (let i = 0; i < panel.length; i++) { 
                pages.push({uri: `https://avasdemon.com/pages/000${panel[i]}.png`})
            }  
    //0010
    for (var i = 9; i <= 99; i++) {
        panel.push(i);
    }
            for (let i = 10; i < panel.length; i++) { 
                pages.push({uri: `https://avasdemon.com/pages/00${panel[i]}.png`})
            }  
    //0100
    for (var i = 100; i <= 999; i++) {
        panel.push(i);
    }
            for (let i = 100; i < panel.length; i++) {
                pages.push({uri: `https://avasdemon.com/pages/0${panel[i]}.png`})
            }  
    //1000
    for (var i = 1000; i <= 2612; i++) {
        panel.push(i);
    }
            for (let i = 1000; i < panel.length; i++) {
                pages.push({uri: `https://avasdemon.com/pages/${panel[i]}.png`})
            }  

            //download 

     download({
                imgs: pages
                 ,
                 dest:'./downloads' //downloads destination folder
            })

            //output

          .then((info) => {
                console.log("download finished", info)
                process.exit(1)
            })
            .catch((error, response, html) => {
                    console.log('download failed')
                    console.log(error)
                })