import React from "react";
import Banner from "../../Layout/Banner";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Home = () => {
  const topics = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="grid gap-4 md:grid-cols-4 w-10/12 mx-auto mt-20">
        {topics.data.map((quizTopic) => (
          <Topic key={quizTopic.id} quizTopic={quizTopic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
