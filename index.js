let inputText = document.getElementById('input-box');
let listContainer = document.getElementById('listContainer');

function addTask(){

    if(inputText.value == ""){

        alert('Type a task');

    }else{

        let li = document.createElement('li');
        li.innerHTML = inputText.value;

        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);

        
    }

    inputText.value = "";

}

listContainer.addEventListener('click',(e)=>{

    if(e.target.tagName === 'LI'){

        e.target.classList.toggle('CHECKED');

    }else if(e.target.tagName === 'SPAN'){

        e.target.parentElement.remove();

    }

});