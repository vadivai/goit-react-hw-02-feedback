// export const Button = ({ children }) => {
//   return <button>{children}</button>;
// };

// export const Buttons = ({ options, onUpdate }) => {
//   return Object.keys(options).map(key => (
//     <button key={key} onClick={() => onUpdate(key)}>
//       {key}
//     </button>
//   ));
// };

export const Buttons = ({ option, onUpdate }) => {
  return (
    <button key={option} onClick={() => onUpdate(option)}>
      {option}
    </button>
  );
};
