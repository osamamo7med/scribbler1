if (document.getElementsByClassName('demo').length > 0) {
    var i = 0;
    var txt = `scribbler
              [Entry mode; press Ctrl+D to save and quit; press Ctrl+C to quit without saving]
  
              ###todo for new year dinner party
  
              - milk
              - butter
              - green onion
              - lots and lots of kiwis 🥝`;
    var speed = 60;
  
    function typeItOut () {
      if (i < txt.length) {
        document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
      }
    }
  
    setTimeout(typeItOut, 1800);
  }
  // tab Selection 
  let tabs=document.querySelectorAll("#tabcont li ")
  let tabsarr=Array.from(tabs)
  let tabshow= document.querySelectorAll("#tabshow code ")
  let tabshowarr=Array.from(tabshow)
  tabsarr.forEach(element => {
  element.addEventListener("click",function (e){
  //  console.log(element);
    tabsarr.forEach(element => {
      element.classList.remove('active')
    });
    e.currentTarget.classList.add("active")
    tabshowarr.forEach(div =>{
      div.style.display="none"
    })
    // console.log(e.currentTarget.dataset);
    document.querySelector(e.currentTarget.dataset.pane).style.display ="block"
  })
  
})
