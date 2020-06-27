import React, { useState, useEffect } from 'react';

function ToDoForm(props) {
  const [taskDescription, setTaskDescription] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [status, setStatus] = useState('incomplete');
  const [difficulty, setDifficulty] = useState(1);

  // first param: a function to execute on Mount (and when second param has a change)
  // return value should be another function to run on unmount
  // second param: an array of variables to check for changes (if empty, first param only runs on mount)

  function updateOnDeath() {
    console.log('unmount');
    document.title = 'dying';
  }

  function updateDifficulty() {
    document.title = fName + ' ' + lName;
    return updateOnDeath;
  }

  // run only on mount
  // useEffect(updateTitleWithName, []);

  // run on mount and ANY component update, and "cleans up" every time by running the unmount
  // useEffect(updateTitleWithName, null);

  // run on mount and when ONLY the variable i care about change
  // useEffect(updateTitleWithName, [fName, lName]);

  // typical implementation
  useEffect(() => {
    console.log('mount/update');
    document.title = fName + ' ' + lName;
    return () => {
      console.log('unmount');
      document.title = 'dying';
    };
  }, [fName, lName]);

  useEffect(() => {
    console.log('ran once');
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <label>First Name: </label>
      <input
        type='text'
        value={fName}
        onChange={(e) => {
          setFName(e.target.value);
        }}
      />
      <label>Last Name: </label>
      <input
        type='text'
        value={lName}
        onChange={(e) => {
          setLName(e.target.value);
        }}
      />
      <input
        type='number'
        value={age}
        onChange={(e) => {
          setAge(parseInt(e.target.value));
        }}
      />
      <h1>
        Welcome {fName} {lName}
      </h1>
    </>
  );
}

export default ToDoForm;