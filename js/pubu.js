var imageData=[
    {"img":"./images/1.jpg"},
    {"img":"./images/2.jpg"},
    {"img":"./images/3.jpg"},
    {"img":"./images/4.jpg"},
    {"img":"./images/5.jpg"},
    {"img":"./images/6.jpg"},
    {"img":"./images/7.jpg"},
    {"img":"./images/8.jpg"},
    {"img":"./images/9.jpg"},
    {"img":"./images/10.jpg"},
    {"img":"./images/11.jpg"},
    {"img":"./images/12.jpg"},
    {"img":"./images/13.jpg"},
    {"img":"./images/14.jpg"},
    {"img":"./images/15.jpg"},
    {"img":"./images/16.jpg"},
    {"img":"./images/17.jpg"},
    {"img":"./images/18.jpg"}
];
function loadImg() {  
    for (let i = 0; i < imageData.length; i++) {
        var str=`
            <div class="box">
            <span>${i}</span>
                <img src="${imageData[i]["img"]}" alt="${imageData[i]["img"]}">
            </div>
    `;
        $link=$(str);
        $(".pubuContainer").append($link);
        
    }
}
loadImg()
// loadImg();
// for (let i = 0; i < imageData.length; i++) {
//     var str=`
//         <div class="box">
//         <span>${i}</span>
//             <img src="${imageData[i]["img"]}" alt="${imageData[i]["img"]}">
//         </div>
// `;
//     $link=$(str);
//     $(".pubuContainer").append($link);
    
// }
$(".pubu").click(function () {  
    $(window).scroll(function () {
        var footerHeight=$(".footer").height();
        var scrollHeight = $(document).height();
         var scrollTop = $(this).scrollTop();
         console.log(footerHeight+scrollTop+$(this).height());
        console.log(scrollHeight);
        console.log(parseInt(footerHeight+scrollTop+$(this).height()));
        if(footerHeight+scrollTop+$(this).height()>=scrollHeight&&footerHeight+scrollTop+$(this).height()<=scrollHeight+50){
            var a=0;
            if(a<5){
                    var warn = `
                    <div class="alert alert-warning loading" role="alert">
                        正在加载数据，请稍后，不要着急，正在请求！
                    </div>
                    `;
                $(".content-left-list").append(warn);
            }
             // 加载一个数据之后，隐藏提示
             setTimeout(function () {
                loadImg();
                a++;
                // $(".loading").css("visibility","hidden");
                $(".loading").css("display","none");
            }, 1000)
          
        }
    })
})



