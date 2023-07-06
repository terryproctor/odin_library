//create library object that will hold all the books
let library = [];


//listen for the click event on the plus button
document.getElementsByClassName('plus')[0].addEventListener('click', () =>{
    // show the modal
    // console.log('clicked');
    document.getElementsByClassName('modal_background')[0].style.display = 'flex';
});


//listen for the submit event on the form
book_form.addEventListener('submit', (e) =>{
    e.preventDefault();

    // create a new book object
    class Book {
        constructor(title, description, due_date, priority){
            this.title =title;
            this.description = description;
            this.due_date = due_date;
            this.priority = priority;
        }
    }

    // console.log(Date.now())
    let new_book = new Book(
                            book_form.title.value, 
                            book_form.description.value, 
                            book_form.due_date.value, 
                            book_form.priority.value
                            )
    ;

    
    //add the book to the library
    library.push(new_book);
    //console.log(library);
    
    //hide the modal
    document.getElementsByClassName('modal_background')[0].style.display = 'none';
    
    //add the book card to the library behind the empty card
        //create new div element
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML += `<h4>${new_book.title}</h4>`;
        newCard.innerHTML += `<p>${new_book.description}</p>`;
        newCard.innerHTML += `<p>${new_book.due_date}</p>`;
        newCard.innerHTML += `<p>${new_book.priority}</p>`;

        const library_container = document.getElementsByClassName('container')[0];
        const empty = document.getElementsByClassName('empty')[0];
        //add the new card to the library
        library_container.insertBefore(newCard, empty);
        
    
    //clear the form
    book_form.reset();
});
