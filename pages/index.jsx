// import styles from "../styles/Home.module.scss";
import { Fragment, useEffect, useState } from "react";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Project from "../components/Project";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();

      setProjects(data);
      setIsLoading(false);
    };

    return getProjects();
  }, []);

  return (
    <Fragment>
      {isLoading && <Loading />}

      {!isLoading && (
        <Layout>
          <SectionTitle title="projects" />
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
      )}
    </Fragment>
  );
}
