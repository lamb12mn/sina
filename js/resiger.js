$(".main-tab a").click(function () { 
    $(".main-tab a").removeClass("cur");
       $(this).addClass("cur");
   })
   $(".main-tab a").eq(0).click(function () { 
       $(".m-c-form1").css("display","none");
       $(".m-c-form").css("display","block");
   })
   $(".main-tab a").eq(1).click(function () { 
       $(".m-c-form").css("display","none");
       $(".m-c-form1").css("display","block");
   })
   var current = {
    phone: '',
    pass: '',
    img: './img/aut1.jpg'
};

window.onload = function () {
    localStorage.clear();
    $('input[name="phone"]').focus(function (e) {
        // console.log(1);
        $(this).css("border", "1px solid #77c09b")

    });
    $('input[name="phone"]').blur(function (e) {
        let phoneValue = $(this).val();
        $(this).val().text("");
        // console.log(phoneValue);
        //判断手机号是否为空
        if (phoneValue === '') {
            $("#span1").addClass("display-inline").addClass("iconfont").addClass("icon-gantanhao");
            $("#span1").text("手机号码不能为空！")
            $("#span1").css({
                "color": "#ffb700",
                "margin": "0 10px",
                "margin-top":"22px"
            })
        }
        //判断手机号码是否正确
        if (phoneValue != '') {
            //正则匹配
            // console.log(phoneValue);
            var off = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(phoneValue);
            // console.log(off);    
            if (off) {
                $("#span1").addClass("display-inline").addClass("iconfont").addClass("icon-gou1");
                $("#span1").text("手机号码可以使用！")
                $("#span1").css({
                    "color": "#5fcf94",
                    "margin": "0 10px",
                    "margin-top":"22px"
                })

            } else {
                $("#span1").addClass("display-inline").addClass("iconfont").addClass("icon-cuowu");
                $("#span1").text("请填写正确的手机号码！")
                $("#span1").css({
                    "color": "red",
                    "margin": "0 10px",
                    "margin-top":"22px"
                })
            }
        }
        current.phone = phoneValue;
    });
    // 发送验证码
    $("#button-addon1").click(function () {
        $("#spann").addClass('display-inline ');
        $("#spann").text(randomNum(1000, 9999));

    })

    function randomNum(minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        }
    }
    // console.log($("#span2").text());
    //判定用户输入的内容是不是和code能匹配
    // 先判定是不是空 在判定能不能匹配
    $('input[name="code"]').focus(function (e) {
        $(this).css("border", "1px solid #77c09b")

    });
    $('input[name="code"]').blur(function (e) {
        let codeValue = $(this).val();
        $(this).val().text("");
        //判断密码是否为空
        if (codeValue === '') {
            $("#span2").addClass("display-inline").addClass("iconfont").addClass("icon-gantanhao");
            $("#span2").text("验证码不能为空！")
            $("#span2").css({
                "color": "#ffb700",
                "margin": "0 10px",
                "margin-top":"22px"
            })
        }
        if (codeValue !== '') {
            if (codeValue == $("#spann").text()) {
                //判断密码是否正确
                $("#span2").addClass("display-inline").addClass("iconfont").addClass("icon-gou1");
                $("#span2").text("验证码可以使用！")
                $("#span2").css({
                    "color": "#5fcf94",
                    "margin": "0 10px",
                    "margin-top":"22px"
                })
            } else {
                $("#span2").addClass("display-inline").addClass("iconfont").addClass("icon-cuowu");
                $("#span2").text("请填写正确的验证码！")
                $("#span2").css({
                    "color": "red",
                    "margin": "0 10px",
                    "margin-top":"22px"
                })
            }

        } else {
            $("#span2").addClass("display-inline").addClass("iconfont").addClass("icon-gantanhao");
            $("#span2").text("验证码不能为空！")
            $("#span2").css({
                "color": "#ffb700",
                "margin": "0 10px",
                "margin-top":"22px"
                
            })
        }
        // current.pass = passwordValue;
    });
    // $('input[name="password"]').keyup(function (e) {
    $('input[name="password"]').focus(function (e) {
        // $(this).css("border", "1px solid #77c09b")

    });
    $('input[name="password"]').blur(function (e) {
        let passwordValue = $(this).val();
        $(this).val().text("");    
        //判断密码是否为空
        if (passwordValue === '') {
            $("#span3").addClass("display-inline").addClass("iconfont").addClass("icon-gantanhao");
            $("#span3").text("密码不能为空！")
            $("#span3").css({
                "color": "#ffb700",
                "margin": "0 10px",
                "margin-top":"22px"
            })
        } else if (passwordValue !== '') {
            //判断密码是否正确
            $("#span3").addClass("display-inline").addClass("iconfont").addClass("icon-gou1");
            $("#span3").text("密码可以使用！")
            $("#span3").css({
                "color": "#5fcf94",
                "margin": "0 10px",
                "margin-top":"22px"
            })
        } else {
            $("#span3").addClass("display-inline").addClass("iconfont").addClass("icon-cuowu");
            $("#span3").text("请填写正确的密码！")
            $("#span3").css({
                "color": "red",
                "margin": "0 10px",
                "margin-top":"22px"
            })
        }
        current.pass = passwordValue;
    });
}
$("#resigerto").click(function(){
    console.log(current);
    // setCookie("phone",current.phone, 2);
    // setCookie("pass",current.pass, 2);
    localStorage.setItem("phone",current.phone);
    localStorage.setItem("pass",current.pass);
    window.location.href="./index.html";
})
