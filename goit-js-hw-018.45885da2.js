let t=document.querySelector("[data-tbody]");async function e(){try{let e=await fetch("http://localhost:3001/students");if(!e.ok)throw Error(`Error: ${e.statusText}`);t.innerHTML=(await e.json()).map(t=>`
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
      `).join("")}catch(t){console.log(t)}}async function d(t){let e=`http://localhost:3001/students/${t}`;try{let t=await fetch(e,{method:"DELETE"});if(!t.ok)throw Error(`Error: ${t.statusText}`);return await t.json()}catch(t){console.log(t)}}document.querySelector("#get-students-btn").addEventListener("click",e),t.addEventListener("click",async t=>{let a=t.target.closest("[data-delete]");a&&(await d(a.dataset.delete),await e())});
//# sourceMappingURL=goit-js-hw-018.45885da2.js.map
