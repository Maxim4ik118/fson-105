import css from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      {title && <h2 className={css.title}>{title}</h2>}
      <div className={css.container}>{children}</div>
    </section>
  );
};

export default Section;
