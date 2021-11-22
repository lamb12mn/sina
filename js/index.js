 // 换肤
 $(".dropdown-menu .dropdown-item").eq(0).click(function () {
    $("body").css("background", "linear-gradient(to right, #4da0b0, #d39d38)");
  })
  $(".dropdown-menu .dropdown-item").eq(1).click(function () {
    $("body").css("background", "linear-gradient(to right, #bdc3c7, #2c3e50)");
  })
  $(".dropdown-menu .dropdown-item").eq(2).click(function () {
    $("body").css("background", "linear-gradient(to right, #b92b27, #1565c0)");
  })
  $(".dropdown-menu .dropdown-item").eq(3).click(function () {
    $("body").css("background", "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)");
  })
  //热搜榜单
  $(".searchHot").focus(function () {
   
    $(".hideHotList").css("display", "block");
    // $(".hideHostList").show();
    var cache = {};

    function call(obj) {
      cache = obj;
      // $(".hotItem").remove();
      // console.log(cache);
      if (cache !== "") {
        for (let i = 0; i < cache.length; i++) {
          var str = `
                         <li class="hotItem">
                             <i>${cache[i].id}</i>
                             <a href="javascript:;">${cache[i].content}</a>
                            <span>${cache[i].logo}</span>
                         </li>
                         `;
          $(".hideHotList ul").append(str);
        }
      } else {
        getJson(call);
      }
    }
    // getJson(call);

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
// 登录
  $(document).click(function (e) {
    var a = $('.searchHot'); //设置空白以外的目标区域
    if (!a.is(e.target) && a.has(e.target).length === 0) {
      $(".hideHotList").css("display", "none")
    }
  });
  
  
 //隐藏搜索栏
 if($(".navbar-toggler").css("display")==="block"){
  $(".searchForm").hide();
}else{
  $(".searchForm").show();
}
//退出登录
$("#exit").click(function () {  
  $('.changeTab').css("display","block");
    $('.changeTab1').css("display","none");  
})
if($('.changeTab').css("display")==="block" && $('.changeTab1').css("display")==="none"){
  $("#exit").hide();
  $('input[name="phone"]').val().text(" ");
  $('input[name="pass"]').val().text(" ");
  console.log(1);
}else{
  $("#exit").show();
  console.log(2);
}
// 注册
//设置一个空对象存储值
  var current = {
    phone: "",
    pass: ""
  }
  //注册信息本地存储
  var localPhone = localStorage.getItem("phone");
  var localPass = localStorage.getItem("pass");
  $('input[name="phone"]').blur(function (e) {
    current.phone = $(this).val();
    // console.log(current.phone);
  })

  $('input[name="pass"]').blur(function (e) {
    current.pass = $(this).val();
    // console.log(current.pass);
  })



// 如果本地存储有的话，就显示登录状态，否则显示未登录状态
  if(typeof getCookie("phone")=="string" &&typeof getCookie("pass")=="string"){
    $('.changeTab').css("display","none");
    $('.changeTab1').css("display","block");
    // $("#exit").hide();
    // console.log(1);
  }
  if(typeof getCookie("phone")=="object" &&typeof getCookie("pass")=="object"){
  
    $('.changeTab').css("display","block");
    $('.changeTab1').css("display","none");
    // $("#exit").show();
    // console.log(2);
  }

  //判断账号本地存储信息是否一致
  $("#loginto").click(function () {
    if (current.phone === localPhone && current.pass === localPass) {
      $('.changeTab').css("display","none");
      $('.changeTab1').css("display","block");
    } else {
      alert("账号或密码错误");
    }
  })
  $('input[type="checkbox"]').click(function () {
    if ($(this).is(':checked')) {
        setCookie("phone",current.phone, 2);
        setCookie("pass",current.pass, 2);
    }
  })

  //加载文章数据
  window.onload=function(){

    // console.log(1);
    // 加载文章页面内容区域内容
    function loadData(type, page) {
      // console.log(1);
        // var len = articleData[type][page - 1]['list'].length;
        // console.log();
        for (let i = 0; i < articleData[type][page - 1]['list'].length; i++) {
            let $json = articleData[type][page - 1]['list'][i];
            //   console.log($json['image']);
            let $str = `
          <div class="card mb-4 cm">
          <div class="row no-gutters">
            <div class="col-md-3">
              <img class="imgb" src="${$json['image']}" alt="...">
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <h5 class="card-title">${$json['title']}</h5>
                <p class="card-text">
                ${$json['describe']}
                </p>
                <p class="card-text c-t-bottom">
                  <small class="text-muted t-m-aut"><img src="${$json['autor']}" alt=""></small>
                  <small class="text-muted"></small>
                  <small class="text-muted t-m-uname">${$json['artist']}</small>
                  <small class="text-muted t-m-day">8月7日</small>
                  <small class="text-muted t-m-time">19:30</small>
                  <small class="text-muted t-m-Icon "><i class="iconfont icon-dianzan"></i>${$json['praise']}</small>
                  <small class="text-muted t-m-Icon"><i class="iconfont icon-pinglun"></i>${$json['comments']}</small>
                  <small class="text-muted t-m-Icon"><i class="iconfont icon-fenxiang1"></i>${$json['reading']}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
          `;
            $(".c-l-card1").append($str);
    
        }
    
    }
    loadData('new', 1);
    // 更新加载数据
    update("new", 2);
    function update(type, a) {
        
        $(window).scroll(function () {
          var footerOffsetTop=$(".footer").offset().top;
            // console.log($(".c-l-card1 .cm"));
            var cardoffsetTop = $(".c-l-card1 .card").last().offset().top;
            // console.log("offsetTop",offsetTop);
            // var scrollTop = $(this).scrollTop()
            var scrollHeight = $(document).height();
            var windowHeight = $(this).height();
            // console.log(scrollHeight-footerOffsetTop);
            // console.log("scrollHeight",scrollHeight);
            // console.log("windowHeight",windowHeight);
            // console.log("offsetTop + windowHeight",offsetTop + windowHeight);
            // if (scrollTop == 0) {
                // console.log(3);
                // prompt("到达顶部")
            // }
            if (Math.floor(cardoffsetTop + windowHeight) == scrollHeight||Math.ceil(cardoffsetTop + windowHeight) ==scrollHeight) {
                // console.log(2);
                if(a<articleData[type].length+1){
                    // console.log("开头", a);
                        var warn = `
                        <div class="alert alert-warning loading" role="alert">
                            正在加载数据，请稍后，不要着急，正在请求！
                        </div>
                        `;
                    $(".c-l-card1").append(warn);
                }
                      // 加载一个数据之后，隐藏提示
                    setTimeout(function () {
                        loadData(type, a);
                        a++;
                        // $(".loading").css("visibility","hidden");
                        $(".loading").css("display","none");
                    }, 1000)
                    // console.log(a);
                    // 加载所有数据之后，弹出提示
                    if(a===articleData[type].length){
                        setTimeout(function () {
                            var warn = `
                            <div class="alert alert-warning loading" role="alert">
                                数据加载完毕，改天再瞅瞅！
                            </div>
                            `;
                        $(".c-l-card1").append(warn);
                        }, 1000)
                    }
            }
        })
    }
    
    //   监听滚动条加载数据结束
    }
