const List = ({ items }) => {
    return (
      <div className="flex flex-wrap">
        <div className="w-1/2">
          <ul>
            {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
              <li key={index} className="mb-2 tex-[14px]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <ul>
            {items.slice(Math.ceil(items.length / 2)).map((item, index) => (
              <li key={index} className="mb-2 tex-[14px">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default List;
  