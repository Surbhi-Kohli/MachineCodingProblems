import React from 'react';
import classes from './games.module.css';
//  import _ from lodash;  for use of shuffle from lodash
const Game = (props) => {
  const [array, setArray] = React.useState([]);
  const [selectedTuple, setSelectedTuple] = React.useState([]);
  const [correctPair, setCorrectPair] = React.useState([]);
  let initArray = [];
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  React.useEffect(() => {
    /**
     * For converting object to array
     */
    Object.keys(props.data).forEach((key) => {
      initArray.push(key);
      initArray.push(props.data[key]);
    });
    /**
     * Or u can do the following to convert obj to array
     * initArray = Object.entries(props.data).flat()
     */
    let shuffledArray = shuffle(initArray);
    setArray(shuffledArray);
    /*
    Or
    setArray(_.shuffle(initArray))
    */
  }, []);
/**
 * const handleClick =(e)=>{
 * const {target} = e;
 * const value= target.getAttribute('data-value);
 * .....rest of the code
 * 
 * }
 * The above can be used in case u dont want multiple
 * arrow functions to be created while u call handleClick.
 * This is  just because multiple arrow funcs takes memory 
 * and is a performance hit everytime. 
 * Individually it is a small thing. 
 * However, in a large app, multiple anonymous functions 
 * recreated everywhere then collectively it matters.
 */
  const handleClick = (el) => {

    if (selectedTuple.length == 2 || selectedTuple.indexOf(el) != -1) return;

    let selTuple = selectedTuple.concat(el);

      setSelectedTuple(selTuple);
      if (selTuple.length == 2) {
        const [first, second] = selTuple;
        if (props.data[first] == second || props.data[second] == first) {
          setCorrectPair([first, second]);
          setTimeout(() => {
            let arrayCopy = [...array];
            arrayCopy = arrayCopy.filter((el) => selTuple.indexOf(el) == -1);
            setArray(arrayCopy);
            setSelectedTuple([]);
            setCorrectPair([]);
          }, 1000);
        } else {
          setTimeout(() => setSelectedTuple([]), 1000);
        }
      }
    
  };
  return (
    <div className={classes.gameBoard}>
      {array.map((el) => {
        const isSelected = selectedTuple.indexOf(el) != -1;
        const isIncorrect =
          selectedTuple.length == 2 &&
          isSelected &&
          correctPair.indexOf(el) == -1;
        const isCorrect =
          selectedTuple.length == 2 &&
          isSelected &&
          correctPair.indexOf(el) !== -1;
        return (
          <button
            onClick={() => handleClick(el)}/**or onClick={handleClick} and retrieve by getAttribute('data-value') */
            data-value={el}
            className={
              isSelected
                ? isIncorrect
                  ? `${classes.incorrectOption} ${classes.option}`
                  : isCorrect
                  ? `${classes.correctOption} ${classes.option}`
                  : `${classes.selectedOption} ${classes.option}`
                : classes.option
            }
            key={el}
          >
            {el}
          </button>
        );
      })}
      {array.length == 0 && (
        <div>
          <h1>Congratulations!</h1>
        </div>
      )}
    </div>
  );
};
export default Game;
