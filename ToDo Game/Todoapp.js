const h1=document.querySelector("h1");
const input=document.querySelector("input");
const ul=document.querySelector("ul");
const btn=document.querySelector("button");
btn.addEventListener("click",function(){
   console.log("button is clicked.!");
   let list=document.createElement("li");
   list.innerText=input.value;
   ul.appendChild(list);
   input.value="";
   const dslbtn=document.createElement("button");
   dslbtn.innerText="delete";
   dslbtn.classList.add("delete-btn");
   list.appendChild(dslbtn);

});
ul.addEventListener( "click",function(event){
    if(event.target.nodeName=="BUTTON"){
      let parent=event.target.parentElement;
      parent.remove();
    }
})

