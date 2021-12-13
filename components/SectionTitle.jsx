import { MdInfo } from "react-icons/md";

const containerStyles = {
  display: "flex",
  justifyContent: "flex-end",
  margin: "4rem 0",
};

const titleStyles = {
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
    <div style={containerStyles}>
      <h2 style={titleStyles}>
        {title} <MdInfo />
      </h2>
    </div>
  );
}
