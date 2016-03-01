var readerForRender=new FileReader();
  
var img=document.getElementById('img');
var fileInput=document.getElementById('file');

readerForRender.onload=function(){
  img.src=this.result;
}

fileInput.addEventListener('change',function(){
  readerForRender.readAsDataURL(fileInput.files[0]);
},false);
