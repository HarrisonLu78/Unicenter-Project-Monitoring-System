import React, { useEffect, useState } from "react";
import { getProjects, addProjects, updateProjects, deleteProjects } from "../services/api";

interface Project {
  id: number;
  projectName: string;
  completion: number;
  dayStarted: string;
  dayCompleted: string;
}

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState({
    projectName: "",
    completion: 0,
    dayStarted: "",
    dayCompleted: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  const handleAdd = async () => {
    await addProjects(newProject);
    fetchProjects();
    setNewProject({ projectName: "", completion: 0, dayStarted: "", dayCompleted: "" });
  };

  const handleUpdate = async (project: Project) => {
    const updatedProject = { ...project, completion: project.completion + 10 }; // Example update
    await updateProjects(updatedProject);
    fetchProjects();
  };

  const handleDelete = async (id: number) => {
    await deleteProjects(id);
    fetchProjects();
  };

  return (
    <div>
      <h1>Projects</h1>

      {/* Add Project */}
      <div>
        <input
          type="text"
          placeholder="Project Name"
          value={newProject.projectName}
          onChange={(e) => setNewProject({ ...newProject, projectName: e.target.value })}
        />
        <input
          type="number"
          placeholder="Completion %"
          value={newProject.completion}
          onChange={(e) => setNewProject({ ...newProject, completion: Number(e.target.value) })}
        />
        <input
          type="date"
          value={newProject.dayStarted}
          onChange={(e) => setNewProject({ ...newProject, dayStarted: e.target.value })}
        />
        <input
          type="date"
          value={newProject.dayCompleted}
          onChange={(e) => setNewProject({ ...newProject, dayCompleted: e.target.value })}
        />
        <button onClick={handleAdd}>Add Project</button>
      </div>

      {/* Display Projects */}
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.projectName} - {project.completion}%
            <button onClick={() => handleUpdate(project)}>Update</button>
            <button onClick={() => handleDelete(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;