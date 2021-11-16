import { generateId } from '../utils.js';

import QuestionnaireBuilderQuestion from './QuestionnaireBuilderQuestion.js';


const QuestionnaireBuilder = ( { questions, updateQuestions } ) => {
  const addQuestion = ( data ) => {
    let copy = [ ...questions, { 
      id: generateId(), 
      answers: [], 
      text: '',
      condition_block: null,
      content_blocks: [],
      type: 'radio',
      required: true
    } ];
    updateQuestions( copy );
  }

  const deleteQuestion = ( id ) => {
    let copy = [ ...questions ];
    let index = copy.findIndex( item => item.id === id );
    copy.splice( index, 1 );
    updateQuestions( copy );
  }

  const updateQuestion = ( id, prop, val ) => {
    console.log('updating', id, prop, val)
   let copy = [ ...questions ];
   let index = copy.findIndex( item => item.id === id );
   copy[index][prop] = val;
   updateQuestions( copy );
 }
  return (
    <div>
      <h2>Questions</h2>
      { questions.length > 0 && questions.map( ( item, index ) => (
        <QuestionnaireBuilderQuestion question={ item } 
                                      key={ item.id }
                                      updateQuestion={updateQuestion} 
                                      handleDelete={deleteQuestion} 
                                      questions={questions}
                                      index={ index }/>
      ) ) } 
      <button className="a-btn" onClick={addQuestion}>
        {`Add ${questions.length ? 'another' : 'a'} question`}
      </button>
    </div>    
  )
};

export default QuestionnaireBuilder;