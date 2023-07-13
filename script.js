//create library object that will hold all the tasks
let tasks = [];

//listen for the click event on the plus button
document.getElementsByClassName('plus')[0].addEventListener('click', () =>{
    // show the modal
    // console.log('clicked');
    document.getElementsByClassName('modal_background')[0].style.display = 'flex';
    //default date is today
    document.getElementById('due_date').valueAsDate = new Date();
});


//listen for the submit event on the form
task_form.addEventListener('submit', (e) =>{
    e.preventDefault();

    // create a new task object
    class Task {
        constructor(title, description, due_date, priority){
            this.title =title;
            this.description = description;
            this.due_date = due_date;
            this.priority = priority;
        }
            displayCard() {
                //add the task cards to the list behind the empty card
                    //create new div element
                    const newCard = document.createElement('div');
                    newCard.classList.add('card');
                    newCard.classList.add('filledCard');
                    newCard.innerHTML += `<h4>${this.title}</h4>`;

                    // only display title. Details button for additional info
                    // newCard.innerHTML += `<p>${this.description}</p>`;
                    // newCard.innerHTML += `<p>${this.due_date.getUTCDate()}-${this.due_date.getUTCMonth()+1}-${this.due_date.getUTCFullYear()}</p>`;
                    // newCard.innerHTML += `<p>${this.priority}</p>`;

                    newCard.innerHTML += `<button class="detail_btn">Details</button>`;
                    newCard.getElementsByClassName('detail_btn')[0].addEventListener('click', () => {
                        //show modal with task details
                        //TO DO!!!!!!!!!!!!!!!!!!!!
                    }
                    );


                    newCard.innerHTML += `<button class="delete_btn">-</button>`;
                    newCard.getElementsByClassName('delete_btn')[0].addEventListener('click', () => {
                        //remove the card from the library
                        console.log('clicked')
                        this.deleteCard();
                        //remove the task from the tasks array
                        tasks.splice(tasks.indexOf(this), 1);
                    }
                    );

                          
                    const library_container = document.getElementsByClassName('container')[0];
                    const empty = document.getElementsByClassName('empty')[0];
                    //add the new card to the library
                    library_container.insertBefore(newCard, empty);
                }; 

            deleteCard() {
                //remove card from list
                let allCards = document.getElementsByClassName('filledCard');
                for (let i=0; i<allCards.length; i++){
                    if (allCards[i].firstChild.textContent === this.title)
                        // && 
                        // allCards[i].childNodes[1].textContent === this.description)
                        {
                        allCards[i].remove();
                    }
                }
            }

            
        
            
    }

    // console.log(Date.now())
    let new_task = new Task(
                            task_form.title.value, 
                            task_form.description.value, 
                            new Date(task_form.due_date.value), 
                            task_form.priority.value                         
                            )
    ;

    //remove all the cards from the taskList
    tasks.forEach(t => {
        t.deleteCard();
    });

    //add the task to the library
    tasks.push(new_task);
    //console.log(library);
    
    //hide the modal
    document.getElementsByClassName('modal_background')[0].style.display = 'none';
    
   
    
    //clear the form
    task_form.reset();

    //tasks sort by priority
    

    //display the all task cards
    tasks.forEach(t => {
        t.displayCard();
    }
    )
});


