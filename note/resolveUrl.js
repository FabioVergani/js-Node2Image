function resolveUrl(x,a){//url,baseUrl
 function f(x,a,b){
	const e=x,n=e.ownerDocument.createElement(a);
	n.href=b;
	return e.appendChild(n);
 }
 const d=document.implementation.createHTMLDocument();
 f(d.head,'base',a);
 return f(d.body,'a',x).href;
}
