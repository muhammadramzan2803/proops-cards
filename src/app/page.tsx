import React from "react";
import StudentCard from "@/app/cards/page";

export default function ParentComponents() {
  return (
    <div>
      <h1 className="text-center text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-700 to-pink-900">
        Student ID Card
      </h1>

      <StudentCard name="Noureen" rollNumber={1111} />
      <StudentCard name="Farheen" rollNumber={2222} />
      <StudentCard name="Samreen" rollNumber={3333} />
    </div>
  );
}
