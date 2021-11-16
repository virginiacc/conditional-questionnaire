import { generateId } from '../utils.js';

import ResultItem from './ResultsBuilderItem.js';

const ResultsBuilder = ( { questions, results, setResults } ) => {
  const addResult = ( ) => {
    let copy = [ ...results, { 
      id: generateId(),
      type: 'text',
      text: ''
    } ];
    setResults( copy );
  }

  const deleteResult = ( id ) => {
    let copy = [ ...results ];
    let index = copy.findIndex( item => item.id === id );
    copy.splice( index, 1 );
    setResults( copy );
  }

  const updateResult = ( id, prop, val ) => {
     let copy = [ ...results ];
     let index = copy.findIndex( item => item.id === id );
     copy[index][prop] = val;
     setResults( copy );
  }

  return (
    <div className="block">
      <h2>Result blocks</h2>
      { results.length > 0 && 
        (<div className="block block__sub">
	        {  results.map( ( item, index ) => (
	          <ResultItem handleUpdate={ updateResult } 
	                      handleDelete={ deleteResult }
	                      result={ item } 
	                      questions={ questions }
	                      key={ item.id }
                        index={ index }/>
	        ) ) } 
        </div>)
      }
      <button className="a-btn" onClick={ addResult }>
        { `Add ${ results.length ? 'another' : 'a' } result block` }
      </button>
    </div>    
  )
};

export default ResultsBuilder;