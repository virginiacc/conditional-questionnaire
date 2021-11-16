import ConditionBlock from './ConditionBlock.js';

const QuestionnaireBuilderAnswer = ( {
  answer, handleUpdate, handleDelete, questions, questionToExclude, index
} ) => {
  return (
    <div className="o-well ">
        <div className="u-clearfix action-row">
          <h4>Answer { index + 1 }</h4>
          <button className="a-btn
                             a-btn__link
                             a-btn__warning
                             delete-button"
                  type="button"
                  onClick={ () => handleDelete( answer.id )}>
            Delete answer
         </button>
       </div>
       <ConditionBlock conditionBlock={ answer.condition_block } 
                       handler={ ( data ) => handleUpdate( 
                        answer.id, 'condition_block', data 
                       ) }
                       questions={ questions } 
                       questionToExclude={ questionToExclude }/>
       <div className="m-form-field block block__sub">
        <label className="a-label
                          a-label__heading"
              htmlFor={`answer-text-field-${answer.id}`}>
          Answer text
        </label>
        <input id={`answer-text-field-${answer.id}`}
               name="answerTextField"
               type="text"
               value={ answer.text} 
               onChange={ ( e ) => handleUpdate( 
                    answer.id, 'text', e.target.value 
               ) }
               placeholder="Answer text"
               className="a-text-input a-text-input__full" />
      </div>
     </div>
  )
};

export default QuestionnaireBuilderAnswer;