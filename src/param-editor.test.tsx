import { it, describe, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ParamEditor, type Model, type Param } from "./param-editor";

describe("Param editor tests", async () => {
  const getMockData = () => {
    const params: Param[] = [
      {
        id: 1,
        name: "Назначение",
        type: "string",
      },
      {
        id: 2,
        name: "Длина",
        type: "string",
      },
      {
        id: 3,
        name: "Материал",
        type: "string",
      },
      {
        id: 4,
        name: "Состояние",
        type: "string",
      },
    ];

    const model: Model = {
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
    };

    return { params, model };
  };

  it("Renders fields based on params", () => {
    const { model, params } = getMockData();
    render(<ParamEditor model={model} params={params} />);
    params.forEach(({ name }) => {
      expect(screen.getByLabelText(name)).toBeInTheDocument();
      expect(screen.getByLabelText(name)).toBeVisible();
      expect(screen.getByLabelText(name)).toBeEnabled();
    });
  });

  it("Initializes correctly from model.paramValues", () => {
    const { model, params } = getMockData();
    render(<ParamEditor model={model} params={params} />);
    params.forEach(({ id, name }) => {
      const modelValue = model.paramValues.find(
        (paramValue) => paramValue.paramId === id,
      );
      if (modelValue) {
        expect(screen.getByLabelText(name)).toHaveValue(modelValue.value);
      }
    });
  });

  it("Returns correct model from getModel after changes", () => {
    const { model, params } = getMockData();
    const editor = new ParamEditor({ model, params });
    render(editor.render());
    params.forEach(({ id, name }) => {
      const input = screen.getByLabelText(name) as HTMLInputElement;
      fireEvent.change(input, { target: { value: `new value ${id}` } });
    });

    const updatedModel = editor.getModel();
    updatedModel.paramValues.forEach(({ value, paramId }) => {
      expect(value).toBe(`new value ${paramId}`);
    });
  });
});
