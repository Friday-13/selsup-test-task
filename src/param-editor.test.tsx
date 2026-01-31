import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ParamEditor } from "./param-editor";

describe("Param editor tests", async () => {
  const getMockData = () => {
    const params = [
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
    ];

    const model = {
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

  it("Returns correct model from getModel after changes", () => {});
});
