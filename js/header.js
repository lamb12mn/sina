$("#search input").focus(function () {
    $(".hideHostList ul li").remove();
    $(".hideHostList").show();
    // var cache={};

    function call(obj) {
        cache = obj;
        // console.log(cache);
        if (cache !== "") {
            for (let i = 0; i < cache.length; i++) {
                var str = `
                           <li>
                               <i>${cache[i].id}</i>
                               <span>${cache[i].content}</span>
                               <em>${cache[i].logo}</em>
                           </li>
                           `;
                $(".hideHostList ul").append(str);
            }
        } else {
            getJson(call);
        }
    }
    getJson(call);
    //处理很耗时的函数
    function getJson(call) {
        $.ajax({
            url: "search.php",
            type: "get",
            dataType: "json",
            success: function (data) {
                call(data);
            }
        });
    }
});

$(document).click(function (e) {
    var a = $('#search input'); //设置空白以外的目标区域
    var b = $(".change");
    if (!a.is(e.target) && a.has(e.target).length === 0) {
        $(".hideHostList").css("display", "none")
    }
    if (!b.is(e.target) && b.has(e.target).length === 0) {
        $(".dopDown").css("display", "none")
    }
});
$(".change").click(function () {
    $(".dopDown").css("display", "block");
})
$(".dopDown ul li").eq(0).click(function () {
    $("body").css("background", "linear-gradient(to right, #4da0b0, #d39d38)");
})
$(".dopDown ul li").eq(1).click(function () {
    $("body").css("background", "linear-gradient(to right, #bdc3c7, #2c3e50)");
})
$(".dopDown ul li").eq(2).click(function () {
    $("body").css("background", "linear-gradient(to right, #b92b27, #1565c0)");
})
$(".dopDown ul li").eq(3).click(function () {
    $("body").css("background", "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)");
})
// 头部隐藏菜单
$(window).bind("load resize", function () {
    if (document.documentElement.clientWidth <= 1025) {
        console.log(document.documentElement.clientWidth);
        $(".navBar").css("display", "none");
        $(".menu").css("display", "inline-block");
        // $(".content .span1").css("display", "none");
    } else {
        $(".navBar").css("display", "inline-block");
        $(".menu").css("display", "none")
        // $(".content .span1").css("display", "block");
        // console.log(document.documentElement.clientWidth);
    }
});
$(".menu").click(function () {
    $(".fixed-top").css("display", "block");
})