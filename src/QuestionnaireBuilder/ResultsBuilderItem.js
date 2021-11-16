import ConditionBlock from './ConditionBlock.js';
import Filter from '../FormElements/Filter.js';

const ResultItem = ( {
  result, handleUpdate, handleDelete, questions, index
} ) => {
  const id = result.id;
  return (
      <form className="block 
                       block__sub
                       block__border-bottom
                       block__border-left
                       block__border-right
                       block__border-top
                       u-clearfix
                       decision-tree-node-item 
                       block__padded-bottom
                       content-row">
        <div className="m-form-field">
          <div className="u-clearfix action-row">
            <h4>Result block { index + 1 }</h4>
            <button className="a-btn 
                               a-btn__link
                               a-btn__warning
                               delete-button" 
                    type="button"
                    onClick={ () => handleDelete( id ) }>
              Delete result block
            </button>
          </div>
          <div className="question-type">
            <Filter id={`result${result.id}_type`}
                    options={ [ 
                              { label:'text', value:'text' }, 
                              { label:'expandable group', value:'expandable' }
                            ] }
                    value={ result.type }
                    onChange={ ( val ) => handleUpdate( 
                      result.id, 'type', val 
                    ) }
                    label="Type"/>
          </div>
          <ConditionBlock conditionBlock={ result.condition_block } 
                          handler={ ( val ) => {
                            handleUpdate( id, 'condition_block', val )
                          } }
                          questions={ questions }/>


          <div className="block block__sub">
            <label className="a-label a-label__heading" 
                   htmlFor={ `resultField_${id}`}>
              Result block text
            </label>
            <textarea id={`resultField_${id}`}
                   name="textField"
                   type="text"
                   value={ result.text }
                   onChange={ ( e ) => { 
                    handleUpdate( id, 'text', e.target.value ) 
                   } }
                   placeholder="Result text"
                   className="a-text-input a-text-input__full" />
          </div>
      </div>
     </form>
  )
};

export default ResultItem;