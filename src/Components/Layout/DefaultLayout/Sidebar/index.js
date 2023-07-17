import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Project">About</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
