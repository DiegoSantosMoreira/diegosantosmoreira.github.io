let arraydeSenha = [];
range.addEventListener("input", function(){
   
    var x = range.value;
    document.getElementById('pNumeroDigitos').innerHTML = x;
    var senha = '';
    var caracteresSenha = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789@!#$*';
    for (var i = 0 ; i < x ; i ++)
      {
         senha += caracteresSenha.charAt(Math.floor(Math.random() * caracteresSenha.length));
         
      }
         document.getElementById("p").innerHTML = senha;
         arraydeSenha.push(senha);
         //document.getElementById("ultimasSenhas").innerHTML = arraydeSenha;
    
    console.log(arraydeSenha);
    //document.getElementById('p').innerHTML = x;
    
   
})
