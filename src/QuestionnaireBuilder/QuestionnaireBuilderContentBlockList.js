import { generateId } from '../utils.js';

import ContentBlock from './QuestionnaireBuilderContentBlock.js';


const ContentBlockList = ( {
  question, updateQuestion, questions
} ) => {
  const contentBlocks = question.content_blocks;

  const addContentBlock = () => {
    let copy = contentBlocks.length ? [...contentBlocks] : [];
    copy.push({
      id: generateId(),
      text: ''
    });
    updateQuestion( question.id, 'content_blocks', copy );
  }

  const updateContentBlock = ( id, prop, val ) => {
    let copy = [ ...contentBlocks ];
    let index = copy.findIndex(item => item.id === id );
    let answer = copy[index];
    answer[prop] = val;
    copy[index] = answer;
    updateQuestion( question.id, 'content_blocks', copy );
  }

  const deleteContentBlock = (id) => {
    let copy = [ ...contentBlocks ];
    let index = copy.findIndex( item => item.id === id );
    copy.splice( index, 1 );
    updateQuestion( question.id, 'content_blocks', copy );
  }
  
  return (
    <div className="answer-section block block__sub">
      <h4>Content blocks</h4>
      { contentBlocks.length > 0 && contentBlocks.map( ( item, index ) => (
        <ContentBlock block={ item } 
                      questionToExclude={ question.id }
                      questions={ questions }
                      key={ item.id } 
                      handleUpdate={ updateContentBlock }
                      handleDelete={ deleteContentBlock }
                      index={ index }/>
      ) ) } 
      <button className="a-btn"
              type="button"
              onClick={ addContentBlock }>
        {`Add ${contentBlocks.length ? 'another' : 'a'} content block`}
      </button>
    </div> 
  )
};

export default ContentBlockList;