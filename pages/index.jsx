// import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Project from "../components/Project";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    };

    return getProjects();
  }, []);

  return (
    <Layout>
      {projects.map(({ id, title, description, buttonLinks, url }) => (
        <Project
          key={id}
          titleProject={title}
          description={description}
          links={buttonLinks}
          projectUrl={url}
        />
      ))}
    </Layout>
  );
}
