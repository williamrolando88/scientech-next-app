"use client";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { TestModal } from "./TestModal";

export default function TasksPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" gutterBottom>
          Tasks Page
        </Typography>

        <Button onClick={() => setModalOpen(true)}>Open modal</Button>
      </Box>
      <TestModal onClose={setModalOpen} open={modalOpen} />
    </Container>
  );
}
