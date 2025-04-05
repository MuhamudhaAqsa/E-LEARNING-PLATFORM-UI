import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import { PlayCircle } from "lucide-react";

// Sample course data including title, progress, and video link
const courses = [
  { id: 1, title: "Introduction to React", progress: 70, videoUrl: "https://www.youtube.com/embed/bMknfKXIFA8" },
  { id: 2, title: "Advanced JavaScript", progress: 50, videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c" },
  { id: 3, title: "UI/UX Design Basics", progress: 30, videoUrl: "https://www.youtube.com/embed/3YjV0G3aK8I" }
];

// Component to display the list of available courses
function CourseList() {
  return (
    <div style={{ padding: "40px", maxWidth: "1400px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "black" }}>Available Courses</h1>
      
      {/* Course cards displayed in a responsive grid layout */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "24px" }}>
        {courses.map((course) => (
          <div key={course.id} style={{ padding: "24px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "white" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "600", color: "black" }}>{course.title}</h2>
            
            {/* Progress bar indicating course completion */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "999px", height: "16px", marginTop: "12px", position: "relative" }}>
              <div style={{ backgroundColor: "#facc15", height: "16px", borderRadius: "999px", width: `${course.progress}%`, position: "absolute" }}></div>
              <span style={{ position: "absolute", right: "8px", top: "0", fontSize: "12px", fontWeight: "bold", color: "#333" }}>{course.progress}%</span>
            </div>

            {/* Link to the detailed course view */}
            <Link to={`/course/${course.id}`}>
              <button style={{ marginTop: "12px", width: "100%", backgroundColor: "#22c55e", color: "white", padding: "10px 0", borderRadius: "8px", border: "none", fontSize: "16px" }}>
                Continue
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Component to show details of a single course
function CourseDetail() {
  const { id } = useParams(); // Get course ID from URL
  const course = courses.find((c) => c.id === parseInt(id)); // Find the matching course

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "black" }}>{course.title}</h1>
      
      {/* Embedded YouTube video for the course */}
      <div style={{ marginTop: "24px" }}>
        <iframe
          width="100%"
          height="500"
          src={course.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "12px" }}
        ></iframe>
      </div>

      {/* Button to navigate back to the course list */}
      <Link to="/">
        <button style={{ marginTop: "24px", backgroundColor: "#6b7280", color: "white", padding: "10px 20px", borderRadius: "8px", border: "none", fontSize: "16px" }}>
          Back to Courses
        </button>
      </Link>
    </div>
  );
}

// Main app component with route configuration
function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
