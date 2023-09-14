import shoe1 from "./assets/images/portfolio/shoe1.png";
import shoe2 from "./assets/images/portfolio/shoe2.png";
import shoe3 from "./assets/images/portfolio/shoe3.png";
import del0 from "./assets/images/portfolio/del0.png";
import del1 from "./assets/images/portfolio/del1.png";
import del2 from "./assets/images/portfolio/del2.png";
import del3 from "./assets/images/portfolio/del3.png";
import del4 from "./assets/images/portfolio/del4.png";
import movie1 from "./assets/images/portfolio/movie1.png";
import movie2 from "./assets/images/portfolio/movie2.png";
import movie3 from "./assets/images/portfolio/movie3.png";
import movie4 from "./assets/images/portfolio/movie4.png";
import music1 from "./assets/images/portfolio/music1.png";
import music2 from "./assets/images/portfolio/music2.png";
import music3 from "./assets/images/portfolio/music3.png";
import box1 from "./assets/images/portfolio/box1.png";
import box2 from "./assets/images/portfolio/box2.png";
import tarkhine1 from "./assets/images/portfolio/tarkhine1.png";
import tarkhine2 from "./assets/images/portfolio/tarkhine2.png";
import tarkhine3 from "./assets/images/portfolio/tarkhine3.png";
import tarkhine4 from "./assets/images/portfolio/tarkhine4.png";
import par1 from "./assets/images/portfolio/par1.png";
import par2 from "./assets/images/portfolio/par2.png";
import por1 from "./assets/images/portfolio/por1.png";
import por2 from "./assets/images/portfolio/por2.png";
import por3 from "./assets/images/portfolio/por3.png";

