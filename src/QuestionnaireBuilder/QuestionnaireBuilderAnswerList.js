import { generateId } from '../utils.js';

import Answer from './QuestionnaireBuilderAnswer.js';


const AnswerList = ( {
  question, updateQuestion, questions
} ) => {
  const answers = question.answers;
  
  const addAnswer = () => {
    let copy = answers.length ? [ ...answers ] : [];
    copy.push({
      id: generateId(),
      text: ''
    });
    updateQuestion( question.id, 'answers', copy );
  }

  const updateAnswer = ( id, prop, val ) => {
    let copy = [ ...answers ];
    let index = copy.findIndex(item => item.id === id );
    let answer = copy[index];
    answer[prop] = val;
    copy[index] = answer;
    updateQuestion( question.id, 'answers', copy );
  }

  const deleteAnswer = ( id ) => {
    let copy = [ ...answers ];
    let index = copy.findIndex( item => item.id === id );
    copy.splice( index, 1 );
    updateQuestion( question.id, 'answers', copy );
  }

  return (
    <div className="answer-section block block__sub">
      <h4>Answers</h4>
      { answers.length > 0 && answers.map( ( item, index ) => (
        <Answer answer={ item } 
                questionToExclude={ question.id }
                questions={ questions }
                key={ item.id } 
                handleUpdate={ updateAnswer }
                handleDelete={ deleteAnswer }
                index={ index }/>
      ) ) } 
      <button className="a-btn" 
              onClick={ addAnswer }
              type="button">
        {`Add ${answers.length ? 'another' : 'an'} answer`}
      </button>
    </div>
  )
};

export default AnswerList;