document.getElementsByClassName('plus')[0].addEventListener('click', () =>{
    // show the modal
    console.log('clicked');
    document.getElementsByClassName('modal_background')[0].style.display = 'flex';
});

book_form.addEventListener('submit', (e) =>{
    e.preventDefault();

    // create a new book object

    //hide the modal
    document.getElementsByClassName('modal_background')[0].style.display = 'none';
    //add the book card to the library behind the empty card

    //clear the form
});
