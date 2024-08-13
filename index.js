let list = document.getElementById("list");
let task = document.querySelector(".tasks");
let image = document.querySelector('img');

function createLi() {
    console.log(document.getElementById("list").innerHTML);

    let box = document.createElement('div');
    box.id = "box";

    let checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    box.appendChild(checkbox);

    let sen = document.createElement('textarea');
    box.appendChild(sen);

    let nike = document.createElement('img');
    nike.id = "nike";
    nike.src = "image2.png";
    box.appendChild(nike);

    let del = document.createElement('img');
    del.id = "del";
    del.src = "delete.png";
    box.appendChild(del);

    let li = document.createElement('li');
    li.appendChild(box);

    list.appendChild(li);

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            sen.style.textDecoration = 'line-through';
            sen.style.backgroundColor = "rgb(230, 174, 71)";
            box.style.backgroundColor = 'rgb(230, 174, 71)';

            // Move the checked item to the bottom
            list.appendChild(li);
        } else {
            sen.style.textDecoration = '';
            sen.style.backgroundColor = '';
            box.style.backgroundColor = '';
        }
    });

    nike.addEventListener('click', function() {
        let text = sen.value.trim();
        if (text === '') {
            alert('Please enter some text before adding a task.');
        } else {
            list.appendChild(li); // Ensure it's added to the list
            box.removeChild(nike);
            box.appendChild(del);
        }
    });

    del.addEventListener('click', function() {
        let li = del.closest('li');
        if (li) {
            li.remove(); 
        } else {
            box.remove(); 
        }
    });
}

image.addEventListener('click', createLi);
