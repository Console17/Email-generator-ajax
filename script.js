const btn = document.querySelector(".get");
const container = document.querySelector(".email");
const close = document.querySelector(".close");
const content = document.querySelector(".content");

function load() {
  const req = new XMLHttpRequest();
  req.open("GET", "https://jsonplaceholder.typicode.com/comments", true);
  req.addEventListener("load", function () {
    if (req.status === 200) {
      const res = JSON.parse(req.responseText);
      const random = Math.floor(Math.random() * 500) + 1;
      output = "<p>" + "Email : " + res[random].email + "</p>";
      console.log(output);
      container.innerHTML = output;
    }
  });
  req.send();
  container.style.display = "flex";
}

btn.addEventListener("click", load);

close.addEventListener("click", () => {
  container.style.display = "none";
});
