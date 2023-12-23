document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('taskForm');
    const resultsContainer = document.getElementById('results');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const input1 = document.getElementById('input1').value;
      const input2 = document.getElementById('input2').value;
      const input3 = document.getElementById('input3').value;
  
      const resultParagraph = document.createElement('p');
      resultParagraph.textContent = `Field 1: ${input1}, Field 2: ${input2}, Field 3: ${input3}`;
      
      // Apply dynamic styling
      resultParagraph.style.backgroundColor = getRandomColor();
      
      resultsContainer.appendChild(resultParagraph);
  
      // Clear form fields
      form.reset();
    });
  
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  