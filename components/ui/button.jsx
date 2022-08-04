import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ link, children }) => {
  return (
    <Link href={link}>
      <a className={styles.btn}>{children}</a>
    </Link>
  );
};

export default Button;
