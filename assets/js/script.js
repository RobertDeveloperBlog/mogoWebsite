var accordion__item = document.querySelectorAll('.accordion__item')
for (var i = 0; i < accordion__item.length; i++) {
  accordion__item[i].addEventListener('click', funOpen)

  function funOpen(event) {
    for (var i = 0; i < accordion__item.length; i++) {
      accordion__item[i].classList.remove('active')
      if (accordion__item[i] == event.currentTarget) {
        accordion__item[i].classList.add('active')
      }
    }
  }
}
