window.addEventListener("DOMContentLoaded", function () {
  let currentDroppable = null;

  const plane = document.getElementById("plane");

  plane.onmousedown = function (event) {
    let shiftX = event.clientX - plane.getBoundingClientRect().left;
    let shiftY = event.clientY - plane.getBoundingClientRect().top;

    plane.style.position = 'absolute';
    plane.style.zIndex = 1000;
    document.body.append(plane);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      plane.style.left = pageX - shiftX + 'px';
      plane.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      plane.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      plane.hidden = false;

      if (!elemBelow) return;

      let droppableBelow = elemBelow.closest('.droppable');

      if (currentDroppable != droppableBelow) {
        if (currentDroppable) {
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          enterDroppable(currentDroppable);
        }
      }
    }

    document.addEventListener('mousemove', onMouseMove);

    plane.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
      plane.onmouseup = null;

      if (currentDroppable) {
        window.location.href = "guide.html";
      }
    };
  };

  function enterDroppable(elem) {
    elem.style.background = '#a3f7bf';
  }

  function leaveDroppable(elem) {
    elem.style.background = '#ccc';
  }

  plane.ondragstart = function () {
    return false;
  };
});
