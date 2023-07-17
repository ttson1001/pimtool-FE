import classNames from "classnames/bind";
import styles from "./Hearder.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("content")}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4A2WqYY9rES3GTPl2_a0VY1_tU-3zYrTmkA&usqp=CAU"></img>
        </div>
        <div className={cx("title")}>
          <p>Project Information Management</p>
        </div>
      </div>
      <div className={cx('body')}>
        <p>EN</p> | <p>FR</p>
      </div>
      <div className={cx('body')}>Help</div>
      <div className={cx('body')}> 
        Log Out
      </div>
    </header>
  );
}

export default Header;
