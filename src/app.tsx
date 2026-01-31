import { useRef } from "react";
import { ParamEditor, type Model, type Param } from "./param-editor";

export const App = () => {
  const params = useRef<Param[]>([
    {
      id: 1,
      name: "Назначение",
    },
    {
      id: 2,
      name: "Длина",
    },
    {
      id: 3,
      name: "Материал",
    },
    {
      id: 4,
      name: "Состояние",
    },
  ]);

  const model = useRef<Model>({
    paramValues: [
      {
        paramId: 1,
        value: "повседневное",
      },
      {
        paramId: 2,
        value: "макси",
      },
      {
        paramId: 3,
        value: "",
      },
      {
        paramId: 4,
        value: "",
      },
    ],
    colors: [],
  });

  return (
    <div>
      <ParamEditor model={model.current} params={params.current} />
    </div>
  );
};
