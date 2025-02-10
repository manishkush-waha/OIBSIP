let incremet = 0;
let pendingWork;
let sectionComplete;

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

const formattedDate = `${day} / ${month} / ${year}`;

function submit() {
  incremet += 1;

  let title = document.getElementById("second-input").value;
  let description = document.getElementById("third-input").value;

  pendingWork = document.getElementById("pending-work");
  pendingWork.style.display = 'flex';

  let createDiv = `<div class="created-div"><div class="workToDo"><h4 class="work-title">${title}</h4><p>${description}</p>${formattedDate}</div><div class="workToDo"><button onclick="complete_work(${incremet})" style="background-color: green; width: 130px;" class="my-button-${incremet}">Complete</button><button onclick="delete_work(${incremet})" style="background-color: red; width: 100px;">Delete</button></div></div>`;

  if (title == "" && description == "") {
    alert("Please Fill Title And Description.");
  } else {
    newDiv = document.createElement("div");
    
    newDiv.setAttribute("index", incremet);
    newDiv.innerHTML += createDiv;

    pendingWork.appendChild(newDiv);
  }


  document.getElementById("second-input").value = "";
  document.getElementById("third-input").value = "";
}

function delete_work(index) {
  let deleteWork = document.querySelector(`div[index='${index}']`);
  
  if (deleteWork) {
    deleteWork.remove(index);
  }

  checkFor();
}

function complete_work(index) {
  let completeWork = document.querySelector(`div[index='${index}']`);
  sectionComplete = document.getElementById('complete-work');

  sectionComplete.appendChild(completeWork);
  sectionComplete.style.display = 'flex';
  
  let deleteButton = document.querySelector(`button[class="my-button-${index}"]`);
  if (deleteButton) {
    deleteButton.remove(index);
  }

  checkFor();
}

function checkFor() {
  if (pendingWork.children.length <= 1) {
    pendingWork.style.display = 'none';
  }
  
  if (sectionComplete.children.length <= 1) {
    sectionComplete.style.display = 'none';
  }
}
