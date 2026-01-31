import {
  Component,
  type ChangeEvent,
  type HTMLInputTypeAttribute,
} from "react";
import styles from "./param-editor.module.scss";

export type ParamType = "string";

export interface Param {
  id: number;
  name: string;
  type: ParamType;
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

  private getInputType(paramType: ParamType): HTMLInputTypeAttribute {
    if (paramType === "string") {
      return "text";
    }
    return "text";
  }

  render() {
    return (
      <section className={styles.paramEditor}>
        {this.props.params.map((param) => (
          <LabledInput
            key={`param-${param.id}`}
            id={param.id}
            name={param.name}
            defaultValue={this.getDefaultValue(param.id)}
            onChange={this.handleChange.bind(this)}
            type={this.getInputType(param.type)}
          />
        ))}
      </section>
    );
  }
}

interface ILabledInputProps {
  id: number;
  name: string;
  defaultValue?: string;
  onChange: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
}
class LabledInput extends Component<ILabledInputProps> {
  getInputType() {}
  render() {
    return (
      <div className={styles.param}>
        <label htmlFor={`${this.props.id}`}>{this.props.name}</label>
        <input
          id={`${this.props.id}`}
          onChange={(e) => this.props.onChange(e)}
          type={this.props.type}
          defaultValue={this.props.defaultValue}
          name={this.props.name}
        />
      </div>
    );
  }
}
