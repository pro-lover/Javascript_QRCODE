    const wrapper = document.querySelector(".wrapper");
    const qrInput = wrapper.querySelector(".form input");
    const generateBtn = wrapper.querySelector(".form button");
    const DownloadBtn = wrapper.querySelector(".donwload button");
    const qrImg = document.getElementById("myImg");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const width = qrImg.width;
    const height = qrImg.height;
    var imagesrc = "";

    // Real time preview card
    setInterval(function(){
        preview();
    }, 0);

    generateBtn.addEventListener("click", () => {
        console.log(".form input: "+qrInput.value)

        if(!qrInput.value){
            console.log("input empty");
            wrapper.classList.remove("active");
            return;
        }else{
            console.log("input not");

        }
  
        generateBtn.innerText = "Generating QR code...";
        console.log(qrInput.value)
        const getBase64Image = (url) => {
            const img = new Image();
            img.setAttribute('crossOrigin', 'anonymous');
            img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            imagesrc = canvas.toDataURL("image/png");
            console.log(imagesrc)
            }
            img.src = url
        }
        getBase64Image(`https://api.qrserver.com/v1/create-qr-code/?size=${width}x${height}&data=${qrInput.value}`);
        console.log(imagesrc);
        
        qrImg.addEventListener("load", () => {
            wrapper.classList.add("active");
            generateBtn.innerHTML = "Generated"
        });
    });
    ctx.font = "20px Georgia";
    ctx.fillText("Hello World!", 10, 50);
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
            imagesrc = "";
            console.log("disable");
            generateBtn.innerText = "Generate QR code";
            wrapper.classList.remove("active");
        }

    });
