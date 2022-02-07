import React from "react";
import classes from "./main.module.css";
import images from "./images";
const Main = () => {
  return (
    <main className={classes.main}>
      <div className={classes.title}>
        <h1>سامانه پویش سرور ایمیل ویرا</h1>
        <h6>
          ابزاری جهت بررسی امنیتی سرورهای ایمیل <br />و راهنمای پیکربندی امن
        </h6>
      </div>
      <div className={classes.searchBar}>
        <button type="submit">شروع پویش</button>
        <input
          type="text"
          required
          placeholder="cert.uok.ac.ir | آدرس دامنه یا سرور ایمیل"
        />
      </div>
      <div className={classes.rules}>
        <p>
          با انجام پویش شما با
          <a href="https://msscanner.uok.ac.ir/terms-of-use">
            {" "}
            قوانین این وب سایت{" "}
          </a>
          موافقت می‌کنید.
        </p>
        <span>مرکز آپا دانشگاه کردستان</span>
      </div>
      <div className={classes.imgs}>
        <img src={images[0]} width="100px" alt="apa" />
        <img src={images[1]} width="120px" height="90px" alt="ict" />
        <img src={images[2]} width="140px" height="95px" alt="maher" />
      </div>
    </main>
  );
};

export default Main;
