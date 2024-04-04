import { FluentIcon } from '@fluentui/react-icons';
import { useLayoutContext } from 'context';
import { useEffect } from 'react';

const withTitle = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  title: string,
  icon: FluentIcon | null = null
) => {
  return (props: P) => {
    const { setTitle, setIcon } = useLayoutContext();

    useEffect(() => {
      setTitle(title);
      setIcon(icon);
    }, [setTitle, setIcon]);

    return <WrappedComponent {...props} />;
  };
};

export default withTitle;
