import ConditionBlock from './ConditionBlock.js';

const QuestionnaireBuilderContentBlock = ( {
  block, handleUpdate, handleDelete, questions, questionToExclude, index
} ) => {
  return (
    <div className="o-well ">
      <div className="u-clearfix action-row">
        <h4>Content block { index + 1 }</h4>
        <button className="a-btn 
                           a-btn__link
                           a-btn__warning
                           delete-button" 
                type="button"
                onClick={ () => handleDelete( block.id ) }>
          Delete content block
        </button>
      </div>
      <ConditionBlock conditionBlock={ block.condition_block } 
                       handler={ ( data ) => handleUpdate( 
                        block.id, 'condition_block', data 
                       ) }
                       questions={ questions } 
                       questionToExclude={ questionToExclude }/>
      <div className="m-form-field block block__sub">
        <label className="a-label a-label__heading" 
               htmlFor={ `contentBlockText_${block.id}` }>
          Content block text
        </label>
        <textarea className="a-text-input a-text-input__full"
                  id={ `contentBlockText_${block.id}` }
                  onChange={ (e ) => handleUpdate( 
                    block.id, 'text', e.target.value 
                  ) }
                  placeholder="Content block text"
                  type="text"
                  value={ block.text }/>
      </div>
    </div>
  )
};

export default QuestionnaireBuilderContentBlock;