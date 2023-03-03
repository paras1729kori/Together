import React from "react";

const HIW = () => {
  const data = [
    {
      id: 1,
      title: "Create a campaign for Fundraising",
      desc: "It'll take only 2 minutes. Just enter a few details about the funds you are raising for.",
    },
    {
      id: 2,
      title: "Spread your voice",
      desc: "All you need to do is share the Campaign with your friends, family and others, in no time, support will start pouring in.",
    },
    {
      id: 3,
      title: "Easy withdrawls",
      desc: "The funds raised can be withdrawn directly to the recipient when 50%  of the contributors approve of the Withdrawal Request.",
    },
  ];

  return (
    <div className="mb-20">
      <h1 className="text-xl text-center md:text-left md:text-2xl font-bold mb-3">
        How it works ?
      </h1>
      <div className="flex flex-col gap-4 text-center md:grid md:grid-cols-3 md:gap-4 md:text-left">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <div className="font-bold">{item.title}</div>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HIW;
