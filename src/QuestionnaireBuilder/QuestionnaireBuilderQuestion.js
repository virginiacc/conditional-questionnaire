import AnswerList from './QuestionnaireBuilderAnswerList.js';
import ConditionBlock from './ConditionBlock.js';
import ContentBlockList from './QuestionnaireBuilderContentBlockList.js';
import Filter from '../FormElements/Filter.js';

const QuestionnaireBuilderQuestion = ( {
  question, updateQuestion, handleDelete, questions, index
} ) => {
  const type = question.type || 'radio';
  const required = question.required;

  return (
      <form className="block
                       block__sub 
                       block__border-bottom
                       block__border-left
                       block__border-right
                       block__border-top
                       u-clearfix
                       decision-tree-node-item">
        <div className="u-clearfix action-row">
          <h3>Question { index + 1 }</h3>
          <button className="a-btn
                             a-btn__link
                             a-btn__warning
                             delete-button" 
                  type="button"
                  onClick={ () => handleDelete( question.id ) }>
            Delete question
          </button>
        </div>
        <div className="question-type">
          <Filter id={`question_${question.id}_type`}
                  options={ [ 
                            { label:'radio', value:'radio' }, 
                            { label:'checkbox', value:'checkbox' }
                          ] }
                  value={ type }
                  onChange={ ( val ) => updateQuestion( 
                    question.id, 'type', val 
                  ) }
                  label="Type"/>
        </div>
        <div className="m-form-field m-form-field__checkbox u-mb15 required-row">
          <input className="a-checkbox hover"
                 id={`required_${question.id}`}
                 type="checkbox"
                 checked={ !!required }
                 onChange={ ( e ) => updateQuestion( 
                    question.id, 'required', e.target.checked 
                  ) }/>
          <label className="a-label" htmlFor={`required_${question.id}`}>Required</label>
        </div>
        <ConditionBlock conditionBlock={ question.condition_block } 
                        handler={ ( val ) => updateQuestion( 
                          question.id, 'condition_block', val 
                        ) }
                        questions={ questions } 
                        questionToExclude={ question.id }/>
        <ContentBlockList question={ question }
                          updateQuestion={ updateQuestion }
                          questions={ questions }/>
        <AnswerList question={ question }
                    updateQuestion={ updateQuestion }
                    questions={ questions }/>
     </form>
  )
};

export default QuestionnaireBuilderQuestion;