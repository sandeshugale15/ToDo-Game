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

let deletebtn=document.querySelectorAll(".delete-btn");
for(dslbtn of deletebtn){
dslbtn.addEventListener("click",function(){
    let parent=this.parentElement;
    console.log(parent);
     parent.remove();
});
}