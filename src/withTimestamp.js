// HOC avec timestamp - Asma Ait Elmahjoub
function withTimestamp(WrappedComponent) {
  return function EnhancedComponent(props) {
    const timestamp = new Date().toLocaleString('fr-FR');
    return (
      <div>
        <p style={{ fontSize: '12px', color: '#888' }}>
          Rendu a : {timestamp}
        </p>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withTimestamp;