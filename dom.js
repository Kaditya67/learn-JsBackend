// let head1 = document.getElementsByTagName('h1');
// console.log(head1);           
// console.log(head1.length);     

// let para = document.getElementsByClassName('mycontainer');
// console.log(para);            

// console.log(para[0].children);
// console.log(para[0].children[0].textContent);

// para[0].children[0].innerHTML='<b>You fool!</b>';

// const newDiv = document.createElement('div');
// newDiv.textContent = 'New element';

// para[0].appendChild(newDiv);

// newDiv.style.border = '2px solid red';

// // para[0].removeChild(para[0].children[0]);


// newDiv.addEventListener('dblclick',(e)=>{
//     console.log("Clicked new Div!");
//     console.log(e.target);
//     console.log(e.target.parentNode);
//     console.log(e.target.nextSibling);
// })



const arr = [1,2,3,4,5,6,7];

arr.map((value)=>{
    console.log(value);
})