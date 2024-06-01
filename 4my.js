const questions = document.querySelectorAll('#packageList h6');
    const answers = document.querySelectorAll('#packageList p');
    
    questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        answers[index].style.display = answers[index].style.display === 'none' ? 'block' : 'none';
    });
});