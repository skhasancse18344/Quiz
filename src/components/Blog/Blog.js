import React from "react";

const Blog = () => {
  return (
    <div className="my-5 p-10 bg-slate-200 ">
      <h2 className="text-3xl text-blue-600 font-bold mb-8">Blog</h2>
      <div className="bg-emerald-800 w-full mx-auto p-10">
        <p className="text-2xl font-bold mb-3">What is the purpose of React?</p>
        <p>
          Routing is a process in which a user is directed to different pages
          based on their action or request. ReactJS Router is mainly used for
          developing Single Page Web Applications. React Router is used to
          define multiple routes in the application. When a user types a
          specific URL into the browser, and if this URL path matches any
          'route' inside the router file, the user will be redirected to that
          particular route. React Router is a standard library system built on
          top of the React and used to create routing in the React application
          using React Router Package. It provides the synchronous URL on the
          browser with data that will be displayed on the web page. It maintains
          the standard structure and behavior of the application and mainly used
          for developing single page web applications. <br /> <br />
          React Router plays an important role to display multiple views in a
          single page application. Without React Router, it is not possible to
          display multiple views in React applications. Most of the social media
          websites like Facebook, Instagram uses React Router for rendering
          multiple views.
        </p>
      </div>
      <div className="bg-blue-300 w-full  mx-auto my-5 p-10">
        <p className="text-2xl font-bold mb-3">What is the context API</p>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className="bg-green-300 w-full  mx-auto my-5 p-10">
        <p className="text-2xl font-bold mb-3">
          What is the useRef Hook in react?
        </p>
        <p>
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </p>
      </div>
    </div>
  );
};

export default Blog;
