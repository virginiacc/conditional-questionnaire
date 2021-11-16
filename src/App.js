import './App.css';
import { useEffect, useState } from 'react';
import JSONInput from './JSONInput.js';
import ResultsBuilder from './QuestionnaireBuilder/ResultsBuilder.js';
import QuestionnaireBuilder from './QuestionnaireBuilder/QuestionnaireBuilder.js';
import QuestionnaireQuestionList from './Questionnaire/QuestionnaireQuestionList.js';
import QuestionnaireResults from './Questionnaire/QuestionnaireResults.js';
import QuestionnaireSubmitButton from './Questionnaire/QuestionnaireSubmitButton.js';

import { checkFinished, getDisplayable } from './utils.js';
// import * as initial_json from './test.json';
// var initial_json = require('./test.json');
// let initial_json = '{"results":[{"text":"<h3>Results header -- always show</h3>","id":1},{"text":"<h4>Make payments affordable</h4><ul><li>Request IDR</li><li>Use deferrment or forbearance as last resort</li></ul><h4>What to avoid</h4><ul><li>Don\'t use credit cards or your home to pay off your loans</li><li>Don\'t pay for help with your student loans</li><li>Don\'t go back to school just to avoid your loans</li></ul>","id":2,"condition_block":{"type":"all","conditions":[{"type":"equals","question":1,"answer":1,"id":1},{"type":"equals","question":2,"answer":4,"id":2}]}}],"questions":[{"id":1,"type":"radio","content_blocks":[{"text":"Where are you with your loans?","id":1}],"answers":[{"text":"Off track. I\'m struggling to afford my payments, I may have missed payments, or my loan may be in default. I want to know my options.","id":1},{"text":"On track. I have not missed any payments. I know I can afford my payments.","id":2},{"text":"Just starting out. My first payment is coming up or I recently started paying. I want to find out more information on repaying my student loans.","id":3}]},{"id":2,"type":"checkbox","condition_block":{"type":"all","conditions":[{"type":"exists","question":1,"id":3}]},"content_blocks":[{"id":2,"text":"Student debt can be stressful! Your options depend on the type of loans. What type of student loans do you have?","condition_block":{"type":"all","conditions":[{"type":"equals","question":1,"answer":1,"id":4}]}},{"id":3,"text":"Glad it\'s going well! You may have ways to improve your strategy for paying off your loans. What type of student loans do you have? ","condition_block":{"type":"all","conditions":[{"type":"equals","question":1,"answer":2,"id":5}]}},{"id":4,"text":"It can be tricky to figure out the student loan strategy that works best for you. Your options will depend on your situation. What type of student loans do you have?","condition_block":{"type":"all","conditions":[{"type":"equals","question":1,"answer":3,"id":6}]}},{"id":5,"text":"Not sure? Your free credit report should list all your loans. See more details about your federal loans at www.studentaid.gov. Select all that apply "}],"answers":[{"text":"I have federal student loans for my own education.","id":4},{"text":"I have federal Parent PLUS loans for my child\'s education.","id":5},{"text":"I took out a private education loan for my schooling or someone else\'s","id":6},{"text":"I co-signed someone else\'s private education loan","id":7}]}],"content":{}}';

function App() {
  // Questionnaire builder state
  const [ results, setResults ] = useState( [] );
  const [ questions, setQuestions ] = useState( [] );

  // Questionnaire state
  const [selections, setSelections] = useState( {} );
  const [activeQuestions, setActiveQuestions] = useState( [] );
  const [isFinished, setFinished] = useState( false );
  const [isSubmitted, setSubmitted] = useState( false );

  const displayResults = () => {
    if ( !isSubmitted ) {
      setSubmitted( true );
    }
  }

  const resetState = ( obj ) => {
    if ( obj ) {
      setQuestions(obj.questions || []);
      setResults(obj.results || []);
      setup( obj.questions || [], [] );
    }
  }

  const setup = ( questionsArray, selectionsObj ) => {
    const displayable = getDisplayable( questionsArray, selectionsObj );
    let ids = displayable.map( item => item.id );
    let leftovers = Object.keys( selectionsObj ).filter( x => !ids.includes( +x ) );
    // handle checkbox array items that are no longer visible?

    let copy = Object.assign( {}, selectionsObj );
    console.log('copy', copy)
    console.log('leftovers', leftovers)
    // leftovers.forEach( id => delete copy[id] ); 
    let required = displayable.filter( q => q.required );
    let finished = checkFinished( required, copy );
    setActiveQuestions( displayable );
    setSelections( copy );
    setFinished( finished );
    if ( !finished ) {
      setSubmitted( false );
    }
  }

  const updateQuestions = ( arr ) => {
    setQuestions( arr );
    setup( arr, selections );
  }

  const updateState = ( question, answer ) => {
    console.log('updating state', question, answer)
    let selectionsCopy = Object.assign( {}, selections );
    selectionsCopy[ question ] = answer;
    console.log('selections copy', selectionsCopy)
    setup( questions, selectionsCopy );
  }

  // useEffect( () => {
  //   console.log(initial_json)
  //   // let obj = JSON.parse( initial_json );
  //   resetState( initial_json )
  // }, []);
  
  return (
    <div className="App">
      <div className="Builders">
        <QuestionnaireBuilder questions={ questions }
                              updateQuestions={ updateQuestions } />  
        <ResultsBuilder questions={ questions }
                        results={ results } 
                        setResults={ setResults }/>
        
      </div>
      <div className="Questionnaire block">
        <h2>Questionnaire</h2>
        <QuestionnaireQuestionList questions={ activeQuestions } 
                                   selections={ selections }
                                   handleChange={ updateState }/>
        <QuestionnaireSubmitButton isFinished={ isFinished }
                                   submitForm={ displayResults }/>
        <QuestionnaireResults isFinished={ isFinished }
                              isSubmitted={ isSubmitted }
                              questions={ questions } 
                              selections={ selections }
                              results={ results }/>
      </div>
      <div className="JSON block">
        <h2>JSON</h2>
        <JSONInput resetState={ resetState }/>
        <div className="block block__sub">
          <h3>JSON output</h3>
          <p>
            { JSON.stringify( {
              'results': results, 
              'questions': questions
            } ) }
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
