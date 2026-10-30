const tbody = document.querySelector("[data-tbody]");
const btnGet = document.querySelector("#get-students-btn");

// Функція для отримання всіх студентів

async function getStudents() {
  const url = "http://localhost:3001/students";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    renderStudents(data);
  } catch (err) {
    console.log(err);
  }
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

async function addStudent(e) {
  const url = `http://localhost:3001/students`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

// Функція для оновлення студента

async function updateStudent(id) {
  const url = `http://localhost:3001/students/${id}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(student),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

// Функція для видалення студента

async function deleteStudent(id) {
  const url = `http://localhost:3001/students/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

btnGet.addEventListener("click", getStudents);

tbody.addEventListener("click", async (e) => {
  const deleteBtn = e.target.closest("[data-delete]");

  if (deleteBtn) {
    await deleteStudent(deleteBtn.dataset.delete);
    await getStudents();
  }
});
