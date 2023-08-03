var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition();


function speak(){
    var synth = window.speechSynthesis
    Webcam.attach(camera)
    speakData = "selfie em 5 segundos"
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis)
    setTimeout(function(){
        ImgId = "selfie1"
        takeSelfie()
        speakData = "selfie em 10 segundos"
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis)
    },5000)
    setTimeout(function(){
        ImgId = "selfie2"
        takeSelfie()
        speakData = "selfie em 15 segundos"
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis)
    },10000)
    setTimeout(function(){
        ImgId = "selfie3"
        takeSelfie()
    },15000)
}
    camera = document.getElementById("camera"); 
    Webcam.set(
        {   width:500, 
            height:400, 
            image_format : 'jpeg', 
            jpeg_quality:90 
        }
    );
function takeSelfie(){
    console.log(ImgId)

    webcam.snap(function(data_uri){
        if(imgId == "selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1 src="'+data_uri+'"/>'
        }
        if(imgId == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2 src="'+data_uri+'"/>'
        }
        if(imgId == "selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3 src="'+data_uri+'"/>'
        }
    })
}