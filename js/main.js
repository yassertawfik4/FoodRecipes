
let input=document.querySelector('.name');
let form=document.querySelector('.form')
let submit=document.querySelector('.submit')
var MyPosts;
    if(localStorage.getItem('prodect')==null){
        MyPosts=[]
    }
    else{
        MyPosts=JSON.parse(localStorage.getItem('prodect'))
        display();
    }
form.addEventListener('submit', (e) => {
    let user=false;
    if(user===false || input.value==='' ||input.value===null){
        e.preventDefault()
        getRecips(input.value);
    }
})
function getRecips(meal){
var myhttp=new XMLHttpRequest();
myhttp.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${meal}`)
myhttp.send();
myhttp.addEventListener('readystatechange',function(){
    if(myhttp.readyState==4 && myhttp.status==200){
        MyPosts=JSON.parse(myhttp.response).recipes
        localStorage.setItem('prodect',JSON.stringify(MyPosts))
        display();
    }
})
}
function display(){
    var cartoona=``;
    for(var i=0;i<MyPosts.length;i++){
        cartoona+=`
        <div class="col-md-3">
        <div class="posts mb-3">
        <img src="${MyPosts[i].image_url}" class="prodect-img mb-3 w-100" height="200" />
            <h5>${MyPosts[i].title}</h5>
            <h6>${MyPosts[i].publisher}</h6>
            <a href="${MyPosts[i].source_url}" class="btn" target="_blank">LEARN MORE</a>
        </div>
    </div>`
    }
    document.getElementById('rowData').innerHTML=cartoona
}