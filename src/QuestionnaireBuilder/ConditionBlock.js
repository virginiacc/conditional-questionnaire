import ConditionBlockForm from './ConditionBlockForm.js';

const ConditionBlock = ( {
  conditionBlock, handler, questions, questionToExclude
} ) => {
  // handler expects condition block data obj 
  const addConditionBlock = () => {
    handler( { 
      type: 'all', 
      conditions: [], 
      condition_groups: []
    } );
  }

  return (
    <div>
      { conditionBlock ? (
        <ConditionBlockForm conditionBlock={ conditionBlock }
                            handler={ handler }
                            questions={ questions }
                            questionToExclude={ questionToExclude }/>
      ) : (
          <button className="a-btn a-btn__link"
                  type="button"
                  onClick={ addConditionBlock }>
            Add conditional display logic (optional)
          </button>
        )
      }
      </div>
  )
};

export default ConditionBlock;