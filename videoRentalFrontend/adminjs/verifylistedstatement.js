
(fetchuploadproof=async()=>{
  document.querySelector("main").innerHTML="<p style='color:green;text-align:center;background-color:#ddd;height:30px; padding:55px'>loading payments please wait ...</p>"
  try{
    const response=await fetch("/api/payment/proof/list")
   const result=await response.json()
   if(result.error){
     alert(result.errMessage)
      document.querySelector("main").innerHTML=`<h1 style="color:red;text-align:center ">An error occured: ${result.errMessage} please refresh page</h1>`
   }else{
    return result.message.forEach(element => {
      console.log(element)
     createthumbnail(element.screenshot,element.name,element.amount,element._id)
    });
  
   }
  }catch(err){
     document.querySelector("main").innerHTML=`<h1 style="color:red;text-align:center ">An error occured: ${err.message} please refresh page</h1>`
  }
   })()
   
   
   const createthumbnail=(src,videoname,amount,id)=>{
     const span=document.createElement("span")
     const image=document.createElement("img")
   const p=document.createElement("p")
   const b=document.createElement("b")
   const hr=document.createElement("hr")
   image.src=src
   image.alt="image"
   image.style.width="100%"
   image.style.height="75%"
   p.innerHTML=`Payment Name:${videoname}`
   b.innerHTML=`Amount specified:#${amount}`
   span.onclick=()=>window.location.href=`/api/payment/proof/${id}`
   span.appendChild(image)
   span.appendChild(p)
   span.appendChild(hr)
   span.appendChild(b)

   console.log(document.querySelector("main").appendChild(span))
   }
   
   
   
   