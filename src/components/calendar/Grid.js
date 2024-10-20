/**
 *
 * @param {object} props
 * @param {Date} props.date
 * @param {(date: Date) => React.ReactNode} props.onCellRender
 * @returns
 */
function Grid(props) {
  const date = props.date;
  const year = date.getFullYear();
  const month = date.getMonth();

  const currentDate = new Date();

  const firstCell = new Date(year, month, 1);
  firstCell.setDate(firstCell.getDate() - firstCell.getDay());

  return (
    <div className="Calendar__grid-days">
      {Array(35)
        .fill(null)
        .map((_, index) => {
          const cellYear = firstCell.getFullYear();
          const cellMonth = firstCell.getMonth();
          const cellDate = new Date(
            cellYear,
            cellMonth,
            firstCell.getDate() + index
          );
          const cellDay = cellDate.getDate();
          const isCurrentMonth = month === cellDate.getMonth();

          const isCurrentDate =
            cellDate.getFullYear() === currentDate.getFullYear() &&
            cellDate.getMonth() === currentDate.getMonth() &&
            cellDate.getDate() === currentDate.getDate();

          return (
            <div
              className={`Calendar__day ${
                isCurrentMonth ? undefined : "Calendar__day_not-current-month"
              }
            ${isCurrentDate ? "Calendar__day_current-day" : undefined}`}
            >
              {props.onCellRender ? props.onCellRender(cellDate) : cellDay}
            </div>
          );
        })}
    </div>
  );
}

export default Grid;
