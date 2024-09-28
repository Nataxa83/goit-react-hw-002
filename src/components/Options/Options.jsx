const Options = ({ updateFeedback, resetFeedback, showReset }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")} type="button">
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} type="button">
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} type="button">
        Bad
      </button>
      {showReset > 0 && (
        <button onClick={() => resetFeedback("reset")} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
