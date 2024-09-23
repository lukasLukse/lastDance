import { FC } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import cookie from "js-cookie";
import { useRouter } from "next/router";

type HeaderProps = {
  isUserLoggedIn: boolean;
};

const Header: FC<HeaderProps> = ({ isUserLoggedIn }) => {
  const router = useRouter();
  const signOutUser = () => {
    cookie.remove(process.env.JWT_KEY as string);
    router.push("/signup");
  };

  return (
    <div className={styles.main}>
      <div>
        <ul>
          <li>
            <Link className={styles.logo} href="/">
              ASK-FM
            </Link>
          </li>
        </ul>
      </div>
      {isUserLoggedIn && (
        <div className={styles.rigtHandSection}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/public">Public</Link>
            </li>
            <li>
              <button className={styles.signOutButton} onClick={signOutUser}>
                SIGN OUT
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
