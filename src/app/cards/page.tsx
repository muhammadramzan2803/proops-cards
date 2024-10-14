import React from "react";

interface Tprops {
    name: string;
    rollNumber: number;
}

const StudentCard = (props: Tprops) => {
    return (
        <div className="bg-gradient-to-r from-red-900 via-purple-900 to-pink-900 shadow-lg rounded-lg p-10 max-w-max mx-auto">
            <div className="space-y-4 ">
                <h1 className="text-4xl text-white">Name: {props.name}</h1>
                <h1 className="text-4xl text-white">Roll Number: {props.rollNumber}</h1>
                <h1 className="text-4xl text-white">Day: Monday (2-5pm)</h1>
                <h1 className="text-4xl text-white">Center: Governor House Karachi</h1>
            </div>
        </div>
    );
};

export default StudentCard;
