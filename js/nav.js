/* Webopoly Wiki – menu burger du header (à inclure sur chaque page) */
(function(){
  var b=document.getElementById('burger'),n=document.getElementById('nav');
  function set(o){n.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Fermer le menu':'Ouvrir le menu')}
  b.addEventListener('click',function(){set(!n.classList.contains('open'))});
  n.addEventListener('click',function(e){if(e.target.tagName==='A')set(false)});
})();
