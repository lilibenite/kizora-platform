let currentIndex = 0;
let currentCourse = null;

function loadLesson() {
  currentCourse = localStorage.getItem("currentCourse");

  const course = LESSONS[currentCourse];
  const lesson = course.lessons[currentIndex];

  document.getElementById("lesson-title").innerText = lesson.title;
  document.getElementById("lesson-content").innerHTML = lesson.content;
}

function nextLesson() {
  const course = LESSONS[currentCourse];

  if (currentIndex < course.lessons.length - 1) {
    currentIndex++;
    loadLesson();
  } else {
    alert("Course completed 🎉");
  }
}

document.addEventListener("DOMContentLoaded", loadLesson);