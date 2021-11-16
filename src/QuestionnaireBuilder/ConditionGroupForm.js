import ConditionForm from './ConditionForm.js';
import ConditionGroupsForm from './ConditionGroupsForm.js';

import Filter from '../FormElements/Filter.js';
import { generateId } from '../utils.js';

const ConditionGroupForm = ( {
  conditionGroup, onUpdate, onDelete, 
  questions, questionToExclude, type="block"
} ) => {
  const conditions = conditionGroup.conditions || [];
  // this will either get a condition block or a condition group
  // inside that condition block
  // condition blocks don't have ids, condition groups do
  // this form handles updating the type and the conditions
  // array of the group and deleting the group
  // on update, it passes updated data obj and on 
  // delete it passes the id of the condition group
  const handleUpdate = ( prop, val ) => {
    let data = Object.assign( {}, conditionGroup );
    data[prop] = val;
    onUpdate( data );
  };

  const addCondition = () => {
    let copy = [ ...conditions, {
      id: generateId(),
      type: 'exists',
      question: '',
      answer: ''
    } ];
    handleUpdate( 'conditions', copy );
  };

  const updateCondition = ( id, prop, val ) => {
    let copy = [ ...conditions ];
    let index = copy.findIndex( item => item.id === id );
    copy[index][prop] = val;
    handleUpdate( 'conditions', copy );
  };

  const deleteCondition = ( id ) => {
    let copy = [ ...conditions ];
    let index = copy.findIndex( item => item.id === id );
    copy.splice( index, 1 );
    handleUpdate( 'conditions', copy );
  };

  return (
    <div className="block 
                    block__sub">
      <div className="u-clearfix action-row">
        <h4>Condition { type }</h4>
        <button className="a-btn
                           a-btn__link
                           a-btn__warning
                           delete-button"
                type="button" 
                onClick={ () => onDelete( conditionGroup.id ) }>
          Delete condition { type }
        </button>
      </div>
      <div className="o-well">
        <div className="condition-type-row">
          <span>Display if </span>
          <Filter options={ [
                    { label:'any', value:'any' }, 
                    { label:'all', value:'all' }
                  ] }
                  value={ conditionGroup.type }
                  // id={`condition_block__${props.type}`}
                  onChange={ ( val ) => handleUpdate( 'type', val ) }/>
          <span>of the following conditions are met:</span>
        </div>

        <div className="block block__sub block__flush-bottom">
          {  conditions.length > 0 && conditions.map( ( item, index ) => (
            <ConditionForm handleUpdate={ updateCondition } 
                           handleDelete={ deleteCondition }
                           questions={ questions }
                           questionToExclude={ questionToExclude }
                           condition={ item } 
                           key={ item.id }/>
          ) ) } 
        </div>
        <button className="a-btn a-btn__link"
                    type="button"
                    onClick={ addCondition }>
              {`Add ${conditions.length ? 'another' : 'a'} condition`}
        </button>
        {type === 'block' && 
          <ConditionGroupsForm conditionBlock={ conditionGroup }
                               handler={ onUpdate }
                               questions={ questions }
                               questionToExclude={ questionToExclude }/>
        }
      </div>
    </div>
  )
};

export default ConditionGroupForm;