const tasks = [
  {
    id: 1,
    tag: "ShopEase",
    title: "Fix Mobile Button Issue",
    dis: "A card component has a figure, a body part, and inside body there are title and actions parts",
    deadline: "21 March 2025",
    completed: false,
  },
  {
    id: 2,
    tag: "CloudSync",
    title: "Add Dark Mode",
    dis: "Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
    deadline: "21 March 2025",
    completed: false,
  },
  {
    id: 3,
    tag: "SwiftPay",
    title: "Optimize  Home page ",
    dis: "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly and ensure onClick works properly",
    deadline: "21 March 2025",
    completed: false,
  },
  {
    id: 4,
    tag: "Meta",
    title: "Add new emoji 🤲",
    dis: "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly and ensure onClick works properly",
    deadline: "21 March 2025",
    completed: false,
  },
  {
    id: 5,
    tag: "Google LLC",
    title: "Integrate OpenAI API ",
    dis: "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly and ensure onClick works properly",
    deadline: "21 March 2025",
    completed: false,
  },
  {
    id: 6,
    tag: "Glassdoar",
    title: "Improve Job searching ",
    dis: "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly and ensure onClick works properly",
    deadline: "21 March 2025",
    completed: false,
  },
];
const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Brown",
  "Black",
  "White",
  "Gray",
  "Cyan",
  "Magenta",
  "Lime",
  "Teal",
  "Indigo",
  "Violet",
  "Gold",
  "Silver",
  "Beige",
  "Maroon",
  "Olive",
  "Turquoise",
  "Salmon",
  "Lavender",
  "Coral",
  "Navy",
  "Peach",
  "Azure",
  "Mint",
];
let activeLogTasks = [];
const discoverBtn = document.getElementById("discoverBtn");
const activeLog = document.getElementById("activeLog");
const changeColor = document.getElementById("changeColor");
const clearLog = document.getElementById("clearLog");
const currentDateTime = document.getElementById("currentDate");
const taskAssigned = document.getElementById("taskAssigned");
const cards = document.getElementById("cards");
const taskDone = document.getElementById("taskDone");
let taskNumber = tasks.length;
taskAssigned.innerText = taskNumber;

currentDateTime.innerHTML = currentDate();

discoverBtn.addEventListener("click", function (e) {
  window.location.href = "./blogs.html";
});

function taskCard(tasks) {
  for (const task of tasks) {
    const { tag, title, dis, deadline, completed, id } = task;
    const cardBody = `
        <div class="card card-dash bg-base-100 w-full bg-[#F4F7FF]">
                    <div class="card-body">
                      <p>
                        <span class="bg-white rounded-lg p-3">${tag}</span>
                      </p>
                      <h2 class="card-title">${title}</h2>
                      <p class="bg-white rounded-lg p-3 opacity-70">
                        ${dis}
                      </p>
                      <div class="card-actions justify-between">
                        <div class="">
                          <small class="opacity-70">Deadline</small>
                          <p class="text-xl">${deadline}</p>
                        </div>
                        <button id="${id}"
                       
                        
                        ${
                          completed ? "disabled" : ""
                        } class="btn btn-primary disabled:text-white">
                          Completed
                        </button>
                      </div>
                    </div>
                  </div>
        `;
    const card = document.createElement("div");
    card.innerHTML = cardBody;
    cards.appendChild(card);
  }
}

cards.addEventListener("click", function (e) {
  const iddd = e.target.id;
  const date = new Date();
  for (const task of tasks) {
    if (task.id == iddd) {
      task.completed = true;
      activeLogTasks.push({
        id: task.id,
        title: task.title,
        time: `${
          hour() === 0 ? 12 : hour()
        }:${date.getMinutes()}:${date.getSeconds()} ${
          date.getHours() > 11 ? "PM" : "AM"
        }`,
        completed: false,
      });
      activeLog.innerHTML = "";
      cards.innerHTML = "";
      taskCard(tasks);
      activeTaskCard(activeLogTasks);

      taskNumber = 0;
      for (const task of tasks) {
        if (!task.completed) {
          taskNumber++;
        }
      }
      taskAssigned.innerText = taskNumber;
      if (Number.parseInt(taskAssigned.innerText) === 0) {
        alert("Board updated successfully");
        alert("congratulation! You have completed all the current task");
      } else {
        alert("Board updated successfully");
      }
      taskDone.innerText = Number.parseInt(taskDone.innerText) + 1;
    }
  }
});

function activeTaskCard(tasks) {
  for (const task of tasks) {
    const p = document.createElement("p");
    p.classList.add("bg-[#F4F7FF]");
    p.classList.add("p-2");
    p.classList.add("rounded-lg");
    p.textContent = `You have Complete The Task ${task.title} at ${task.time} `;
    activeLog.appendChild(p);
  }
}

clearLog.addEventListener("click", function () {
  activeLogTasks = [];
  activeLog.innerHTML = "";
  activeTaskCard(activeLogTasks);
});

taskCard(tasks);
const hour = function () {
  const date = new Date();
  const hour = date.getHours() > 11 ? date.getHours() - 12 : date.getHours();
  return hour;
};

function currentDate() {
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
  });
  const date = new Date();
  const parts = formatter.formatToParts(date);
  const monthName = parts.find((part) => part.type === "month").value;
  const weekdayName = parts.find((part) => part.type === "weekday").value;
  //   console.log(weekdayName, monthName);
  return `${weekdayName} ,<br/>${monthName} ${date.getDate()} ${date.getFullYear()}`;
}

function handelChangeColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
