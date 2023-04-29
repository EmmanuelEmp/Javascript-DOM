// Javascript DOM manipulation
document.title = "Javascript DOM";



var form = document.getElementById('addForm');
var items = document.getElementById('itemAll');

form.addEventListener('click', addItem);
items.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();

    
    // get input value
   var newItem = document.getElementById('item').value;
       
    // create new li
    var li = document.createElement('li');
//     // Add class
    li.className = 'items-list';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button element 
    var deleteBtn = document.createElement('button');

    // add classes to delete button
    deleteBtn.className = 'items-btn'
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
     // append button to list
    li.appendChild(deleteBtn);
    // append li to list
    items.appendChild(li);
   
 }
function removeItem(e){
    if(e.target.classList.contains('items-btn')){
        
       if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        items.removeChild(li);
       }
    }
}
