setInterval(() => {
  const date = new Date(),
    second = date.getSeconds(),
    minute = date.getMinutes(),
    hour = date.getHours();
  document.querySelector(".hour").style.transform = `rotate(${
    hour * 30 + 90
  }deg)`;
  document.querySelector(".minute").style.transform = `rotate(${
    minute * 6 + 90
  }deg)`;
  document.querySelector(".second").style.transform = `rotate(${
    second * 6 + 90
  }deg)`;
}, 100);
