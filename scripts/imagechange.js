// Define an array of 5 text blocks, each with a date and greeting variable
// Define an array of 5 text blocks, each with a date and greeting variable
var galBlocks = [
  //1
  {
    img:"gallery1"
  },
  //2
  {
    img:"gallery2"
  },
  //3
  {
    img:"gallery3"
  },
  //4
  {
    img:"gallery4"
  },
  //5
  {
    img:"gallery5"
  },
  //6
  {
    img:"gallery6"
  },
  //7
  {
    img:"gallery7"
  },
  //8
  {
    img:"gallery8"
  },
  //9
  {
    img:"gallery9"
  },
  //10
  {
    img:"gallery10"
  },
  //11
  {
    img:"gallery11"
  },
  //12
  {
    img:"gallery12"
  },
  //13
  {
    img: "gallery13"
  },
  //14
  {
    img:"gallery14"
  },
  //15
  {
    img:"gallery15"
  },
  //16
  {
    img:"gallery16"
  },
  //17
  {
    img:"gallery17"
  },
  //18
  {
    img:"gallery18"
  },
  //19
  {
    img:"gallery19"
  },
  //20
  {
    img:"gallery20"
  },
  //21
  {
    img:"gallery21"
  },
  //22
  {
    img:"gallery22"
  },
  //23
  {
    img:"gallery23"
  },
  //24
  {
    img:"gallery24"
  },
  //25
  {
    img:"gallery25"
  },
  //26
  {
    img:"gallery26"
  },
  //27
  {
    img:"gallery27"
  },
  //28
  {
    img:"gallery28"
  },
  //29
  {
    img:"gallery29"
  },
  //30
  {
    img:"gallery30"
  },
  //31
  {
    img:"gallery31"
  },
];


// Set the initial index to 0 (the first text block)
var index = 0;
var pageNum = 0;
// Get references to the HTML elements
var imgbackBtn = document.getElementById("imgback-btn");
var imgnextBtn = document.getElementById("imgnext-btn");
var galBlock = document.getElementById("gal-block");


// Function to update the text block with the current index

function updateGalleryImg() {
  galBlock.id  = galBlocks[index].img;
}

// Add event listeners to the back and next buttons
imgnextBtn.addEventListener("click", function() {
  if (index > 0) {
    index--;
    document.getElementById("subject").innerHTML = "";
    updateGalleryImg();
  }
});

imgbackBtn.addEventListener("click", function() {
  if (index < galBlocks.length - 1) {
    index++;
    document.getElementById("subject").innerHTML = "";
    updateGalleryImg();
  }
  if (index = galBlock.length-1){
    index=0;
    document.getElementById("subject").innerHTML = "";
    updateGalleryImg();
  }
});

updateGalleryImg();
