import { Component } from "react";
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
  render() {
    return (
      <section className={styles.paramEditor}>
      </section>
    );
  }
}
