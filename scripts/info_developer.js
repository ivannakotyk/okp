function showDeveloperInfo(surname, name, position = "Розробник") {
    alert("Розробник сторінки: " + surname + " " + name + "\nПосада: " + position);
    window.location.href = "index.html";
}

showDeveloperInfo("Котик", "Іванна"); 
