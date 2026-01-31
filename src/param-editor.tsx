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
  constructor(props: Props) {
    super(props);
    this.state = {
      model: this.props.model,
    };
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
                type="text"
                defaultValue={this.getDefaultValue(param.id)}
                name={param.name}
              />
            </>
          );
        })}
      </section>
    );
  }
}
