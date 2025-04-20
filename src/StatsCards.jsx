// components/StatsCards.js
import { Grid, Paper, Typography } from "@mui/material";

export default function StatsCards() {
  const stats = [
    { title: "Total active users", value: "18,765", change: "+2.6%" },
    { title: "Total installed", value: "4,876", change: "+0.2%" },
    { title: "Total downloads", value: "678", change: "-0.1%" },
  ];

  return (
    <Grid container spacing={2}>
      {stats.map((stat) => (
        <Grid item xs={12} md={4} key={stat.title}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="subtitle2">{stat.title}</Typography>
            <Typography variant="h5">{stat.value}</Typography>
            <Typography variant="caption">{stat.change} last 7 days</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
