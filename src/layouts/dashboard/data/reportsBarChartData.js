

const reportsBarChartData = {
  chart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "Sales", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
  },
  items: [
    {
      icon: { color: "primary", component: "library_books" },
      label: "Total",
      progress: { content: "30", percentage: 50 },
    },
    {
      icon: { color: "info", component: "touch_app" },
      label: "Today",
      progress: { content: "2", percentage: 20 },
    },
    {
      icon: { color: "warning", component: "payment" },
      label: "Earned",
      progress: { content: "+55%", percentage: 30 },
    },
    {
      icon: { color: "error", component: "extension" },
      label: "Cancel",
      progress: { content: "4", percentage: 50 },
    },
  ],
};

export default reportsBarChartData;
