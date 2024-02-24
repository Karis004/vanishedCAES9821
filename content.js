var element = document.querySelector(".input-group-append");
var newElement = document.createElement("div");
newElement.innerHTML = "<a href='https://moodle.hku.hk/course/view.php?id=112845'>" +
  "<img src='https://i.boatonland.com/HKU/post/Gf8cGhwm7K4jMRWJTeCxBrGQ5dX2yEyr.png' alt='CAES9821' style='height: 32px; width: auto;'>" +
  "</a>";
newElement.style.paddingLeft = "10px";
element.parentNode.replaceChild(newElement, element);


var elementChangeName = document.querySelector(".form-control:first-of-type");
console.log(elementChangeName);
elementChangeName.placeholder = "idiot moodle";
