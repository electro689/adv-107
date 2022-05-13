
function startClassification(){ 
    navigator.mediaDevices.getUserMedia({ audio: true, video:false});
        classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ov8pZEgMY/model.json",modelReady); 
    }



function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error,results) {
   if (error) {
       console.error(error); 
   } else {
       console.log(results);
       random_number_r=Math.floor(Math.random()*255)+1;
       random_number_g=Math.floor(Math.random()*255)+1;
       random_number_b=Math.floor(Math.random()*255)+1;

       document.getElementById("result").innerHTML="I can hear - "+results[0].label;
       
       document.getElementById("result").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
       

        img1=document.getElementById("download.png");
        img2=document.getElementById("download (2).png");
        img3=document.getElementById("download (1).png");
        

        if (results[0].label == "barking") { img.src = 'download.png'; 

    } else if (results[0].label == "roaring") { img.src = 'download (2).png'; 

} else if (results[0].label == "meowing"){ img.src = 'download (1).png'; 

}
   
}
}