import { MdInfo } from "react-icons/md";

const styles = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  color: "#09f",
  fontSize: "4rem",
  textTransform: "uppercase",
};

export default function SectionTitle({ title }) {
  return (
    <h2 style={styles}>
      {title} <MdInfo title="proyects" />
    </h2>
  );
}
