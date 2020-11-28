/* 
Сверстать страницу и подключить к ней файл со
скриптом. На странице должны быть три текстовых
параграфа, поле ввода и кнопка. Напишите скрипт,
который будет выполнять следующие условия:
1.Кнопка скрыта, если в поле ввода нет значения.
2.При клике на кнопку добавляется новый параграф,
содержащий текст из поля ввода.
3.*Если параграфов становится больше 5, первый из
них удаляется.
 */

export function addForm(el) {
  const ulText = document.createElement("ul");
  ulText.id = "paragraphList";

  ulText.appendChild(document.createElement("li"));
  ulText.appendChild(document.createElement("li"));
  ulText.appendChild(document.createElement("li"));
  el.appendChild(ulText);

  const input = document.createElement("input");
  input.id = "input";
  el.appendChild(input);

  const button = document.createElement("button");
  button.id = "button";
  button.innerText = "Add value";
  el.appendChild(button);

  button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    ulText.appendChild(li);
    input.value = "";

    el.removeChild(button);
    if (ulText.querySelectorAll("li").length > 5) {
      ulText.querySelectorAll("li")[0].remove();
    }
  });

  input.addEventListener("keyup", () => {
    if (input.value !== "") {
      el.appendChild(button);
    } else {
      el.removeChild(button);
    }
  });
}
