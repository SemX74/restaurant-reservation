import { NavLink, useNavigate } from "react-router-dom";
import "./TableStats.scss";
interface TableStatsProps {}
interface isFilled {
  reservated: number;
  capacity: number;
}
const TableStats: React.FC<TableStatsProps> = () => {
  const navigate = useNavigate();
  const rooms = [
    { name: "Dinner", capacity: 12, reservated: 8, url: "/" },
    { name: "Patio", capacity: 8, reservated: 2, url: "patio" },
    { name: "Terrace", capacity: 6, reservated: 6, url: "terrace" },
  ];

  const isFilled = ({ reservated, capacity }: isFilled): string => {
    if (reservated / capacity <= 0.5) {
      return "tablestats-room__capacity tablestats-room__capacity__low";
    } else if (reservated / capacity > 0.5 && reservated / capacity < 0.9) {
      return "tablestats-room__capacity tablestats-room__capacity__mid";
    } else if (reservated / capacity === 1) {
      return "tablestats-room__capacity tablestats-room__capacity__full";
    } else {
      return "tablestats-room__capacity";
    }
  };

  return (
    <section className="tablestats">
      {rooms.map((room) => (
        <NavLink
          to={room.url}
          className={({ isActive }) =>
            `tablestats__room ${isActive && " tablestats__room__active "}`
          }
        >
          <p className="tablestats-room__name">{room.name}</p>
          <span
            className={isFilled({
              reservated: room.reservated,
              capacity: room.capacity,
            })}
          >
            {room.reservated}/{room.capacity}
          </span>
        </NavLink>
      ))}
    </section>
  );
};

export default TableStats;
