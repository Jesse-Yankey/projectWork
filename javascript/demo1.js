function addInputField(button) {
    const inputRow = button.parentElement;
    
    const newInputField = document.createElement('input');
    newInputField.type = 'text';
    newInputField.classList.add('input-field');
    newInputField.placeholder = 'Enter input';

    const newRow = document.createElement('div');
    newRow.classList.add('input-row');
    newRow.appendChild(newInputField);

    // const plusButton = document.createElement('button');
    // plusButton.classList.add('plus-button');
    // plusButton.innerHTML = '+';
    // plusButton.onclick = function(){
    //     addInputField(plusButton);
    // };
    
    const minusButton = document.createElement('button');
    minusButton.classList.add('minus-button');
    minusButton.innerHTML = '-';
    minusButton.onclick = function(){
        removeInputField(minusButton);
    };
    
    newRow.appendChild(minusButton);

    inputRow.parentElement.insertBefore(newRow, inputRow.nextSibling);
    // newRow.appendChild(plusButton);

    button.classList.remove('plus-button');
    button.classList.add('minus-button');
    button.innerHTML = '-';
    minusButton.onclick = function(){
        removeInputField(minusButton);
    };

    // Remove the plus button fromthe original inout row
    // inputRow.querySelector('.plus-button').remove();

    // button.remove(); // Remove the plus button

    // inputRow.appendChild(newInputField);
    // inputRow.appendChild(plusButton);
    // inputRow.appendChild(minusButton);

    // button.classList.remove('plus-button');
    // button.classList.add('minus-button');
    // button.innerHTML = '-';
    // button.onclick = function() {
    //     removeInputField(button);
    // };

    // button.remove(); // Remove the plus button
}

function removeInputField(minusButton) {
    const inputRow = minusButton.parentElement;
    inputRow.remove();
}