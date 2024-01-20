const SelectRating = ({ selected, setSelected }) => {
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    console.log(selected);
  };
  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <>
          <li key={i + 1}>
            <input
              type="radio"
              name="rating"
              value={i + 1}
              onChange={handleChange}
              checked={selected === i + 1}
              id={`num${i + 1}`}
            />

            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        </>
      ))}
    </ul>
  );
};
export default SelectRating;
