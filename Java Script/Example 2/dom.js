let itemLister = document.querySelector('#header-title span');
itemLister.style.display ='inline-block';





function addListItem(){
let items = document.querySelector('#items');
let newItem = document.createElement('li'); 
newItem.classList.add('list-group-item');
let text = document.querySelector('#newItem').value;
let textnode = document.createTextNode(text);
newItem.appendChild(textnode);
items.appendChild(newItem);
}