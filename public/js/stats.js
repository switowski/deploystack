//- Google Analytics
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};
ga('create', 'UA-85666429-1', 'auto');
// Some plugins from the autotrack library
ga('require', 'outboundLinkTracker');
ga('require', 'urlChangeTracker');
ga('require', 'maxScrollTracker');
ga('require', 'cleanUrlTracker');

ga('set', 'transport', 'beacon');
ga('send', 'pageview');

//- Heap Analytics - because it's easier to use than Google
window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
heap.load("2779816653");