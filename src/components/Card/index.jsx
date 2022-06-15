import React from "react";

export default function Card() {
  return (
    <div
      className={`shadow-lg p-4 w-64 h-64 rounded-xl 
                    flex flex-col items-center space-y-10
                    font-semibold text-xl`}
    >
      <div className="flex flex-row space-x-8">
        <img
          className="w-24 h-24 rounded-full  "
          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
          alt=""
          width="384"
          height="512"
        />
        <div className="flex flex-col items-center">
          <span>45,68%</span>
          <p className="text-sm ...">455.456 votos</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <strong>Andrew Alfred</strong>
        <p> Winner</p>
      </div>
    </div>
  );
}
