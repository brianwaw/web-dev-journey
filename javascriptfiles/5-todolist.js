let todoobject = {
    activity : [],
    date : []
}
function addTodoActivity(){
    let inputActivity = document.querySelector('.input').value
    todoobject.activity.push(inputActivity);
    document.querySelector('input').value = ''
    
}


function addTodoDate(){
    let inputActivity = document.querySelector('.date').value
    todoobject.date.push(inputActivity);
    console.log(todoobject)
    document.querySelector('.date').value = ''
}

function renderactivities(){ 
    let events = '';
    for (let i = 0; i < todoobject.activity.length; i++){
        events += `
            <div class="list">
                <p>${todoobject.activity[i]}</p>
            </div>
            <div class="list">
                <p>${todoobject.date[i]}</p>
            </div>
            <div class="list2">
                <button onclick="
                    todoobject.activity.splice(${i}, 1)
                    todoobject.date.splice(${i}, 1)
                    renderactivities();
                " class="delete-btn">Delete</button><br>
            </div>`;
    }
    document.querySelector('.renderlist').innerHTML = events;
}

