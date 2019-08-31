import * as React from 'react';

// hoc 생성 옵션
interface Options {}

// Wrapped 컴포넌트에 전달할 props
interface ExternalProps {
  exProp: number;
}

// hoc에 의해 추가된 props. export해서 래핑할 컴포넌트의 props에 추가한다.
export interface InjectedProps {
  addedProps: string;
}

// Wrapped 컴포넌트 state
interface State {}

const hoc = (options?: Options) => {
  return <OriginalProps extends {}>( // 래핑된 컴포넌트의 props는 generic 타입으로 지정
    OriginalComponent:
      | React.ComponentClass<OriginalProps & InjectedProps>
      | React.StatelessComponent<OriginalProps & InjectedProps>
  ) => {
    type ResultProps = OriginalProps & ExternalProps;

    return class WrappedComponent extends React.Component<ResultProps, State> {
      constructor(props: ResultProps) {
        super(props);
        this.state = {};
      }

      render() {
        const passedProps = Object.assign({}, this.props, {
          addedProps: 'test',
        });

        return <OriginalComponent {...passedProps} {...this.state} />;
      }
    };
  };
};

export default hoc;

// 래핑할 컴포넌트 샘플
interface DemoProps {}
const DemoComponent: React.SFC<DemoProps & InjectedProps> = props => {
  const { children, ...restProps } = props;

  return <div {...restProps}>TSSFC</div>;
};

// 래핑된 컴포넌트
const HOCDemo = hoc()(DemoComponent);

// 래핑한 컴포넌트 사용 예제. external props를 전달해야 한다.
export const SampleUseOfHOC = props => {
  return (
    <div>
      <HOCDemo exProp={1} />
    </div>
  );
};
