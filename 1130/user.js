document.addEventListener("DOMContentLoaded", ()=>{
  const f = fetch("http://randomuser.me/api/?results=5")
  .then((respones) =>{
    return respones.json();
  })
  .then(({results})=>{
    results.forEach((u =>{
      console.log(u.eaml);
    } 
    });
  })
  .eatch.((err)=>{
    console.log(err);
  });
}):
