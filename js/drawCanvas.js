// 加载字体
var loadFonts= async ()  => {
  const font1 = new FontFace(
    "cxmedium",
    "url(" + "https://www.dalalapic.com/h5/adang/img/%E6%B1%87%E6%96%87%E6%98%8E%E6%9C%9D%E4%BD%93_1_.ttf" + ")"
  );
    await font1.load();
  document.fonts.add(font1);
  console.log('font ok')
}

var mycanvas = document.getElementById('shareCanvas')
// mycanvas.width = 619; //定义canvas 宽度 * 缩放
// mycanvas.height = 1100; //定义canvas高度 *缩放
var ctx = mycanvas.getContext('2d')
function drawCanvas(url){
   $('#gif_loading').css({'display':'flex'})

  // 异步加载字体
  loadFonts().then(()=>{
        let num = 12000+'';
        var img = new Image();
        img.setAttribute("crossOrigin",'Anonymous')
        ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
        var str = "0001"
        if(num&&num.length<4){
          str = '0000'.slice(0,4-num.length) + num
        }else{
          str = num
        }
        var posx = 145
        posx = 205 - 21*str.length/2
        img.onload = function(){
          // 将图片画到canvas上面上去！
          ctx.drawImage(img,0,0);
          //当前第几个人
          ctx.font = '42px "cxmedium"'
          ctx.fillStyle = '#e60012'
          ctx.fillText(str, posx, 852);
          $('#gif_loading').css({'display':'none'})
        $('#shareImg').attr({'src':mycanvas.toDataURL("image/jpeg", 1.0)})
        }
        img.src ='./img/share/'+url;
     
  })
}