let t=document.querySelector("[data-tbody]");function e(){return fetch("http://localhost:3001/students").then(t=>{if(!t.ok)throw Error(`Error: ${t.statusText}`);return t.json()}).then(e=>{t.innerHTML=e.map(t=>`
        <tr>
          <td>${t.id}</td>
          <td>${t.name}</td>
          <td>${t.age}</td>
          <td>${t.course}</td>
          <td>${t.skills.join(", ")}</td>
          <td>${t.email}</td>
          <td>${t.isEnrolled?"Так":"Ні"}</td>
          <td>
            <button data-update="${t.id}">Редагувати</button>
            <button data-delete="${t.id}">Видалити</button>
          </td>
        </tr>
      `).join("")}).catch(t=>console.log(t))}document.querySelector("#get-students-btn").addEventListener("click",e),t.addEventListener("click",t=>{var d;let o=t.target.closest("[data-delete]");o&&(d=o.dataset.delete,fetch(`http://localhost:3001/students/${d}`,{method:"DELETE"}).then(t=>{if(!t.ok)throw Error(`Error: ${t.statusText}`);return t.json()}).catch(t=>console.log(t))).then(e)});
//# sourceMappingURL=goit-js-hw-018.e68c65fb.js.map
