import ConditionGroupForm from './ConditionGroupForm.js';

const ConditionBlockForm = ( {
  conditionBlock, handler, questions, questionToExclude
} ) => {

  return (
    <div>
      <ConditionGroupForm conditionGroup={ conditionBlock }
                          onUpdate={ handler }
                          onDelete={ () => handler( null ) }
                          questions={ questions }
                          questionToExclude={ questionToExclude }/>
    </div>
  )
};

export default ConditionBlockForm;