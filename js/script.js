


/*

const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".form input");
const generateBtn = wrapper.querySelector(".form button");
const DownloadBtn = wrapper.querySelector(".donwload button");
const qrImg = document.getElementById("myImg");
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.font = "50px Roboto";
ctx.fillStyle = "red";
ctx.fillText("dcode", 100,100);

var switchimg = 0;
if(switchimg<1)
{
  var imagesrc = "asset/qr-code.png";
  switchimg = 2;
}

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generate QR code...";

    console.log(imagesrc)
    const getBase64Image = (url) => {
        const img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          imagesrc = canvas.toDataURL("image/png");
          console.log(imagesrc)
          qrImg.src = imagesrc;
        }
        img.src = url
      }
      getBase64Image(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`);
      console.log("3 : "+ imagesrc)
    });
    //qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        ctx.drawImage(qrImg,10,10);
        generateBtn.innerHTML = "Generate QR code"
    });

    //const dataURI =  canvas.toDataURL("image/png");
    //console.log(dataURI);
   // console.log(qrImg.src);
    //qrImgs.src = dataURI;
    
    //var img = new Image();
    //img.crossOrigin="anonymous";
    //img.onload=function(){
     //   console.log("test");
    //    ctx.drawImage(img,10,10);
    //}
    //img.src=qrImg;
    //console.log(img.src);

   DownloadBtn.addEventListener("click", () => {

       // ctx.drawImage(qrImg, 0, 0);

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
       
    //});

});
qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});
*/