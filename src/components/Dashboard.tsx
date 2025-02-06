import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem("userForm");
    return savedData ? JSON.parse(savedData) : null;
  });

  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter((prev) => prev + 1);
  const decrementCounter = () => setCounter((prev) => (prev > 0 ? prev - 1 : 0));

  const chartData = [
    { month: "Jan", activity: 40 },
    { month: "Feb", activity: 55 },
    { month: "Mar", activity: 35 },
    { month: "Apr", activity: 70 },
    { month: "May", activity: 50 },
  ];

  const chartData2 = [
    { name: "Emails Sent", value: 5 },
    { name: "Calls Made", value: 8 },
    { name: "Tasks Completed", value: 12 },
  ];

  return (
    <div className="dashboard-container">
      

      {userData ? (
        <Grid container spacing={3}>
          {/* User Profile Card */}
          <Grid item xs={12} md={6}>
            <Card className="profile-card">
              <CardContent>
                <Typography className="heading" variant="h6">USER PROFILE</Typography>
                <Typography><strong>ID:</strong> {userData.id}</Typography>
                <Typography><strong>Name:</strong> {userData.name}</Typography>
                <Typography><strong>Address:</strong> {userData.address}</Typography>
                <Typography><strong>Email:</strong> {userData.email}</Typography>
                <Typography><strong>Phone:</strong> {userData.phone}</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Increment-Decrement Counter Card */}
          <Grid item xs={12} md={6}>
            <Card className="counter-card">
              <CardContent>
                <Typography variant="h6">COUNTER</Typography>
                <Typography variant="h4">{counter}</Typography>
                <Button variant="contained" color="secondary" onClick={decrementCounter} disabled={counter === 0}>
                  Decrement
                </Button>
                <Button variant="contained" color="primary" onClick={incrementCounter} style={{ margin: "10px" }}>
                  Increment
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* User Profile Trends (Chart) */}
          <Grid item xs={12} md={6}>
            <Card className="line-chart-card">
            <CardContent>
                <Typography variant="h6">USER ACTIVITY MONTHLY TRENDS</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                  <defs>
      {/* Gradient for the background */}
      <linearGradient id="backgroundGradient" x1="0.5" y1="0.5" x2="0.5" y2="1">
        <stop offset="0%" stopColor="rgb(35,35,36)" stopOpacity={0.3} />
        <stop offset="100%" stopColor="#d268cc" stopOpacity={0.3} />
      </linearGradient>
    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <rect x="64" y="-4" width="90%" height="90%" fill="url(#backgroundGradient)" />
                    <Line type="monotone" dataKey="activity" stroke="#d268cc" strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card className="chart-card">
            <CardContent>
                <Typography variant="h6">USER ACTIVITIES COMPLETED</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData2}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#d268cc"/>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h6" className="no-user-message">No user data found. Please fill the form.<a href="./form">User Form</a></Typography>
      )}
    </div>
  );
};

export default Dashboard;



