function deleteCourse(button) {
    const courseEntry = button.parentElement;
    const courseName = courseEntry.querySelector('.course-name');
    
    const confirmation = confirm(`Are you sure you want to delete the course "${courseName.textContent}"?`);
    
    if (confirmation) {
        courseEntry.remove();
    }
}

function editCourse(button) {
    const courseEntry = button.parentElement;
    const courseName = courseEntry.querySelector('.course-name');
    const newName = prompt('Enter the new course name:', courseName.textContent);
    
    if (newName !== null && newName.trim() !== '') {
        courseName.textContent = newName;
    }
}