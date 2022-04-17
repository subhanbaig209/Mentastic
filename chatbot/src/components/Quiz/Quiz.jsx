import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import "./Quiz.css";
function Quiz(props) {
  const [loading, setLoading] = useState(true);
  const [linux, setLinux] = useState([]);
  const [sql, setSql] = useState([]);
  const [docker, setDocker] = useState([]);
  
  if (loading === true)
    return (
      <div>
        <Loading />
      </div>
    );
  
    }
export default Quiz;
