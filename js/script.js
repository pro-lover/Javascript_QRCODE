    const wrapper = document.querySelector(".wrapper");
    const qrInput = wrapper.querySelector(".form input");
    const generateBtn = wrapper.querySelector(".form button");
    const DownloadBtn = wrapper.querySelector(".donwload button");
    const qrImg = document.getElementById("myImg");
    const canvas = document.createElement("canvas");
    const width = qrImg.width;
    const height = qrImg.height;

    var switchimg = 0;
    var RQmessage= document.getElementById('myIn');
    if(switchimg<1)
    {
        var imagesrc = "asset/qr-code.png";
        switchimg = 2;
    }

    // Real time preview card
    setInterval(function(){
        preview();
    }, 0);
    //$("#myBt").on('click', function(){
    generateBtn.addEventListener("click", () => {
        let qrValue = RQmessage.value;
        if(!qrValue) return;
        generateBtn.innerText = "Generate QR code...";
            console.log(qrValue)
            const getBase64Image = (url) => {
            const img = new Image();
            img.setAttribute('crossOrigin', 'anonymous');
            img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            imagesrc = canvas.toDataURL("image/png");
            console.log(imagesrc)
            }
            img.src = url
        }
        getBase64Image(`https://api.qrserver.com/v1/create-qr-code/?size=${width}x${height}&data=${qrValue}`);
        console.log(imagesrc)
        qrImg.addEventListener("load", () => {
            wrapper.classList.add("active");
            generateBtn.innerHTML = "Generate QR code"
        });
    });
    
    function preview(){

        qrImg.src = imagesrc;

    }
    DownloadBtn.addEventListener("click", () => {
        
    if(window.navigator.msSaveBlob)
    {
        console.log("downloading...");
        window.navigator.msSaveBlob(canvas.msToBlob(),"canvas-image.png")
    }else{
        const a = document.createElement("a");
        var img = canvas.toDataURL();
        console.log(img);
        document.body.appendChild(a);
        a.href = img ; 
        a.download = "canvas-image.png";
        a.click();
        document.body.removeChild(a);

    }

    });

    qrInput.addEventListener("keyup", () => {
        if(!qrInput.value){
            wrapper.classList.remove("active");
        }
    });
