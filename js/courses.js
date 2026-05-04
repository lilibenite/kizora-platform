function loadCourses() {
  const container = document.getElementById("courses-container");

  Object.keys(LESSONS).forEach(key => {
    const course = LESSONS[key];

    const card = document.createElement("div");
    card.className = "course-card";

    card.innerHTML = `
      <h2>${course.title}</h2>
      <p>${course.lessons.length} lessons</p>
      <button onclick="openCourse('${key}')">Open</button>
    `;

    container.appendChild(card);
  });
}

function openCourse(courseKey) {
  localStorage.setItem("currentCourse", courseKey);
  window.location.href = "lesson.html";
}

document.addEventListener("DOMContentLoaded", loadCourses);