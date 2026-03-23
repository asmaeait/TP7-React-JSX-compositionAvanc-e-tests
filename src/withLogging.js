// HOC withLogging - Asma Ait Elmahjoub
function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log(`[${new Date().toLocaleTimeString()}] Props recues :`, props);
    return <WrappedComponent {...props} />;
  };
}

export default withLogging;