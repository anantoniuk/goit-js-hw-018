const tbody = document.querySelector("[data-tbody]");
const btnGet = document.querySelector("#get-students-btn");

// Функція для отримання всіх студентів

function getStudents() {
  const url = "http://localhost:3001/students";

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      renderStudents(data);
    })
    .catch((err) => console.log(err));

  // твій код
}

// Функція для відображення студентів у таблиці

function renderStudents(students) {
  const studentsHtml = students
    .map(
      (student) => `
        <tr>
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${student.course}</td>
          <td>${student.skills.join(", ")}</td>
          <td>${student.email}</td>
          <td>${student.isEnrolled ? "Так" : "Ні"}</td>
          <td>
            <button data-update="${student.id}">Редагувати</button>
            <button data-delete="${student.id}">Видалити</button>
          </td>
        </tr>
      `,
    )
    .join("");
  tbody.innerHTML = studentsHtml;
}

// Функція для додавання нового студента

function addStudent(e) {
  const url = `http://localhost:3001/students`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(student),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((err) => console.log(err));
}

// Функція для оновлення студента

function updateStudent(id) {
  const url = `http://localhost:3001/students/${id}`;
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(student),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((err) => console.log(err));
}

// Функція для видалення студента

function deleteStudent(id) {
  const url = `http://localhost:3001/students/${id}`;
  return fetch(url, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((err) => console.log(err));
}

btnGet.addEventListener("click", getStudents);

tbody.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest("[data-delete]");

  if (deleteBtn) {
    deleteStudent(deleteBtn.dataset.delete).then(getStudents);
  }
});

// getStudents().then((data) => {
//   if (data) {
//     renderStudents(data);
//   }
// });
