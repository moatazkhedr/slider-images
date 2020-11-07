//Get Slider Items  | Array.from() [ES6]
var sliderImages =  Array.from(document.querySelectorAll('.slider-container img'));
//console.table(sliderImages);

 
// Get Number Of Slides 
var slidesCount = sliderImages.length;
//console.log(slidesCount);


//Set Current Slide 
var currentSlide =1;

//Slide Number String Element 
var slideNumberElement = document.getElementById("slide-number");

// Previous And Next Button 
var nextButton = document.getElementById("next");

var prevButton = document.getElementById("prev");

//Handel Click On Previous and Next Buttons 
nextButton.onclick=nextSlide;
prevButton.onclick=prevSlide;

//Create The Pagination List 
// 1-Create The Main Ul Element 
var paginationElement = document.createElement('ul');

//Set Id On Created Ul Element
paginationElement.setAttribute('id','pagination-ul');

//Create List Items Based On Slide Count 
for(var i=1;i<=slidesCount;i++){

  //create The Li
  var paginationItem= document.createElement('li');

  //Set Custom Attribute 
  paginationItem.setAttribute('data-index',i);

  //Set Item Content 
  paginationItem.appendChild(document.createTextNode(i));

  //Append Items To The Main Ul List 
  paginationElement.appendChild(paginationItem); 


}
//Add The Created Ul Elemnt In The Page :
document.getElementById('indicator').appendChild(paginationElement);

//Get The New Create Ul
var paginationCreatedUl=document.getElementById('pagination-ul');

//Get Pagination Items  | Array.from() [ES6]
var paginationsBullets =  Array.from(document.querySelectorAll('#pagination-ul li'));

//Lop Throgh All Bullets Item
for(var i=0; i<paginationsBullets.length;i++){
  paginationsBullets[i].onclick=function(){
    currentSlide=parseInt(this.getAttribute('data-index'));
    theChecker();
  }
}



//Trigger The Checker Function 
theChecker();



// Next Sldie Function 
function nextSlide(){
  if(nextButton.classList.contains('disabled')){
    
    //Do No Thing 
    return false;

  }else{
    currentSlide++;
    theChecker();
  }
}

// Previous  Sldie Function 
function prevSlide(){
  if(prevButton.classList.contains('disabled')){
    
    //Do No Thing 
    return false;

  }else{
    currentSlide--;
    theChecker();
  }
}

//Create The Checker Function 
function theChecker(){
  //Set The Slide Number 
  slideNumberElement.textContent='slide #'+(currentSlide) +' of '+(slidesCount) ;
  
  //Remove All Active Class 
  removeAllActive()

  //Set Active Class On Current Slide
  sliderImages[currentSlide-1].classList.add('active');

  //Set Active Class On Current Pagination Item 
  paginationCreatedUl.children[currentSlide-1].classList.add('active');
 // console.log(paginationCreatedUl.children);


 // Check if Current Slide Is The First 
 if(currentSlide==1){
  //Add Disabled Class On Previous Button 
  prevButton.classList.add('disabled');

 }else{
   //Remove Disabled Class From Previous Button 
   prevButton.classList.remove('disabled');
 }
  // Check if Current Slide Is The Last 
  if(currentSlide==slidesCount){
    //Add Disabled Class On Next Button 
    nextButton.classList.add('disabled');
  
   }else{
     //Remove Disabled Class From Next Button 
     nextButton.classList.remove('disabled');
   }
  
}


//Remove ALL Active Class From Images And Pagination Bullets 

function removeAllActive(){
  //Loop Through Images 
  sliderImages.forEach(function (img){
 img.classList.remove('active'); 
  });

  //Loop Throgh Pagination Bullets
  paginationsBullets.forEach(function(bullet){
    bullet.classList.remove('active');
  });
}

