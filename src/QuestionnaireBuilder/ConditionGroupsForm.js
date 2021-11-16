import ConditionGroupForm from './ConditionGroupForm.js';
import { generateId } from '../utils.js';

const ConditionGroupsForm = ( {
  conditionBlock, handler, questions, questionToExclude
} ) => {
  const conditionGroups = conditionBlock.condition_groups || [];
  
  const addConditionGroup = () => {
    let data = Object.assign( {}, conditionBlock );
    data.condition_groups = [ ...conditionGroups, {
      id: generateId(), 
      type: 'all', 
      conditions: []
    } ];
    handler( data );
  }

  const updateConditionGroup = ( data ) => {
    let block = Object.assign( {}, conditionBlock );
    let groups = [ ...conditionGroups ];
    let index = groups.findIndex( item => item.id === data.id );
    groups[index] = data;
    block.condition_groups = groups;
    handler( block );
  };

  const deleteConditionGroup = ( id ) => {
    let block = Object.assign( {}, conditionBlock );
    let groups = [ ...conditionGroups ];
    let index = groups.findIndex( item => item.id === id );
    groups.splice( index, 1 );
    block.condition_groups = groups;
    handler( block );
  };

  return (
    <div>
      { conditionGroups.length > 0 && conditionGroups.map( ( item, index ) => (
        <ConditionGroupForm conditionGroup={ item }
                            onUpdate={ updateConditionGroup }
                            onDelete={ deleteConditionGroup }
                            questions={ questions }
                            questionToExclude={ questionToExclude }
                            type="group"
                            key={ item.id }/>
      ) ) }
      <button className="a-btn a-btn__link u-mt15"
              type="button"
              onClick={ addConditionGroup }>
        {`Add ${conditionGroups.length ? 'another' : 'a'} condition group`}
      </button>
      
    </div>
  )
};

export default ConditionGroupsForm;