import Filter from '../FormElements/Filter.js';
import { getItemById } from '../utils.js';

const ConditionForm = ( {
  condition, questions, questionToExclude, handleDelete, handleUpdate
} ) => {
  const question = condition.question || '';
  const questionOptions = [];
  questions.forEach( ( q, i ) => {
    if ( q.id !== questionToExclude ) {
      questionOptions.push({ label: i + 1, value: q.id });
    }
  });
  const showAnswers = question && ['equals', 'not_equals'].includes( 
    condition.type
  );
  const getAnswerOptions = () => {
    let questionObj = getItemById( questions, question );
    let answers = questionObj.answers;
    return answers.map( a => { return { label: a.text, value: a.id } } )
  };
  
  return (
    <div>
      <div className="u-clearfix action-row">
        <h4>Condition</h4>
        <button className="a-btn 
                           a-btn__link
                           a-btn__warning
                           delete-button" 
                onClick={ () => handleDelete( condition.id ) }
                type="button">
          Delete condition
        </button>
      </div>
      <div className="condition-row">
        <span>Display if answer to question </span>
        <Filter id={ `condition_${condition.id}_question` }
                options={ questionOptions }
                value={ question }
                onChange={ ( val ) => handleUpdate( 
                    condition.id, 'question', val 
                ) }
                placeholder="question" />
        <Filter id={`condition_${condition.id}_type`}
                options={ [
                  { label: 'exists', value: 'exists' },
                  { label: 'is', value: 'equals' },
                  { label: 'is not', value: 'not_equals' }
                ] }
                value={ condition.type}
                onChange={ ( val ) => handleUpdate( 
                    condition.id, 'type', val 
                ) }
                placeholder="match type"/>
        { showAnswers && (
          <Filter id={ `condition_${condition.id}_answer` }
                  options={ getAnswerOptions() }
                  value={ condition.answer }
                  onChange={ ( val ) => handleUpdate( 
                      condition.id, 'answer', val 
                  ) }
                  placeholder="answer"/>
        ) }
      </div>
    </div>
  )
};

export default ConditionForm;