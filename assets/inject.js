let dbAds=[
  {
    "target-selector":[
      ".container",
      "#container",
      ".content",
      ".ns-uey29-l-bannerB"
    ],
    "position":"out-top", //out-top, out-bottom, in-top, in-bottom
    "data" :`
    `,
    "style":`
      width: 90%;
      margin: auto;
      margin-bottom: 10px;
      margin-top: 10px;
    `
  }
];

dbAds.forEach(function(a){
  let createElDom=document.createElement("div");
  createElDom.setAttribute("style",a["style"]);
  createElDom.innerHTML=a["data"];
  let dataScript=[];
  createElDom.querySelectorAll("script").forEach(function(b){
    let createElCostom=document.createElement("script");
    createElCostom.innerHTML=b.innerHTML;
    dataScript.push(createElCostom);
    b.remove();
  });
  a["target-selector"].forEach(function(b){
    let targetEl=document.querySelector(b);
    if(targetEl){
      if(a["position"]=="out-bottom"){
        targetEl.parentNode.insertBefore(createElDom,targetEl.nextSibling);
      }else if(a["position"]=="out-top"){
        targetEl.parentNode.insertBefore(createElDom,targetEl.nextSibling);
        createElDom.after(targetEl);
      }else if(a["position"]=="in-top"){

      }else if(a["position"]=="in-top"){
        
      };
      dataScript.forEach(function(b){
        createElDom.append(b); 
      });
    }else{
      console.log("target "+a["target-selector"]+" tidak ditemukan"); 
    };
  });
});


let elImg=document.querySelectorAll("img");
elImg.forEach(function(a){
  a.setAttribute("style","max-width:100%");
  let classImg=a.getAttribute("class");
  let getSrcSet=a.getAttribute("srcset");
  if(classImg==null==false){
    a.classList.remove("lazyload");
  };
  if(getSrcSet==null==false){
    getSrcSet=getSrcSet.split(",");
    if(getSrcSet.length>1){
      a.setAttribute("src",getSrcSet);
    };
  };
});

let dataLazy=document.querySelectorAll(".lazy-image.lazy-image-udf");
dataLazy.forEach(function(a){
  let dataHref=a.getAttribute("data-src");
  if(dataHref){
    let targetLazy=a.querySelector(".loadingPlaceholder");
    let targetDiv=a.querySelector(".lazy-image__loadingPlaceholder")
    if(targetLazy){
      targetLazy.setAttribute("src",dataHref);
      targetDiv.setAttribute("class","show")
    };
  };
});
(function(){injectScript([{"attr":[{"name":"async","value":""},{"name":"src","value":"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7827510955569116"},{"name":"crossorigin","value":"anonymous"}],"tag":"script","inner":""},{"attr":[{"name":"class","value":"adsbygoogle"},{"name":"style","value":"display:block"},{"name":"data-ad-client","value":"ca-pub-7827510955569116"},{"name":"data-ad-slot","value":"9070430766"},{"name":"data-ad-format","value":"auto"},{"name":"data-full-width-responsive","value":"true"}],"tag":"ins","inner":""},{"attr":[],"tag":"script","inner":"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();
(function(){injectScript([{"attr":[{"name":"async","value":""},{"name":"src","value":"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7827510955569116"},{"name":"crossorigin","value":"anonymous"}],"tag":"script","inner":""},{"attr":[{"name":"class","value":"adsbygoogle"},{"name":"style","value":"display:block"},{"name":"data-ad-client","value":"ca-pub-7827510955569116"},{"name":"data-ad-slot","value":"9070430766"},{"name":"data-ad-format","value":"auto"},{"name":"data-full-width-responsive","value":"true"}],"tag":"ins","inner":""},{"attr":[],"tag":"script","inner":"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n"}],{"target":"ns-uey29-l-bannerB"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();
(function(){injectScript([{"attr":[{"name":"async","value":""},{"name":"src","value":"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7827510955569116"},{"name":"crossorigin","value":"anonymous"}],"tag":"script","inner":""},{"attr":[{"name":"class","value":"adsbygoogle"},{"name":"style","value":"display:block; text-align:center;"},{"name":"data-ad-layout","value":"in-article"},{"name":"data-ad-format","value":"fluid"},{"name":"data-ad-client","value":"ca-pub-7827510955569116"},{"name":"data-ad-slot","value":"5825605736"}],"tag":"ins","inner":""},{"attr":[],"tag":"script","inner":"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();
(function(){injectScript([{"attr":[{"name":"async","value":""},{"name":"src","value":"https://www.googletagmanager.com/gtag/js?id=G-5L40WFNRPJ"}],"tag":"script","inner":""},{"attr":[],"tag":"script","inner":"\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-5L40WFNRPJ');\n"}],{"target":"head"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();
