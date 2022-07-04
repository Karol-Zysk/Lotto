import { systemTypes } from "../../../../type";
import { Input, SystemInputsWrapper } from "../Calculations.style";

type InputsProps = {
  userHitsArr: [];
  dispatch: React.Dispatch<{
    type: any;
    payload: string;
  }>;
  system: systemTypes;
};

const inputValues = [
  "SET_HIT_SEVEN",
  "SET_HIT_EIGHT",
  "SET_HIT_NINE",
  "SET_HIT_TEN",
  "SET_HIT_ELEVEN",
  "SET_HIT_TWELVE",
];

const SystemInputs: React.FC<InputsProps> = ({ userHitsArr, dispatch }) => {
  return (
    <SystemInputsWrapper>
      {userHitsArr.map((hit, index) => {
        return (
          <Input
            key={index}
            value={hit}
            min="1"
            max="49"
            type="number"
            onChange={(event) =>
              dispatch({
                type: inputValues[index],
                payload: event.target.value,
              })
            }
          />
        );
      })}
    </SystemInputsWrapper>
  );
};

export default SystemInputs;
