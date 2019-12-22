/**
 * 通过ajax实现异步登录请求
 */

//编写一个叫Login的方法
function AjaxLogin(){
	$.ajax({
		//表示ajax请求的资源地址
		url:"./MyLogin",
		//表示ajax方法所使用的http请求方法
		type:"post",
		//接收返回的格式
//		dataType:"text",
		dataType:"json",
		//请求的参数，引入jquery库的时候，可以使用$("")方式定位元素
		data:$("#MyLoginForm").serialize(),
		//当请求成功时，执行的方法，result参数就是ajax完成请求之后，得到的返回，得到两种返回
//		//if(result11) {
//		loginMsg+="{\"msg\":\"恭喜您登录成功！\"}";
//	    }
//	    else {
//		loginMsg+="{\"msg\":\"登录失败！请检查用户名密码！\"}";
//	    }
//		response.getWriter().append(loginMsg);
		//可以将返回结果解析某个字段的key将value弹出，如果json格式的直接输出会是【object object】，表示一个json对象
		success:function(result){
//			alert(result);
//			alert(result["msg"]);
			$("#Msg")[0].innerText=result["msg"];
			//如果返回信息是恭喜您登录成功，那么跳转到user界面，否则不做任何操作
			if(result["msg"]=="恭喜您登录成功！"){
				//ajax实现重定向
				window.location.href="user.html";
			}
		},
		//当请求失败时，执行的方法，ajax得到的返回格式错误或者没有得到返回才会走到error
		error:function(result){
			document.getElementById("Msg").innerText="Ajax请求出错，请检查";
//			alert("Ajax请求出错，请检查");
		}
	});
	
}
	
function getUser(){
		var AjaxURL = "./GetUserInfo";
		$.ajax({
			dataType : "json",
			type:"post",
			url : AjaxURL,
			success:function(result){
				document.getElementById("userid").innerHTML = result["id"];
				document.getElementById("nickname").innerHTML = result["nickname"];
				document.getElementById("describe").innerHTML = result["describe"];
			},
			//接口调用出错时，执行该方法
			error : function(){
				alert("调用UserInfO接口出错，请检查");
			}

		});
	}
	
   function loginOut(){
		var AjaxURL = "./MyLoginOut";
		$.ajax({
			dataType : "json",
			type:"post",
			url : AjaxURL,
			success:function(result){
				alert(result["msg"]);
				window.location.href="index.html";
			},
			//接口调用出错时，执行该方法
			error : function(){
				alert("调用loginOut接口出错，请检查");
			}

		});
	}
	