import * as classes from "./Ex.module.scss";

export const Ex: React.FC = () => {
  const param = "param";

  return <div className={classes.exampleDIV}>{param}</div>;
};
