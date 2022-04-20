let FBacc= document.querySelector('.facebook-acc')
let toggle= document.querySelector('.toggle-background')
let toggleBall=document.querySelector('.toggle-btn')
let body=document.querySelector('.body-light')
let header=document.querySelector('header')
let sec1Cards=document.querySelectorAll('.sec1-card')
let sec2Cards=document.querySelectorAll('.sec2-card')
let h2Txt=document.querySelectorAll('h2')
let h1Txt =document.querySelector('h1')
let h3Txt =document.querySelectorAll('h3')
let h4Txt =document.querySelector('h4')
let spans=document.querySelectorAll('span')
let link=document.querySelector('#css-link')
// let =document.querySelector('')

toggle.addEventListener('click',function(){
   toggle.classList.toggle('toggle-background')
   toggle.classList.toggle('toggle-background-active')

   if(toggle.className==='toggle-background-active'){
        console.log('active')
        body.classList.add('body-dark')
        body.classList.remove('body-light')
        link.setAttribute('href','css/main-dark.css')
        sec1Cards.forEach((item)=>{
            item.classList.remove('light')
            item.classList.add('dark')
        })
        sec2Cards.forEach((item)=>{
            item.classList.remove('light')
            item.classList.add('dark')
        })

       
   }
   else if(toggle.className==='toggle-background'){
        console.log('inactive')
        body.classList.remove('body-dark')
        body.classList.add('body-light')
        sec1Cards.forEach((item)=>{
            item.classList.add('light')
            item.classList.remove('dark')
        })
        link.setAttribute('href','css/main-light.css')
        sec2Cards.forEach((item)=>{
            item.classList.add('light')
            item.classList.remove('dark')
        })

     
      
   }
})
