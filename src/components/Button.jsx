
export const Button= (props) => {
  const { text, style } = props;
  return (
    <button className={style}>
      {text}
    </button>
  )
}
