import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import bookImg from "../src/assets/img/book1.jpg";
import bookImg2 from "../src/assets/img/book2.jpg";

// function Greeting() {
//   return (
//     <>
//       <Person />
//       <Message />
//     </>
//   );
// }

// function Message() {
//   return <h2>My message</h2>;
// }

// const Person = () => {
//   return <h2>John Doe</h2>;
// };

const books = [
  {
    title:
      "Ms. Rachel and the Special Surprise: Encouraging Speech and Learning Through Play and Music",
    author: "Ms Rachel",
    img: bookImg,
    id: 1,
  },
  {
    title:
      "Good Energy: The Surprising Connection Between Metabolism and Limitless Health",
    author: "Casey Means MD (Author), Calley Means (Author)",
    img: bookImg2,
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { title, img, author } = book;
        return <Book title={title} img={img} author={author} />;
      })}
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Greeting /> */}
    {/* <Message /> */}
    <BookList />
  </>
);