export interface Portfolio {
  id: number;
  faName: string;
  enName: string;
  faStart: string;
  enStart: string;
  faFinish: string;
  enFinish: string;
  enDesc: string;
  faDesc: string;
  githubLink?: string;
  tools: string[];
  pictures: string[];
}
export const webPortfolios: Portfolio[] = [
  {
    id: 6,
    faName: "وبسایت پرنیان",
    enName: "Parnian Website",
    faStart: "اردیبهشت 1399",
    enStart: "June 2020",
    enFinish: "June 2020",
    faFinish: "اردیبهشت 1399",
    faDesc:
      "خدمات حمل هوایی انواع کالا به اقصی نقاط دنیا با وبسایت پرنیان. وبسایت پرنیان طراحی شده با وردپرس،دارای ظاهری شیک و جذاب و تجربه کاربری دلچسب و به یاد ماندنی است. با سرعت بالا تمامی سفارشات خود را در کثری از ثانیه ثبت کنید.",
    enDesc:
      "Air transportation services for all kinds of stuff to all parts of the world with Pernian website. Parnian's website, designed with WordPress, has a stylish and attractive appearance and a pleasant and memorable user experience. Register all your orders with highest performance in a few seconds.",
    githubLink: "#",
    pictures: [par1, par2],
    tools: ["WP"],
  },
  {
    id: 7,
    faName: "وبسایت مووی باکس",
    enName: "MovieBox Website",
    faStart: "خرداد 1399",
    enStart: "June 2020",
    enFinish: "June 2020",
    faFinish: "تیر 1399",
    faDesc:
      "این وبسایت یک پلتفرم جذاب و کاربردی برای کشف و جستجوی اطلاعات فیلم است. با استفاده از ترکیب قدرتمند React و Django، این وبسایت دارای قابلیت ها و امکانات بسیاری برای علاقه‌مندان به سینما فراهم می‌آورد.\nبعضی از ویژگی ها: رابط کاربری مدرن و جذاب، سرور پیاده سازی شده با جنگو، لیست فیلم های مورد علاقه و ...",
    enDesc:
      "Welcome to the Movies Info Website!. This website is a comprehensive platform for movie enthusiasts, providing a wealth of information about various movies. Built using the powerful combination of React and Django, this application brings together the best of both worlds to deliver a seamless and engaging user experience.\nSome features are: Elegant UI, Complete server side crud, wishlist and etc.",
    githubLink: "#",
    pictures: [box1, box2],
    tools: ["JS", "react", "django"],
  },
  {
    id: 8,
    faName: "وبسایت رزومه",
    enName: "Portfolio Website",
    faStart: "تیر 1402",
    enStart: "June 2022",
    enFinish: "August 2022",
    faFinish: "شهریور 1402",
    faDesc:
      "وبسایت رزومه شخصی م که الان درحال مشاهده ش هستید، پیاده سازی شده با کتابخونه react و کامپوننت های ChakraUI. توسعه یافته با دو تمِ تاریک و روشن + دو زبان فارسی و انگلیسی.",
    enDesc:
      "My personal portfolio website that you're currently browsing. is built with help of react library and ChakraUI components. also has dark-light theme + localization.",
    githubLink: "#",
    pictures: [por1, por2, por3],
    tools: ["JS", "react"],
  },
];
export const mobilePortfolios: Portfolio[] = [
  {
    id: 1,
    faName: "ترخینه",
    enName: "Tarkhine",
    faStart: "تیر 1402",
    enStart: "June 2022",
    faFinish: "شهریور 1402",
    enFinish: "August 2022",
    faDesc:
      "ترخینه، یک اپلیکیشن سفارش غذایِ تماما ایرانی، دوای گرسنگی شما در هر لحظه! توسعه داده شده توسط فریم ورک های فلاتر و جنگو. سمت کلاینت با فریم ورک فلاتر و معماری Bloc، همچنین تمام restful apiها هم با پایتون و توسط فریم ورک جنگو پیاده سازی شدن. برای کسب اطلاعات بیشتر و دانلود نرم افزار به لینک گیت هاب پروژه مراجعه کنید.",
    enDesc:
      "Tarkhine, a complete perisan delivery food application, best friend for your hungery moments! built with the help of flutter and django. client side developed with flutter framework and Bloc architecture + django and django rest framework for restful apis. for more information and download apk files please check out github link.",
    githubLink: "https://github.com/YOUSSSOF/Tarkhine",
    pictures: [tarkhine1, tarkhine2, tarkhine3, tarkhine4],
    tools: ["dart", "flutter", "python", "django"],
  },
  {
    id: 2,
    faName: "فروشگاهِ کفش",
    enName: "Shoe Commerce",
    faStart: "آذر 1401",
    enStart: "December 2022",
    enFinish: "January 2023",
    faFinish: "دی 1401",
    faDesc:
      "اپلیکیشن فروشگاه کفش ساخته شده با کمک فریم ورک های فلاتر و گت ایکس. ایمن برنامه با ظاهری مدرن و تجربه کاربری لذت بخش به شما این امکان رو میده تا به راحتی بین انواع کفش های مختلف جست و جو کنید، در مورد اونها بخونید و تحقیق کنید . اگه خوشتون اومد به سبد خریدتون اضافه ش کنید.\nخلاصه که یه فروشگاه نقلی در عین حال جذاب!\nاگه ازش خوشت اومده میتونی از طریق گیت هابم بیشتر باهاش آشنا بشی.",
    enDesc:
      "This is a e-commerce application built using Flutter and GetX framework. designed to provide a seamless shopping experience for shoe enthusiasts. With this app, users can browse through a wide range of shoes, explore different categories, and make purchases conveniently from their smartphones.\nSome of its cool features are: searching system, cart system, product details and much much more.\n if you're intrested in this app you can check it out through my github.",
    githubLink: "https://github.com/YOUSSSOF/Shoe-Commerce",
    pictures: [shoe1, shoe2, shoe3],
    tools: ["dart", "flutter"],
  },
  {
    id: 3,
    faName: "مووی باکس",
    enName: "Movie Box",
    faStart: "مرداد 1401",
    enStart: "August 2022",
    enFinish: "September 2022",
    faFinish: "مرداد 1401",
    faDesc:
      "اپلیکیشن فیلم و سریالِ مووی باکس یک مرجع کامل برای دسترسی به اطلاعات هزاران فیلم و سریاله. ساخته شده با کمک فریم ورک flutter و مینی فریم ورک getx. این اپلیکیشن از api وبسایت TMDB استفاده میکنه برای دریافت لحظه ای و دقیقِ تمام اطلاعاتِ موردِ نیازِ یک فردِ عاشق به سینما.\nبرخی از ویژگی های اصلی این اپ: جست و جو برای فیلم مورد نظر، اضافه کردن فیلم ها به لیست تماشای شخصی، بررسی نظرات، عوامل سازنده فیلم و پوسترها و غیره.\nبرای اطلاعات بیشتر و سورس کد لطفا به ریپازیتوری گیت هاب مراجعه کنید.",
    enDesc:
      "Movie-Box is a powerful and user-friendly movies information app built using Flutter and GetX framework. It leverages the TMDB API to provide users with comprehensive details about movies, including their ratings, release dates, genres, cast members, and much more. With its intuitive interface and seamless navigation, Movie-Box offers an immersive movie-watching experience for all cinema enthusiasts.\nSome of its main features are: Search for movies, Add movies to your watchlist, Check movies cast and crew + comments and Covers and etc.\nFor more info and source code please check out the github repo.",
    githubLink: "https://github.com/YOUSSSOF/Movies-App",
    pictures: [movie1, movie2, movie3, movie4],
    tools: ["dart", "flutter"],
  },
  {
    id: 4,
    faName: "سفارش غذا",
    enName: "Delivery",
    faStart: "دی 1401",
    enStart: "January 2023",
    enFinish: "March 2023",
    faFinish: "اسفند 1401",
    faDesc:
      "اپلیکیشن سفارش غذای آنلاین و بی دردسر، ساخته شده با کمک flutter و getx برای بخش فرانت اند، و python و fastapi برای سمت سرور. این اپلیکیشن به شما این اجازه رو میده تا بین رستوران های مختلف بگردید و غذاهای مورد علاقه خودتون رو انتخاب کنید و در نهایت سفارششون بدید، نوش جان.\nاپلیکیشن شامل بسیاری ویژگی ها میباشد مانند: ظاهر زیبا و تجربه ی کاربری لذت بخش، عملیات CRUD به صورت کامل با کمک fastapi، سیستم سرچ و بسیاری از ویژگی های دیگه.\nبرای اطلاعات بیشتر و سورس کد میتونید به ریپازیتوری گیتهاب مراجعه کنید.",
    enDesc:
      "This is a food delivery app built using Flutter and GetX for the frontend, and Python with FastAPI for the backend. The app allows users to browse through a variety of restaurants, select their desired dishes, and place orders for delivery.\nApp includes plenty of features, such as: modern and elegant UI&UX, Authentication, full CRUD operation with the help of fastapi, searching system and much much more.\nfor more information and source code please check out github repo.",
    githubLink: "https://github.com/YOUSSSOF/Delivery",
    pictures: [del0, del1, del2, del3, del4],
    tools: ["dart", "flutter", "python", "fastapi"],
  },
  {
    id: 5,
    faName: "موزیک پلیر",
    enName: "Music Player",
    faStart: "مهر 1401",
    enStart: "October 2022",
    faFinish: "آبان 1401",
    enFinish: "November 2022",
    faDesc:
      "این برنامه پخش کننده موسیقی با استفاده از Flutter و GetX ساخته شده است. این برنامه به شما امکان می‌دهد تا به راحتی و بی دردسر موزیک های دلخواهتون رو گوش بدید. با ظاهری مدرن و ویژگی های جذاب.\nویژگی هایی مثل: ساختن لیست پخش دلخواه، جست و جو، پخش درهم آهنگ ها و بسیاری قابلیت های دیگه.\nبرای اطلاعات بیشتر و دستیابی به سورس کد لطفا به ریپازیتوری گیتهاب مراجعه کنید.",
    enDesc:
      "This is a music player app built using Flutter and GetX. It allows users to listen to their favorite music tracks on their mobile devices. With a sleek and intuitive user interface, this app provides a seamless music listening experience.\nIt offers some cool featues such as: Creating playlists, Searching, Shuffle songs and much much more.\nFor more info and source code please checkout gtihub repository.",
    githubLink: "https://github.com/YOUSSSOF",
    pictures: [music1, music2, music3],
    tools: ["dart", "flutter"],
  },
];
