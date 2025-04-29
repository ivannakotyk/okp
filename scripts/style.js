function userDialog() {
    let attempts = 3;
  
    while (attempts > 0) {
      let answer = prompt("Щоб підтвердити, що ви не робот, скільки буде 7 + 2?");
      
      if (answer === null) {
        alert("Перевірку скасовано.");
        break;
      } else if (answer.trim() === "9") {
        alert("Дякуємо! Перевірку пройдено.");
        break;
      } else {
        attempts--;
        alert("Неправильна відповідь! Залишилось спроб: " + attempts);
        
        if (attempts === 0) {
          alert("На жаль, доступ заборонено.");
        }
      }
    }
  }
  userDialog();
  