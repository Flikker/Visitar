function downloadFile(serverurl, localurl, itemname, itemaddress) {


var fileTransfer = new FileTransfer();

    var uri = encodeURI(serverurl);
    var fileURL = 'cdvfile://localhost/persistent/' + localurl;
    var itemnamey = itemname;
    var itemaddressy = itemaddress;
   
    var statusDom;

statusDom = document.querySelector('#status');

fileTransfer.onprogress = function(progressEvent) {
            
            if (progressEvent.lengthComputable) {
                document.getElementById("ft-prog").style.display = "block";
        var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
    statusDom.innerHTML = perc + "% downloaded...<br>PLEASE DO NOT NAVIGATE OFF THIS PAGE";
    document.getElementById("ft-prog").value = perc; window.plugins.insomnia.keepAwake(); 
                
           
            } else {
                    if(statusDom.innerHTML == "") {
                    statusDom.innerHTML = "Downloading <br>PLEASE DO NOT NAVIGATE OFF THIS PAGE"; window.plugins.insomnia.keepAwake(); 
            } else {
                    statusDom.innerHTML += "."; window.plugins.insomnia.keepAwake(); 
            }
        }
    };
     
     
    
     

    
     var progressCallback = function() {
         statusDom.innerHTML = "Installing";
     };
     
     
function allDone(removey) {
    
        document.getElementById("ft-prog").style.display = "none"; window.plugins.insomnia.allowSleepAgain(); 
        navigator.notification.alert(itemname + " has downloaded. Go to the Home page to see your downloaded tours", showDB(), 'Download successful', 'Okay');  showDB();
}
     
     
     
    fileTransfer.download(
        uri,
        fileURL,
        
        function(entry) {
          
            
            var d = new Date();
            var n = d.getSeconds();
            var newLocy = entry.toURL() + "a" + n;
            var removey = entry;
            
            zip.unzip(entry.toURL(), newLocy, function(){
                                           statusDom.innerHTML = ""; removethezip(removey); testyi(newLocy); allDone();
                                           }, progressCallback());
            
function testyi(newLocy){
    var thistest = 'cdvfile://localhost/persistent/';
window.resolveLocalFileSystemURL(thistest, function(entry) {
    var hopeitwork = entry.toURL();
    alert(hopeitwork);
   
});
}
            
            
// remove the file
function removethezip(removey) {
             function success(removey) {
  alert(entry.toURL + " has been removed");
                
}

function fail(error) {
    alert('Error removing zipped file: ' + error.code);
}
removey.remove(success, fail);
            
}
            
            // put the data for the tour into the local database - call persistData with 5 arguments - to load pano; to show pic; to display nae; to display address; to allow deletion(newLocy gets foud with resolve local file system and the resulting object gets removerecursively(ie folder and all contents) method used on it
            persistData(newLocy  + '/pano1.html', newLocy  + '/mainpic.jpg', itemnamey, itemaddressy, newLocy); 
        },
        
        
        alert("hope it works and " + hopeitwork);
        function(error) {
            
        },
        false,
        {
            headers: {
                "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            }
        }
    );
    
    
   

};













