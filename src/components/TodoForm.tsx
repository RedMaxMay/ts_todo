import React, { useRef } from "react";

interface ITodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<ITodoFormProps> = ({ onAdd }) => {
  // const [title, setTitle] = useState<string>("");

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  // };

  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onAdd(ref.current!.value);
      ref.current!.value = "";
      // console.log(title);
      // setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Add task name"
        onKeyUp={keyPressHandler}
      />

      <label htmlFor="title" className="active">
        Add task name
      </label>
    </div>
  );
};
