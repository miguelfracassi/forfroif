const K='agendamento';
function ler(){try{return JSON.parse(localStorage.getItem(K))||{}}catch(e){return {}}}
function salvar(o){try{localStorage.setItem(K,JSON.stringify(Object.assign(ler(),o)))}catch(e){}}
function exigir(campo,destino){const d=ler();if(!d[campo]){location.replace(destino)}return d}
function quem(){const d=ler();const e=document.getElementById('usr');if(e)e.textContent=d.usuario||''}
