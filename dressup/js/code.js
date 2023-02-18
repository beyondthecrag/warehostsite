
window.onload=init;

function init()
{
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    state.l=1;
    state.m=1;
    state.n=1;
    state.o=1;
    state.p=1;
    state.q=1;
    state.r=1;
    state.s=1;
    var background=document.getElementById("backgrounds");
    var shoe=document.getElementById("shoes");
    var hairf=document.getElementById("hairfront");
    shoe.setAttribute("class","shoe2");
    background.setAttribute("class","background1");
    shirt.setAttribute("class","shirt1");
    pants.setAttribute("class","pants1");
    hairf.setAttribute("class","hairfront3");
    
}

var state = {
    i : 0,
    j:0,
    k:0,
    l:0,
    m:0,
    n:0,
    o:0,
    p:0,
    q:0,
    r:0,
    s:0
};

function nextdress()
{
    console.log("inside function nextdress");
    console.log(state.i);
    var dress=document.getElementById("clothes");
    if(state.i===0){
    dress.setAttribute("class","dress1");
        state.i++;
        console.log(state.i);
    }
    else
     if(state.i===1){
    dress.setAttribute("class","dress2");
         state.i++;
         console.log(state.i);
    }
    else
     if(state.i===2){
    dress.setAttribute("class","dress3");
         state.i++;
         console.log(state.i);
    }
    else
     if(state.i===3){
    dress.setAttribute("class","dress4");
         state.i=0;
    }
    
}

function nextphrase()
{
    console.log("inside function nextphrase");
    console.log(state.r);
    var phrase=document.getElementById("phrases");
    if(state.r===0){
    phrase.setAttribute("class","phrase1");
        state.r++;
        console.log(state.r);
    }
    else
     if(state.r===1){
        phrase.setAttribute("class","phrase2");
         state.r++;
         console.log(state.r);
    }
    else
     if(state.r===2){
        phrase.setAttribute("class","phrase3");
         state.r++;
         console.log(state.r);
    }
    else
     if(state.r===2){
        phrase.setAttribute("class","phrase3");
         state.r++;
         console.log(state.r);
    }
    else
     if(state.r===3){
        phrase.setAttribute("class","phrase4");
         state.r++;
         console.log(state.r);
    }
    else
     if(state.r===4){
        phrase.setAttribute("class","phrase5");
         state.r++;
         console.log(state.r);
    }
    else
     if(state.r===5){
        phrase.setAttribute("class","phrase6");
         state.r++;
         console.log(state.r);
    }
    else
     if(state.r===6){
        phrase.setAttribute("class","phrase7");
         state.r++;
         console.log(state.r);
    }
    else
     if(state.r===7){
        phrase.setAttribute("class","phrase8");
         state.r++;
         console.log(state.r);
    }
    else
     if(state.r===8){
        phrase.setAttribute("class","phrase9");
         state.r++;
         console.log(state.r);
    }
    else
     if(state.r===9){
        phrase.setAttribute("class","phrase10");
         state.r++;
         console.log(state.r);
     }
    else
     if(state.r===10){
        phrase.setAttribute("class","phrase11");
         state.r=0;
    }
    
}


function nextshoe()
{
    console.log("inside function nextshoe");
    console.log(state.j);
    var shoe=document.getElementById("shoes");
    if(state.j===0){
    shoe.setAttribute("class","shoe1");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    shoe.setAttribute("class","shoe2");
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===2){
    shoe.setAttribute("class","shoe3");
         state.j=0;
    }
    
}

function nexthair()
{
    console.log("inside function nexthair");
    
    console.log(state.k);
    var hairf=document.getElementById("hairfront");

    if(state.k===0){
    hairf.setAttribute("class","hairfront1");
        state.k++;
        console.log(state.k);
    }
    else
     if(state.k===1){
    hairf.setAttribute("class","hairfront2");
         state.k++;
         console.log(state.k);
    }
    else
     if(state.k===2){
    hairf.setAttribute("class","hairfront3");
         state.k=0;
    }
    
}
function nexthat()
{
    console.log("inside function nexthat");
    
    console.log(state.s);
    var hat=document.getElementById("hat");

    if(state.s===0){
    hat.setAttribute("class","ha1");
        state.s++;
        console.log(state.s);
    }
    else
     if(state.s===1){
    hat.setAttribute("class","hat2");
         state.s++;
         console.log(state.s);
    }
    else
     if(state.s===2){
    hat.setAttribute("class","hat3");
         state.s=0;
    }
    
}

function nextbackground()
{
    console.log("inside function nextbackground");
    console.log(state.l);
    var background=document.getElementById("backgrounds");
    if(state.l===0){
        background.setAttribute("class","background1");
        state.l++;
        console.log(state.l);
    }
    else
     if(state.l===1){
        background.setAttribute("class","background2");
         state.l++;
         console.log(state.l);
    }
    else
     if(state.l===2){
        background.setAttribute("class","background3");
         state.l++;
         console.log(state.l);
    }
    else
     if(state.l===3){
        background.setAttribute("class","background4");
         state.l=0;
    }
    
}
function nextaccessory()
{
    console.log("inside function nextaccessory");
    console.log(state.m);
    var accessory=document.getElementById("accessory");
    if(state.m===0){
        accessory.setAttribute("class","accessory1");
        state.m++;
        console.log(state.m);
    }
    else
     if(state.m===1){
        accessory.setAttribute("class","accessory2");
         state.m++;
         console.log(state.m);
    }
    else
     if(state.m===2){
        accessory.setAttribute("class","accessory3");
         state.m=0;
    }
    
}
function nextshirt()
{
    console.log("inside function nextshirt");
    console.log(state.n);
    var shirt=document.getElementById("shirt");
    if(state.n===0){
        shirt.setAttribute("class","shirt1");
        state.n++;
        console.log(state.n);
    }
    else
     if(state.n===1){
        shirt.setAttribute("class","shirt2");
         state.n++;
         console.log(state.n);
    }
    else
     if(state.n===2){
        shirt.setAttribute("class","shirt3");
         state.n=0;
    }
    
}
function nextpants()
{
    console.log("inside function nextpants");
    console.log(state.o);
    var shirt=document.getElementById("pants");
    if(state.o===0){
        shirt.setAttribute("class","pants1");
        state.o++;
        console.log(state.o);
    }
    else
     if(state.o===1){
        shirt.setAttribute("class","pants2");
         state.o++;
         console.log(state.o);
    }
    else
     if(state.o===2){
        shirt.setAttribute("class","pants3");
         state.o=0;
    }
    
    
}
function nextushirt()
{
    console.log("inside function ushirt");
    console.log(state.p);
    var shirt=document.getElementById("ushirt");
    if(state.p===0){
        shirt.setAttribute("class","ushirt1");
        state.p++;
        console.log(state.p);
    }
    else
     if(state.p===1){
        shirt.setAttribute("class","ushirt2");
         state.p++;
         console.log(state.p);
    }
    else
     if(state.p===2){
        shirt.setAttribute("class","ushirt3");
         state.p=0;
    }
    
    
}
function nextjacket()
{
    console.log("inside function jacket");
    console.log(state.q);
    var shirt=document.getElementById("jacket");
    if(state.q===0){
        shirt.setAttribute("class","jacket1");
        state.q++;
        console.log(state.q);
    }
    else
     if(state.q===1){
        shirt.setAttribute("class","jacket2");
         state.q++;
         console.log(state.o);
    }
    else
     if(state.q===2){
        shirt.setAttribute("class","jacket3");
         state.q=0;
    }
    
    
}
