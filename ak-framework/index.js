const React = require('react');
const { useRef } = React;

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  // Load custom element definition and dynamic JIT observer
  require('./dist/ak-bootstrap.js');
}

function AkIcon({ set = 'lucide', name, size, color, stroke, className, ...props }) {
  const ref = useRef(null);

  // Return React custom element representation
  return React.createElement('ak-icon', {
    ref,
    set,
    name,
    size,
    color,
    stroke,
    class: className,
    ...props
  });
}

const akToast = isBrowser ? window.akToast : {
  success: () => {},
  danger: () => {},
  warning: () => {},
  info: () => {}
};

const akDialog = isBrowser ? window.ak : {
  alert: () => Promise.resolve(),
  confirm: () => Promise.resolve(false),
  prompt: () => Promise.resolve(null)
};

module.exports = {
  AkIcon,
  akToast,
  akDialog
};
