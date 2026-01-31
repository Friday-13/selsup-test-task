import { Component, type ChangeEvent } from "react";
import styles from "./param-editor.module.scss";

export interface Param {
  id: number;
  name: string;
  // type: 'string';
}
interface ParamValue {
  paramId: number;
  value: string;
}

interface Color {
  id: number;
  value: string;
}

export interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}
interface Props {
  params: Param[];
  model: Model;
}

interface State {
  model: Model;
}

export class ParamEditor extends Component<Props, State> {
  public getModel(): Model {
    return this.state.model;
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      model: this.props.model,
    };
  }

  private handleChange(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) {
    const param = this.state.model.paramValues.find(
      (value) => value.paramId.toString() === e.target.id,
    );
    if (!param) return;
    param.value = e.target.value;
  }

  private getDefaultValue(id: number) {
    const value = this.props.model.paramValues.find(
      (value) => value.paramId === id,
    );
    return value?.value;
  }

  render() {
    return (
      <section className={styles.paramEditor}>
        {this.props.params.map((param) => {
          return (
            <>
              <label htmlFor={`${param.id}`}>{param.name}</label>
              <input
                id={`${param.id}`}
                onChange={(e) => this.handleChange(e)}
                type="text"
                defaultValue={this.getDefaultValue(param.id)}
                name={param.name}
              />
            </>
          );
        })}

        <button
          onClick={() => {
            const result = this.getModel();
            console.log(result.paramValues);
          }}
        >
          Get Model
        </button>
      </section>
    );
  }
}
