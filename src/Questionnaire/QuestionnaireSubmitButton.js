const QuestionnaireSubmitButton = ( { isFinished, submitForm } ) => {
  const handleClick = ( ) => {
    if ( isFinished ) {
      submitForm();
    }
  }

  return (
      <button className={`a-btn ${isFinished ? '' : 'a-btn__disabled'}`} 
              type="button"
              onClick={ handleClick }
              title={`${isFinished ? '' : 'disabled'}`}>
        View results
      </button>
  )
}

export default QuestionnaireSubmitButton;