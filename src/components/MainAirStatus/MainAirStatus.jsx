import { cities } from "../../constants/area";

import { Badge, Stack } from "react-bootstrap";

const MainAirStatus = () => {
  return (
    <div>
      <div className="airStatus">
        <Stack direction="horizontal" gap={2} className="flex-wrap">
          {cities.map((city, index) => (
            <Badge pill bg="secondary" key={index}>
              {city.name}
            </Badge>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default MainAirStatus;
