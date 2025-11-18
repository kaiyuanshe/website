export default function CosconEvent() {
  return (
    <div 
      style={{ width: '100%', height: '100vh' }}
      dangerouslySetInnerHTML={{
        __html: `
<html>
<head>
  <title>2021 第六届中国开源年会（COSCon'21）</title>
  <meta name="description" content="2021 第六届中国开源年会（COSCon'21）">
  <meta name="keywords" content="2021 第六届中国开源年会（COSCon'21） 开源,开源年会,OpenSource">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Cache" content="no-cache">
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
  <meta name="viewport"
        content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  <meta http-equiv="Expires" content="-1"/>
  <script src="https://file.bagevent.com/resources/js/jquery.min.js"></script>
  <script type="text/javascript" src="//res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>

  <script>
      function storageSurvey_local(data) {
          //将后台返回的数据先进行base64解码，再转换成json格式。
          //console.log(data);
      }

      $(document).ready(function () {
          getWxJsapiSignature();
      });
      var serach = window.location.search;
      var lineLink = window.location.href;
      var share_data = {
          title: \`2021 第六届中国开源年会（COSCon'21）\`, // 分享标题
          desc: \`2021 第六届中国开源年会（COSCon'21）\`, // 分享描述
          link: lineLink, // 分享链接
          imgUrl: "https://www.bagevent.com/resource/20210726/1548406511670936.JPG"
      };

      var jsApiList = ['checkJsApi',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo'];

      //使用jsonp跨域请求微信签名信息
      function getWxJsapiSignature() {
          $.ajax({
              type: "GET",
              url: 'https://www.bagevent.com/getWxJsapiSignatureToJsonp.do?jsonpCallback=storageSurvey_local&' +
                  'url=' + encodeURIComponent(window.location.href) + '&eventId=7685233' ,
              dataType: 'jsonp',
              processData: false,
              jsonpCallback: 'storageSurvey_local',
              sync: false,
              success: function (resp) {
                  console.info(resp);
                  var resultSet = eval(resp);
                  if (resultSet.retStatus == 200) {
                      var signature = resultSet.resultObject.signature;
                      var timestampstr = resultSet.resultObject.timestamp;
                      var noncestr = resultSet.resultObject.nonceStr;
                      var appid = resultSet.resultObject.appId;
                      wx.config({
                          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                          appId: appid, // 必填，公众号的唯一标识
                          timestamp: timestampstr, // 必填，生成签名的时间戳
                          nonceStr: noncestr, // 必填，生成签名的随机串
                          signature: signature, // 必填，签名，见附录1
                          jsApiList: jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                      });
                      wx.ready(function () {
                          wx.onMenuShareTimeline(share_data);
                          wx.onMenuShareAppMessage(share_data);
                          wx.onMenuShareQQ(share_data);
                          wx.showMenuItems({
                              menuList: [
                                  "menuItem:share:appMessage",
                                  "menuItem:share:timeline",
                                  "menuItem:share:qq"
                              ]
                          });
                      })
                  } else {
                      console.error(resultSet.resultObject);
                  }
              },
              error: function (data) {
                  console.log(data)
              }
          });
      }

      function hideQRCode() {
          $("#qrCode").hide();
          $("#qrCodeShadow").hide();
      }

      window.onload = function () {
          var userAgent = window.navigator.userAgent; //包含以下属性中所有或一部分的字符串：

          var flag = false;
          //IE浏览器
          if (userAgent.indexOf('NET') != -1 && userAgent.indexOf("rv") != -1) {
              flag = true;
          }
          //Edge
          if (userAgent.indexOf('Edge') != -1) {
              flag = true;
          }
          var serach = window.location.search;
          var bagUrl = "https://www.bagevent.com/event/7685233" + serach;

          if (flag) {
              document.getElementById("iediv").setAttribute("style", "display:block");
              document.getElementById("framediv").setAttribute("src", bagUrl)
          } else {
              var body = document.createElement("body");
              body.setAttribute("style", "margin: 0;overflow: hidden;");
              body.innerHTML = "<div id='qrCode' style=\\"text-align: center;padding: 24px;width: 280px;height: 316px;position: fixed;left: 50%;margin-left: -140px;background: rgb(255, 255, 255);box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 30px 0px;z-index: 10000;border-radius: 10px;box-sizing: border-box;color: rgb(32, 32, 32);bottom: 252px;display: none\\"> \\n" +
                  "    <img id='qrImage' style=\\"margin-bottom: 16px;width: 100%; border:0;max-width: none;\\" src=\\"\\" />\\n" +
                  "    <div class=\\"text\\">长按识别二维码</div>\\n" +
                  "</div><div id='qrCodeShadow' onclick='hideQRCode()' style=\\"position:fixed; left:0; top:0; bottom:0; right:0; background:rgba(255,255,255,0.01); z-index:1000;display: none\\"></div>" +
                  "<iframe src=" + bagUrl + " ></iframe>\\n" +
                  "    <style>\\n" +
                  "        iframe{\\n" +
                  "            overflow: scroll;\\n" +
                  "            -webkit-overflow-scrolling: touch;\\n" +
                  "            min-width: 100%;\\n" +
                  "            *width:100%;\\n" +
                  "            width:1px;\\n" +
                  "            border: 0;\\n" +
                  "            height: 960px;\\n" +
                  "            height: 100vh;\\n" +
                  "        }\\n" +
                  "    </style>";
              document.body = body;
          }

          if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {

              setInterval(function () {
                  window.frames[0].postMessage('1', 'https://www.bagevent.com');
              }, 2000);

              window.addEventListener('message', function (e) {
                  if (e.origin === "https://www.bagevent.com") {
                      if (e.data != null && e.data !== "" && e.data !== undefined  && typeof e.data == "string") {
                          showQRCode(e.data);
                      }
                  }
              }, false);

              function showQRCode(imgUrl) {
                  $("#qrImage").attr("src", imgUrl);
                  $("#qrCode").show();
                  $("#qrCodeShadow").show();
              }

          }
      }

  </script>
  <script type="text/javascript" src="/eportal/uiFramework/wwimages/js/o_code_2016.js" language="JavaScript"></script>
</head>
<frameset rows="100%" id="iediv" style="display: none">
  <frame src="" id="framediv">
  <noframes>请点击下面链接: &lt;a href="https://www.bagevent.com/event/7685233"&gt;link&lt;/a&gt;</noframes>
</frameset>
</html>
        `
      }}
    />
  );
}