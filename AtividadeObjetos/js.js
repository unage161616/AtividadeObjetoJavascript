/*let receita = {
 id:'2',
 titulo : 'omelete',
 porcao : 1,
 ingredientes : ["ovo" , "queijo" , "frangodesfiado"]


};
console.log(receita.ingredientes[0]);
console.log(receita.ingredientes[1]);
console.log(receita.ingredientes[2]);


var livro =  [{
  id: 1,
  titulo: 'harry potter',
  author: 'desconhecido',
  lido : true

},
{
  id:2,
  titulo: 'crepusculo',
  author: 'desconhecido',
  lido : false

}

];

for ( i=0; i<livros.length; i++) {
  console.log("livro" + livro[i]);
};



 if (livro.lido = true) {
   console.log ("o livro foi lido")
 }

else {

  console.log ("livro ainda não foi lido")
};

*/


/*3 */
fetch ('https://reqres.in/api/users',{
  method: 'POST',
  body:{
     name: 'user 1'

  }


}).then (res => {

  return res.json ();
})

.then (data=>console.log(data))
.catch (error=>console.log("error"))

/*4*/
 
fetch ('https://dog.ceo/api/breeds/image/random')
  .then(function (response){
    return response.json (); 
  })
    .then (function (data){
        console.log(data);
    })

 /*7 index.html*/
/*8 , 9 2index.html*/
