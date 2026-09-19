import Badge from "../ui/Badge";

function TechnologyBadge({ technology }) {
  return (
    <Badge variant="technology">
      {technology}
    </Badge>
  );
}

export default TechnologyBadge;