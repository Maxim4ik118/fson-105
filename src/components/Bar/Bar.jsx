// rafce

const Bar = ({ beer, wine, whiskey, total, onBarSupplyAdd }) => {
  return (
    <div>
      <ul>
        <li>Beer: {beer}</li>
        <li>Wine: {wine}</li>
        <li>Whiskey: {whiskey}</li>
        <li>
          <b>Total</b>: {total}
        </li>
      </ul>

      <button type="button" onClick={() => onBarSupplyAdd("beer")}>
        Add beer
      </button>
      <button type="button" onClick={() => onBarSupplyAdd("wine")}>
        Add wine
      </button>
      <button type="button" onClick={() => onBarSupplyAdd("whiskey")}>
        Add whiskey
      </button>
    </div>
  );
};

export default Bar;
