import CardComponent from "../../components/cardComponent/cardComponent";
import courses from "../../data/courses";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Courses</h2>

      <div className="course-container">
        {courses.map((course) => (
          <CardComponent key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;