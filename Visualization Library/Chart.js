import * as d3 from "d3";
import { useEffect, useRef } from "react";

function Chart({ data }) {
  const ref = useRef();

  useEffect(() => {
    if (!data.length) return;

    const svg = d3.select(ref.current)
      .attr("width", 500)
      .attr("height", 300);

    const bars = svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (_, i) => i * 30)
      .attr("y", d => 300 - d.intensity * 10)
      .attr("width", 25)
      .attr("height", d => d.intensity * 10)
      .attr("fill", "blue");

  }, [data]);

  return <svg ref={ref}></svg>;
}

export default Chart;
