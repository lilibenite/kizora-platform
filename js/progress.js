function saveProgress(course, lessonId) {
  localStorage.setItem(`${course}-${lessonId}`, "done");
}

function getProgress(course, lessonId) {
  return localStorage.getItem(`${course}-${lessonId}`);
}