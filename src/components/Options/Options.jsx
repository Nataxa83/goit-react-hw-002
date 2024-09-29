import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, showReset }) => {
  return (
    <div className={css.options}>
      <button
        className={css.button}
        onClick={() => updateFeedback("good")}
        type="button"
      >
        Good
      </button>
      <button
        className={css.button}
        onClick={() => updateFeedback("neutral")}
        type="button"
      >
        Neutral
      </button>
      <button
        className={css.button}
        onClick={() => updateFeedback("bad")}
        type="button"
      >
        Bad
      </button>
      {showReset > 0 && (
        <button
          className={css.button}
          onClick={() => resetFeedback("reset")}
          type="button"
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
