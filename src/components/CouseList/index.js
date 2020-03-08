import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CourseList() {
  const qty = 4;
  const courses = useSelector(state => state.data.slice(0, qty), [qty]);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch({ type: "ADD_COURSE", title: "GraphQL" });
  }
  return (
    <>
      <ul>
        {courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button onClick={addCourse}>ADCIONAR CURSO</button>
    </>
  );
}
