import style from "../style/pageheader.module.scss";

export default function PageHeader({ title = "", text = "" }) {
  return (
    <header className={style.pageHeader}>
      <h1>{title}</h1>
      <p>{text}</p>
    </header>
  );
}
