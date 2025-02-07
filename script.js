function showcontent(id) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function (element) {
        element.classList.remove('active');
    });
    var addcontent = document.getElementById(id);
    if (addcontent) {
        addcontent.classList.add('active');
    }
}

var index=0;
var slideTimeout;
showslide();
function showslide(){
    var i;
    var x=document.querySelectorAll('.slide');
    x.forEach((item) => {
        item.style.display = "none";
    });    
    index++;
    if(index>x.length){
        index=1;
    }
    x[index-1].style.display='block';
    slideTimeout = setTimeout(showslide,2000);
}
document.querySelectorAll('.slide').forEach((item) => {
    item.addEventListener('mouseenter', () => {
        clearTimeout(slideTimeout);
    });
    item.addEventListener('mouseleave', () => {
        slideTimeout = setTimeout(showslide, 2000);
    });
});

