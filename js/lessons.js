const LESSONS = {
  universe: {
    title: "The Universe",
    lessons: [
      {
        id: 1,
        title: "What is the Universe?",
        duration: "15 min",
        level: "Beginner",
        content: `
          <h2>🌌 Universe</h2>
          <p>The Universe is everything: space, time, matter, energy.</p>
        `,
        quiz: [
          {
            q: "Age of universe?",
            options: ["4.5B", "13.8B", "1B", "100M"],
            answer: "13.8B"
          }
        ]
      },

      {
        id: 2,
        title: "Big Bang Theory",
        duration: "20 min",
        level: "Beginner",
        content: `
          <h2>💥 Big Bang</h2>
          <p>The universe started from a single point.</p>
        `,
        quiz: [
          {
            q: "Universe started from?",
            options: ["Explosion", "Big Bang", "Star", "Planet"],
            answer: "Big Bang"
          }
        ]
      }
    ]
  },

  space: {
    title: "Space Science",
    lessons: [
      {
        id: 1,
        title: "Solar System",
        duration: "18 min",
        level: "Beginner",
        content: `<h2>☀️ Sun</h2><p>Center of solar system</p>`,
        quiz: []
      }
    ]
  }
};