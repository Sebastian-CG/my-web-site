// import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import Project from "../components/Project";

export default function Home({ projects }) {
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

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/projects");
  const projects = await response.json();

  return {
    props: {
      projects,
    },
  };
}
